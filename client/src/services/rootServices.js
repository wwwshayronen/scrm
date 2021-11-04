const API_URL = "http://localhost:5000";
const headers = { "Content-Type": "application/json" };

const add = (data) =>
  fetch(`${API_URL}/api/leads/add`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

const getData = (routeName) => fetch(`${API_URL}/${routeName}`);

const editLead = (lead, routeName) => fetch(`${API_URL}/${routeName}`, {
  method: "PUT",
  headers,
  body: JSON.stringify(lead),
});

export { add, getData, editLead };
