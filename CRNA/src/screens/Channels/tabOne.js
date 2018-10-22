// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity, Platform} from "react-native";

import {Content, Text, Item, Icon, Input, View, Form, Picker} from "native-base";
// import Icon from '@expo/vector-icons/vendor/react-native-vector-icons/Ionicons'
import {Grid, Col, Row} from "react-native-easy-grid";
const bg = require("../../../assets/bg_green.png");
import styles from "./styles";

class TabOne extends Component {

   constructor(props) {
     super(props);
     this.state = {
       selected: "36 Months",
       selected_2: "19.00% ARP"
     };
   }


  onValueChange(value) {
    this.setState({
      selected: value
    });
  }


  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Grid>
            <Row>
              <Col style={styles.infoDiv}>
                <Text style={styles.infoDivText}>
                Enter the information to calculate the monthly payment for a loan.</Text>
              </Col>

            </Row>
            <Row>
              <Col style={styles.cols}>
                <Text style={styles.label}>Desired Monthly Amount</Text>
                <Item>
                  <Icon style={styles.inputIcon} active name="logo-usd" />
                  <Input style={styles.input}  placeholderTextColor="#7cb97f" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col style={styles.cols}>
                 <Form>
                    <Text style={styles.label}>Term </Text>
                    <Picker
                      note
                      mode="dropdown"
                      style={{ width: 120, color: "#39aa44" }}
                      selectedValue={this.state.selected}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                      <Picker.Item label="36 Months" value="36 Months" />
                      <Picker.Item label="ATM Card" value="key1" />
                      <Picker.Item label="Debit Card" value="key2" />
                      <Picker.Item label="Credit Card" value="key3" />
                      <Picker.Item label="Net Banking" value="key4" />
                    </Picker>
                </Form>
              </Col>
               <Col style={styles.cols}>
                 <Form>
                    <Text style={styles.label}>
                    Rate </Text>
                    <Picker
                      note
                      mode="dropdown"
                      style={{ width: 120, color: "#39aa44" }}
                      selectedValue={this.state.selected_2}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                      <Picker.Item label="19.00% ARP" value="19.00% ARP" />
                      <Picker.Item label="ATM Card" value="key1" />
                      <Picker.Item label="Debit Card" value="key2" />
                      <Picker.Item label="Credit Card" value="key3" />
                      <Picker.Item label="Net Banking" value="key4" />
                    </Picker>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col style={styles.cols}>
                <Text style={styles.label}>Trade In</Text>
                <Item>
                  <Icon style={styles.inputIcon} active name="logo-usd" />
                  <Input style={styles.input}  placeholderTextColor="#7cb97f" />
                </Item>
              </Col>
              <Col style={styles.cols}>
                <Text style={styles.label}>Down Payment</Text>
                <Item>
                  <Icon style={styles.inputIcon} active name="logo-usd" />
                  <Input style={styles.input}  placeholderTextColor="#7cb97f" />
                </Item>
              </Col>
            </Row>
          </Grid>
        </View>
      </Content>
    );
  }
}

export default TabOne;
