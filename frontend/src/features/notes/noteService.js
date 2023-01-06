import axios from "axios";

const API_URL = "/api/tickets/";

// Create a new Ticket Note
// const createNote = async (ticketData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.post(API_URL, ticketData, config);

//   return response.data;
// };

// Get tickets Notes
const getNote = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}` + ticketId + "/notes", config);
  return response.data;
};
// Create tickets Notes
const createNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL}` + ticketId + "/notes",
    { text: noteText },
    config
  );
  return response.data;
};

const noteService = {
  createNote,
  getNote,
};

export default noteService;
