import api from '../utils/api';

export const sendCollaborationRequest = async (collaborationDetails) => {
  try {
    const response = await api.post('/collaborations', collaborationDetails);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to send collaboration request: ${error.response?.data?.message || error.message}`);
  }
};
