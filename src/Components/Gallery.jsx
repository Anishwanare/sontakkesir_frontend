import React from 'react';
import { galleryData } from '../utils/GalleryData';
import AppLayout from '../AppLayout/AppLayout';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="text-3xl font-bold text-center my-5">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-5 md:m-10">
        {galleryData.map((image) => (
          <div key={image.id} className="image-container">
            <img
              className="h-auto max-w-full rounded-lg object-cover shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
              src={image.image}
              alt={image.alt || `Image ${image.id}`} // Provide default alt text
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppLayout(Gallery);