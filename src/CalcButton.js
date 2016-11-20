import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default class CalcButton extends Component {

  constuctor() {}

  render() {
    let buttonStyle = this.props.style || {};
    return (
      <TouchableOpacity onPress={() => this.onPressButton(this.props.number)}
      style={buttonStyle}>
        <Text style={{
        color: 'black',
        fontSize: 40,
        textAlign: 'center'
      }}>
          {this.props.number}
        </Text>
      </TouchableOpacity>




    )
  }

  onPressButton(value) {
    if (this.props.onHandleUpdateCalculator) {
      this.props.onHandleUpdateCalculator(value);
    } else {
      alert(`${value}를 클릭하였습니다. 현재 미구현입니다`);
    }

  }
}

const styles = StyleSheet.create({
  calc: {
    flex: 1,
    backgroundColor: 'orange',
    margin: 2
  },
  num: {
    flex: 1,
    backgroundColor: 'snow',
    margin: 2
  },
  etcc: {
    flex: 1,
    backgroundColor: 'silver',
    margin: 2
  }
});
