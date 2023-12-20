import React from "react";

import { Card } from "antd";
const { Meta } = Card;
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Card
      onClick={() => onVideoSelect(video)}
      hoverable
      style={{ marginBottom: "20px" }}
      cover={<img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />}
    >
      <Meta title={video.snippet.title} />
    </Card>
  );
};

export default VideoItem;
