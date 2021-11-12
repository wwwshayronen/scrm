import { message } from 'antd';
// const API_URL = window.location.origin; replace with under row before production
const API_URL = 'http://localhost:5000';
const headers = { "Content-Type": "application/json" };

const info = () => {
  message.info('Lead deleted');
};

const add = (data) =>
  fetch(`${API_URL}/api/leads/add`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

const getData = (routeName) => fetch(`${API_URL}/${routeName}`);

const editLead = (lead, routeName) =>
  fetch(`${API_URL}/${routeName}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(lead),
  });

const deleteLead = (cardId) => {
  fetch((`${API_URL}/api/leads/delete/${cardId}`), {method: 'DELETE'})
      .then(() => info())
};

export { add, getData, editLead, deleteLead };
