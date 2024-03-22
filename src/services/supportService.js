import api from '../utils/api';

export const submitSupportTicket = async (ticketData) => {
  try {
    const response = await api.post('/support/tickets', ticketData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to submit support ticket: ${error.response?.data?.message || error.message}`);
  }
};

export const getSupportTickets = async (userId) => {
  try {
    const response = await api.get(`/support/tickets/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch support tickets: ${error.response?.data?.message || error.message}`);
  }
};
