import axios from 'axios';

const API_BASE_URL = 'http:';

export const fetchCallLogs = () => axios.get(`${API_BASE_URL}/calls`);
export const fetchSMSLogs = () => axios.get(`${API_BASE_URL}/sms`);
export const fetchLocationLogs = () => axios.get(`${API_BASE_URL}/location`);
export const fetchCameraCaptures = () => axios.get(`${API_BASE_URL}/camera`);
export const fetchAudioRecordings = () => axios.get(`${API_BASE_URL}/audio-recording`);
export const fetchContacts = () => axios.get(`${API_BASE_URL}/contacts`);