import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeForm from './component/ResumeForm';
import ResumePreview from './component/ResumePreview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeForm />} />
        <Route path="/resume" element={<ResumePreview />} />
      </Routes>
    </Router>
  );
}

export default App;
