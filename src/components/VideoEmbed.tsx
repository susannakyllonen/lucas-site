"use client";

import styled from "styled-components";

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px; /* estää videon leviämisen liikaa desktopissa */
  margin: 0 auto;
  aspect-ratio: 16 / 9; /* pitää mittasuhteen */
  overflow: hidden;
  border-radius: 0; /* kulmikkaat reunat */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    max-width: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
`;

export default function VideoEmbed() {
  return (
    <VideoWrapper>
      <StyledVideo src="/lucas-video.mp4" controls />
    </VideoWrapper>
  );
}
