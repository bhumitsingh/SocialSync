import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const fetchMessage = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data.message;
    } catch (error) {
        console.error("Error fetching message:", error);
        return "Error fetching message";
    }
};