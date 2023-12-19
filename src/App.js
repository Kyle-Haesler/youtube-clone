import React from "react";
import { Col, Row } from "antd";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";

class App extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col span={24}>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <VideoDetail />
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
