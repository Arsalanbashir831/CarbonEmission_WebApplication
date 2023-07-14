import React from 'react';

const Tutorial = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 mt-4">Tutorials</h2>
      <div style={{ position: 'relative', paddingBottom: '56.25%', marginTop: '1rem', marginBottom: '1rem' }}>
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src="https://www.youtube.com/embed/your-video-id"
          title="Tutorial Video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Tutorial;
