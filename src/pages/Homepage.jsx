import React, { Component } from "react";
import { connect } from "react-redux";
import { add, minus, reset } from "./../redux/actions";

class Homepage extends Component {
  state = {};

  add = () => {
    this.props.add();
  };
  minus = () => {
    this.props.minus();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div className="app homepage d-flex justify-content-center">
        <button onClick={this.minus} className="btn btn-primary mr-3">
          -
        </button>
        {this.props.Number}
        <button onClick={this.add} className="btn btn-primary ml-3">
          +
        </button>
        <button onClick={this.reset} className="btn btn-primary ml-3">
          O
        </button>
      </div>
    );
  }
}

const MapStatetoProps = state => {
  return {
    Number: state.vault
  };
};

export default connect(MapStatetoProps, { add, minus, reset })(Homepage);
