import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocumentList from './components/DocumentList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Document Editor</h1>
      </header>
      <main>
        <DocumentList />  
      </main> 
    </div>  
  );
}

export default App;
