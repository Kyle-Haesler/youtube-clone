import React from "react";
import { Col, Row } from "antd";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail, Header } from "./components";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.handleSubmit("potato");
  }
  onVideoSelect = (video) => this.setState({ selectedVideo: video });
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", { params: { q: searchTerm } });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div style={{ background: "black", padding: "10px" }}>
        <Header />
        <Row>
          <Col span={24}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <VideoDetail video={selectedVideo} />
          </Col>
          <Col span={6}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
