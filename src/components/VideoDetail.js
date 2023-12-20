import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div style={{ height: "800px", marginRight: "20px" }}>
      <iframe
        frameBorder="0"
        height="100%"
        width="100%"
        title="Video Player"
        src={videoSrc}
      />
      <div style={{ background: "white" }}>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <h4>{video.snippet.description}</h4>
      </div>
    </div>
  );
};

export default VideoDetail;
