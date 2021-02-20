import React, { Component } from "react";
import { buyCake } from "../redux";
import { connect } from 'react-redux'

class CakeContainer extends Component {
  render() {
    return (
      <div>
        <h2>Number of Cakes: {this.props.numOfCakes}</h2>
        <button onClick={this.props.buyCake} >Buy Cake</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
