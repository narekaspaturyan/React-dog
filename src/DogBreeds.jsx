import React, { Component } from "react";

class DogBreeds extends Component {
  state = {
    breeds: [],
  };

  async componentDidMount() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    this.constractBreedsArray(data);
  }
  constractBreedsArray = (data) => {
    this.setState({ breeds: Object.keys(data.message) });
  };

  render() {
    const breedsToRender = this.state.breeds.map((breed, index) => {
      return <li key={index}>{breed}</li>;
    });
    return <ul> {breedsToRender}</ul>;
  }
}

export default DogBreeds;
