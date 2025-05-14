import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Thumbnail = styled.img`
  width: 150px;
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid #fff;
  &:hover {
    border-color: #f00;
  }
`;

const ThumbnailGallery = ({ thumbnails, onSelect }) => (
  <GalleryContainer>
    {thumbnails.map((thumb, index) => (
      <Thumbnail
        key={index}
        src={thumb.image}
        alt={`Trailer ${index + 1}`}
        onClick={() => onSelect(thumb.video)}
      />
    ))}
  </GalleryContainer>
);

export default ThumbnailGallery;
