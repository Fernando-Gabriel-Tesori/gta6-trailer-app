import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container>
      <NeonBackground />
      <TrailerContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/QdBZY2fkU-0"
          title="GTA VI Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </TrailerContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: #0f0c29; /* fallback for old browsers */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NeonBackground = styled.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  background: linear-gradient(45deg,
    #ff00cc 0%,
    #ff33cc 20%,
    #ff66cc 40%,
    #cc33ff 60%,
    #9933ff 80%,
    #6600ff 100%
  );
  filter: blur(100px);
  z-index: 0;
`;

const TrailerContainer = styled(motion.div)`
  position: relative;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
  iframe {
    border: none;
    border-radius: 20px;
  }
`;