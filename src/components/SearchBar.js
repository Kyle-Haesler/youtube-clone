import React from "react";
import { Input } from "antd";
const { Search } = Input;

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };
  onSearch = (value) => {
    this.setState({ searchTerm: value });
    const { onFormSubmit } = this.props;
    onFormSubmit(value);
  };

  render() {
    return (
      <Search
        placeholder="...Search"
        enterButton="Search"
        size="large"
        onSearch={this.onSearch}
        style={{ marginBottom: "20px" }}
      />
    );
  }
}

export default SearchBar;
