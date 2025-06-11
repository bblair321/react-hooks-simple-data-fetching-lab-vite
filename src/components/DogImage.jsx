
function DogImage({ imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt="A Random Dog"
      style={{ maxWidth: '300px', borderRadius: '8px', marginTop: '1rem' }}
    />
  );
}

export default DogImage;
