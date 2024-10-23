import axios from "axios";

export interface Document {
    id: number;
    title: string;
    content: string;
}

const API_URL = "http://localhost:8080/documents";

export const getDocuments = async (): Promise<Document[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch documents");
    }
};