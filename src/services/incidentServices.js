import axios from 'axios';

// Base URL is configured by the proxy in vite.config.js
const API_URL = '/api/incidents';

export const getIncidents = () => {
    return axios.get(API_URL);
};

export const createIncident = (incident) => {
    return axios.post(API_URL, incident);
};

export const deleteIncident = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};