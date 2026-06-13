async function submitInquiry(payload) {
  const SUPABASE_URL = "https://imlbkwiopnvqflibbhss.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltbGJrd2lvcG52cWZsaWJiaHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMjUwNTEsImV4cCI6MjA5NjYwMTA1MX0.D2e5Ybfd-SXcS4jFY9SgBaijRkYYF-hMaXfdZXnd8y0";

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(payload)
    });
    return response.ok;
  } catch (err) {
    console.error('Inquiry error:', err);
    return false;
  }
}