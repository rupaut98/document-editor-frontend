import React, {useEffect, useState} from 'react';
import { getDocuments,Document } from '../services/documentService';

const DocumentList: React.FC = () => {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchDocuments = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const documents = await getDocuments();
                setDocuments(documents);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchDocuments();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error</p>;    
    }

    return (
        <div>
          <h2>Documents</h2>
          {documents.length > 0 ? (
            <ul>
              {documents.map((doc) => (
                <li key={doc.id}>
                  <h3>{doc.title}</h3>
                  <p>{doc.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No documents available.</p>
          )}
        </div>
      );
    };

export default DocumentList;