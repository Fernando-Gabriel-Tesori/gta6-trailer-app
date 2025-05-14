import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import LoadingScreen from './components/LoadingScreen';
import VideoPlayer from './components/VideoPlayer';
import ThumbnailGallery from './components/ThumbnailGallery';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState('/videos/trailer1.mp4');

  const thumbnails = [
    {
      image: '/images/loading1.jpg',
      video: '/videos/trailer1.mp4',
    },
    {
      image: '/images/loading2.jpg',
      video: '/videos/trailer2.mp4',
    },
    // Adicione mais miniaturas conforme necessário
  ];

  return (
    <>
      <GlobalStyle />
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <VideoPlayer url={currentVideo} />
          <ThumbnailGallery thumbnails={thumbnails} onSelect={setCurrentVideo} />
        </>
      )}
    </>
  );
};

export default App;
