import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const LoadingImage = styled.img`
  width: 100%;
  max-width: 800px;
  object-fit: cover;
`;

const images = [
  '/images/loading1.jpg',
  '/images/loading2.jpg',
  // Adicione mais imagens conforme necessário
];

const LoadingScreen = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, images.length * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <LoadingContainer>
      <LoadingImage src={images[index]} alt="Loading..." />
    </LoadingContainer>
  );
};

export default LoadingScreen;
