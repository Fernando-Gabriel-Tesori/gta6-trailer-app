import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoPlayer = ({ url }) => (
  <PlayerWrapper>
    <StyledReactPlayer url={url} width="100%" height="100%" controls />
  </PlayerWrapper>
);

export default VideoPlayer;
