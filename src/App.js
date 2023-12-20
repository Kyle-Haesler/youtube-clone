import React from "react";
import { Col, Row } from "antd";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", { params: { q: searchTerm } });
    this.setState({
      vidoes: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    const { selectedVideo } = this.state;
    return (
      <>
        <Row>
          <Col span={24}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <VideoDetail video={selectedVideo} />
          </Col>
          <Col span={8}>
            <h1>Hi</h1>
            {/*VIDEO LIST */}
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
