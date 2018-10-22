// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity, Platform} from "react-native";

import {Content, Text, Item, Icon, Input, View} from "native-base";
// import Icon from '@expo/vector-icons/vendor/react-native-vector-icons/Ionicons'
import {Grid, Col, Row} from "react-native-easy-grid";
const bg = require("../../../assets/bg_green.png");
import styles from "./styles";

class TabOne extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Grid>
            <Row>
              <Col style={{backgroundColor: "#c6fccb87"}}>
                <Text style={{padding: 20, fontWeight: "600", color: "#39aa44"}}>
                Enter the information to calculate the monthly payment for a loan.</Text>
              </Col>

            </Row>
            <Row>
              <Col style={{paddingLeft: 15}}>
                <Text style={{color: "#39aa44", padding: 2, paddingBottom: 0, paddingTop: 10}}>Desired Monthly Amount</Text>
                <Item>
                  {/* <Icon name="ios-cash" size={30} color="#4F8EF7" /> */}
                  <Icon style={{color: "#7cb97f", fontSize: 15,}} active name="logo-usd" />
                  <Input style={{color: "#39aa44",borderBottomColor: "red" }}  placeholderTextColor="#7cb97f" placeholder='Icon Textbox'/>
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
