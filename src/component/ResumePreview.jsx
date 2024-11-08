import React from 'react';
import { useLocation } from 'react-router-dom';

function ResumePreview() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h2>Resume Preview</h2>
      <p><strong>Name:</strong> {query.get('name')}</p>
      <p><strong>Education:</strong> {query.get('education')}</p>
      <p><strong>Experience:</strong> {query.get('experience')}</p>
      {query.get('image') && (
        <div>
          <p><strong>Profile Picture:</strong></p>
          <img src={query.get('image')} alt="Profile" style={{ width: '150px', borderRadius: '8px' }} />
        </div>
      )}
    </div>
  );
}

export default ResumePreview;
