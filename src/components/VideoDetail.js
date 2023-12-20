import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <iframe
        frameBorder="0"
        height="100%"
        width="100%"
        title="Video Player"
        src={videoSrc}
      />
      <h4>{video.snippet.title}</h4>
      <h5>{video.snippet.channelTitle}</h5>
      <h5>{video.snippet.description}</h5>
    </>
  );
};

export default VideoDetail;
