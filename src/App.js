import React, { Component } from "react";
import LOperatori from "./operatori";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { operatori: LOperatori };
    this.adaugOper = this.adaugOper.bind(this);
    this.corectezOper = this.corectezOper.bind(this);
    this.stergOper = this.stergOper.bind(this);
  }

  adaugOper() {
    // Voi preiau datele din fomular si creez un obiect nou
  }

  corectezOper(ev) {
    const idSup = parseInt(ev.target.id);  //  id e convertit in intreg
  }

  stergOper(ev) {
    const idSup = parseInt(ev.target.id);  //  id e convertit in intreg
  }

  render() {
    this.state.operatori.map(item => console.log(`Utilizator: ${item.nume}`));
    return (
      <div className="container">
        <h2 className="text-center">
          Lista operatorilor aplicației <em>ALEGERI</em>
        </h2>
      </div>
    );
  }
}

export default App;