import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    //Use this if the arrow function isn't used on the handleChange function
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // Filter out monsters based on the search field

    //OBJECT DESTRUCTURING

    const { monsters, searchField } = this.state;

    // EQUALS
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />

        {/* <CardList monsters={this.state.monsters} /> */}

        {/* AFTER FILTERING */}

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
