import { useState, useEffect } from 'react';
import DogImage from './DogImage';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogImage = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
      setImageUrl('');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <>
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Random Dog Viewer</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DogImage imageUrl={imageUrl} />
      )}
    </div>
    <button
        onClick={fetchDogImage}
        style={{
          display: 'block',
          margin: '1rem auto',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Get New Dog
      </button>
    </>
  );
}

export default App;
