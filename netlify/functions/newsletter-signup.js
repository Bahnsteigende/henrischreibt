// Netlify Function: nimmt E-Mail + Einwilligung aus dem Footer-Formular entgegen
// und trägt den Kontakt per Brevo-API in die temporäre Double-Opt-in-Liste ein.
// Das Eintragen in diese Liste löst die in Brevo eingerichtete Automation aus
// (Trigger "Kontakt zu Liste hinzugefügt" → sendet newsletter/email-doi-confirm.html).
//
// Benötigte Umgebungsvariablen (Netlify: Site settings → Environment variables,
// lokal: .env-Datei, siehe .env.example):
//   BREVO_API_KEY       — Brevo → Einstellungen → API-Schlüssel
//   BREVO_LIST_ID_TEMP  — ID der temporären Liste (Brevo → Kontakte → Listen, ID steht in der URL)

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Ungültige Anfrage." }) };
  }

  const email = typeof data.email === "string" ? data.email.trim() : "";
  const consent = data.consent === true;

  if (!EMAIL_PATTERN.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Bitte eine gültige E-Mail-Adresse angeben." }) };
  }
  if (!consent) {
    return { statusCode: 400, body: JSON.stringify({ error: "Bitte der Datenschutzerklärung zustimmen." }) };
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID_TEMP;

  if (!apiKey || !listId) {
    console.error("BREVO_API_KEY oder BREVO_LIST_ID_TEMP fehlt in den Umgebungsvariablen.");
    return { statusCode: 500, body: JSON.stringify({ error: "Serverfehler, bitte später erneut versuchen." }) };
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [Number(listId)],
      updateEnabled: true,
    }),
  });

  if (response.ok) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  const errorBody = await response.json().catch(() => ({}));
  console.error("Brevo-Fehler:", response.status, errorBody);
  return {
    statusCode: 502,
    body: JSON.stringify({ error: "Anmeldung fehlgeschlagen, bitte später erneut versuchen." }),
  };
};
