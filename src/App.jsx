import React from "react";

import PhoneList from "./components/PhoneList";
import Phone from "./components/PhoneList/Phone";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: ["1234567890", "0987654321", "5432167890"],
    };
  }

  render() {
    const makeJSX = this.state.phones.map((el, i) => (
      <Phone phone={el} key={i} />
    ));

    return (
      <div className="App">
        <PhoneList phones={this.state.phones}>{makeJSX}</PhoneList>
      </div>
    );
  }
}

export default App;
