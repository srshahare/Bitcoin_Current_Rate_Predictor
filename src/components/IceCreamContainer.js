import React, { Component } from "react";
import { buyIceCream } from "../redux";
import { connect } from 'react-redux'

class IceCreamContainer extends Component {
  render() {
    return (
      <div>
        <h2>Number of IceCreams: {this.props.numOfIceCreams}</h2>
        <button onClick={this.props.buyIceCream} >Buy Ice-Cream</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
