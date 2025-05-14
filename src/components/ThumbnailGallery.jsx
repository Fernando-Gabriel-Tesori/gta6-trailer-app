import React from 'react'
import styled from 'styled-components'

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  video {
    width: 120px;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export default function ThumbnailGallery({ onSelect }) {
  return (
    <Gallery>
      <video src='/videos/trailer1.mp4' onClick={() => onSelect('/videos/trailer1.mp4')} />
      <video src='/videos/trailer2.mp4' onClick={() => onSelect('/videos/trailer2.mp4')} />
    </Gallery>
  )
}
