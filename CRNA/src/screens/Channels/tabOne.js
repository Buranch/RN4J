// @flow
import React, {Component} from "react";
import {Alert, Modal, Platform} from "react-native";
import {Content, Text, Button, Item, Body, Icon, Input, View, Form, Picker, Left, Switch, Right} from "native-base";
import {Grid, Col, Row} from "react-native-easy-grid";
import styles from "./styles";
import ModalResult from './modal';
import ModalWithCard from './modalWCard';
class TabOne extends Component {

   constructor(props) {
     super(props);
     this.state = {
       selected: "36 Months",
       selected_2: "19.00% ARP",
      modalVisible: false

     };
   }

  closeModalVisible() {
      this.setState({modalVisible: false});
  }


  onValueChange(value) {
    this.setState({
      selected: value
    });
  }


  render() {
    return (
      <Content showsVerticalScrollIndicator={false}>
          <Modal
            animationType="slide"
            transparent
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
            onDismiss={()=> Alert.alert("onDismiss")}
            >
            <ModalWithCard closeModalVisible={()=> {
              this.setState({
                modalVisible: false
              })
            }} modalVisible={this.state.modalVisible} />
          </Modal>
        <View style={{ opacity: this.state.modalVisible ? 0.5 : 1 }}>
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
                <Item style={styles.item}>
                  <Icon style={styles.inputIcon} active name="logo-usd" />
                  <Input style={styles.input}  placeholderTextColor="#7cb97f" />
                </Item>
              </Col>
              <Col style={styles.cols}>
                <Text style={styles.label}>Down Payment</Text>
                <Item style={styles.item}>
                  <Icon style={styles.inputIcon} active name="logo-usd" />
                  <Input style={styles.input}  placeholderTextColor="#7cb97f" />
                </Item>
              </Col>
            </Row>
            <Row>
              <Left />
              <Body>
                <Text style={styles.label}>Sales Tax</Text>
                <Item style={styles.item}>
                  <Icon style={styles.inputIcon} active name="logo-usd" />
                  <Input style={styles.input} placeholderTextColor="#7cb97f" />
                </Item>
              </Body>
              <Right />
            </Row>
            <Row>
              <Left />
              <Body>
                <Text style={{color: "#39aa44"}}>Florida Contract</Text>
                <View style={{paddingBottom: 5, paddingTop: 5}}>
                  <Switch />
                </View>
              </Body>
              <Right />
            </Row>
            {/* <Row style={{flex: 1}}> */}
            <View style={{flex: 1, alignSelf: "center", marginTop: 10, justifyContent: "flex-end"}}>
              <Button block 
              onPress={() => {
                  this.setState({
                    modalVisible: true
                  });
                }}
              style={{backgroundColor:"#39aa44", width: 150}}>
              <Text
                 style={
                      Platform.OS === "android"
                        ? {fontSize: 16, textAlign: "center", color: "#fff"}
                        : {fontSize: 16, fontWeight: "900", color: "#fff"}
                    }
                >
              Calculate
              </Text>
              </Button>
            </View>
            {/* </Row> */}
          </Grid>
        </View>
      </Content>
    );
  }
}

export default TabOne;
