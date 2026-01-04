const API_URL = "http://localhost:8000";

export async function fetchDealers() {
  const response = await fetch(`${API_URL}/dealers`);
  return response.json();
}

export async function loginUser(data) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return response.json();
}
