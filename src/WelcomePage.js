import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from './CalcButton.js';
import calculate from './CalcEngine.js';
import _ from 'lodash';

export default class WelcomePage extends Component {

  componentWillMount() {

    this.init();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayResult}>
          <Text style={styles.displayHistoryText}>
            {`${this.state.targetForEval}`}
          </Text>
          <Text style={styles.displayNowText}>
            {this.state.displayTarget}
          </Text>
        </View>
        <View style={styles.tr}>
            <Button style={styles.tdSpecial} number='AC' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdSpecial} number='+/-' />
            <Button style={styles.tdSpecial} number='%' />
            <Button style={styles.tdMath} number='/' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
        </View>
        <View style={styles.tr}>
            <Button style={styles.tdNum} number='7' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdNum} number='8' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdNum} number='9' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdMath} number='*' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
        </View>
        <View style={styles.tr}>
            <Button style={styles.tdNum} number='4' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdNum} number='5' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdNum} number='6' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdMath} number='-' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
        </View>
        <View style={styles.tr}>
            <Button style={styles.tdNum} number='1' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdNum} number='2' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdNum} number='3' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdMath} number='+' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
        </View>
        <View style={styles.tr}>
            <Button style={styles.tdZero} number='0' onHandleUpdateCalculator={this.handleUpdateCalculator.bind(this)}/>
            <Button style={styles.tdNum} number='.' />
            <Button style={styles.tdMath} number='=' />
        </View>
      </View>
    )
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  init() {
    this.setState({
      targetForEval: "",
      displayTarget: 0,
      mathBuffer: {
        hasBuffer: false,
        bufferMath: ''
      }
    });
  }
  handleUpdateCalculator(numOrMath) {
    let {targetForEval} = this.state;
    if (this.isInitCommand(numOrMath)) {
      this.init();
      return;
    }


    if (this.isMath(numOrMath)) {
      this.setState({
        mathBuffer: {
          hasBuffer: true,
          bufferMath: numOrMath
        }
      });

      return;
    }
    if (this.hasBuffer()) {
      targetForEval += this.state.mathBuffer.bufferMath;
      this.setState({
        mathBuffer: {
          hasBuffer: false,
          bufferMath: ''
        }
      });
    }

    targetForEval += numOrMath;




    let displayResult = calculate(targetForEval);

    this.setState({
      targetForEval: targetForEval,
      displayTarget: displayResult
    })

  }

  isInitCommand(value) {
    let initCommandMap = {
      'ac': true,
      'AC': true
    }
    return _.hasIn(initCommandMap, value);
  }

  isMath(value) {
    let mathMap = {
      '+': true,
      '-': true,
      "*": true,
      "/": true
    };
    return _.hasIn(mathMap, value);
  }

  hasBuffer() {
    return this.state.mathBuffer.hasBuffer;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  displayResult: {
    flex: 2,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  displayHistoryText: {
    fontSize: 40,
    textAlign: 'right',
    color: 'gray'
  },
  displayNowText: {
    fontSize: 80,
    textAlign: 'right',
    color: 'white'
  },
  tr: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tdNum: {
    flex: 1,
    borderColor: 'gainsboro',
    backgroundColor: 'whitesmoke',
    borderWidth: 1,
    justifyContent: 'center'
  },
  tdSpecial: {
    flex: 1,
    borderColor: 'gainsboro',
    backgroundColor: 'silver',
    borderWidth: 1,
    justifyContent: 'center'
  },
  tdMath: {
    flex: 1,
    borderColor: 'gainsboro',
    backgroundColor: 'darkorange',
    borderWidth: 1,
    justifyContent: 'center'
  },
  tdZero: {
    flex: 2,
    borderColor: 'gainsboro',
    backgroundColor: 'whitesmoke',
    borderWidth: 1,
    justifyContent: 'center'
  }
});
