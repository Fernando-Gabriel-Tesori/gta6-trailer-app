import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 1080px;
  position: relative;
  margin-inline: auto;
`

export default function VideoPlayer({ src }) {
  return (
    <Container>
      <ReactPlayer url={src} playing controls width='100%' height='100%' />
    </Container>
  )
}
