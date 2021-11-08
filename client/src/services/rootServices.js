import { message, Button } from 'antd';
const API_URL = window.location.origin;
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
