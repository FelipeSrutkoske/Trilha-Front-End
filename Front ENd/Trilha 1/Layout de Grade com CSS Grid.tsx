import React from 'react';
import './Gallery.css';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Imagem ${index}`} />
      ))}
    </div>
  );
};

export default Gallery;