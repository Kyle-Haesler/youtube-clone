import React from "react";
import { Input } from "antd";
const { Search } = Input;

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };
  onSearch = (value) => {
    this.setState({ searchTerm: value });
    console.log(value);
  };

  render() {
    return (
      <Search
        placeholder="...Search"
        enterButton="Search"
        size="large"
        onSearch={this.onSearch}
      />
    );
  }
}

export default SearchBar;
