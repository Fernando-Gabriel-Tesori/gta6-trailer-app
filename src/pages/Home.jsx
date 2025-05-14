import React, { useState, useEffect } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import VideoPlayer from '../components/VideoPlayer'
import ThumbnailGallery from '../components/ThumbnailGallery'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [currentTrailer, setCurrentTrailer] = useState('/videos/trailer1.mp4')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 7000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>GTA VI Experience</h1>
      <VideoPlayer src={currentTrailer} />
      <ThumbnailGallery onSelect={setCurrentTrailer} />
    </>
  )
}
