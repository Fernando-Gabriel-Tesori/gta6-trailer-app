import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const images = [
  '/images/loading1.jpg',
  '/images/loading2.jpg',
  '/images/loading3.jpg',
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

const LoadingImage = styled(motion.img)`
  max-width: 90%;
  border-radius: 1rem;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
`

export default function LoadingScreen() {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const imageCycle = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(imageCycle)
  }, [])

  return (
    <Wrapper>
      <h2>Carregando GTA VI...</h2>
      <LoadingImage
        key={images[imageIndex]}
        src={images[imageIndex]}
        alt='loading'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </Wrapper>
  )
}
