import React, { Component } from "react";
import { buyCake } from "../redux";
import { connect } from 'react-redux'

class NewCakeContainer extends Component {
    state = {
        number: 1
    }

  render() {
    return (
      <div>
        <h2>Number of Cakes: {this.props.numOfCakes}</h2>
        <input type="text" value={this.state.number} onChange={e => this.setState({number: e.target.value})} />
        <button onClick={() => this.props.buyCake(this.state.number)} >Buy {this.state.number} Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
