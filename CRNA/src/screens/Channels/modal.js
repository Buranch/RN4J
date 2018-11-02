// @flow
import React, {Component} from "react";
import {TouchableHighlight} from "react-native";
import {Text, Button, View} from "native-base";
import styles from "./styles";



const Cards = ({amountFinanced, totalPayment, totalSalesPrice, financeCharged}) =>
  <View>
      <View style={{flex: 0,flexDirection: "row",
              height: 70,
              paddingLeft: 10,
              marginTop: 25,
              paddingRight: 10,
              justifyContent: "space-between",
              }}>
              
            <View style={styles.modalCard}>
              <Text style={styles.cardTitle}>Finance Charge</Text>
              <Text style={{ alignSelf: "center", color: "#39aa44", fontSize: 26, fontWeight: "400"}}>${financeCharged}</Text>
            </View>
            <View style={styles.modalCard}>
              <Text style={styles.cardTitle}>Amount Financed</Text>
              <Text style={styles.cardBody}>${amountFinanced}</Text>
            </View>
          </View>
          <View style={{flex: 0,flexDirection: "row",
              height: 70,
              marginTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              justifyContent: "space-between",
              }}>
            <View style={styles.modalCard}>
              <Text style={styles.cardTitle}>Total of Payments</Text>
              <Text style={styles.cardBody}>${totalPayment}</Text>
            </View>
            <View style={styles.modalCard}>
              <Text style={styles.cardTitle}>Total Sales Price</Text>
              <Text style={styles.cardBody}>${totalSalesPrice}</Text>
            </View>
          </View>

  </View>;




class ModalResult extends Component {
  state = {
    showPaperWork: false
  }

  render() {
    return (
         <View style={styles.modalView}>
                <Text style={styles.modalMoney}>${this.props.totalSalesPrice}</Text>
                <Text style={styles.totalPriceTxt}>Total Price</Text>
                <TouchableHighlight style={styles.recalculateWrapper}>
                <Text style={styles.showPaperWorkTxt}
                  onPress={()=> {
                    this.setState({
                      showPaperWork: !this.state.showPaperWork
                    });
                  }}
                >
                {!this.state.showPaperWork ?  "SHOW PAPERWORK" : "HIDE PAPERWORK"} INFO</Text>
                </TouchableHighlight>
                {this.state.showPaperWork && <Cards 
                    financeCharged={this.props.financeCharged || 0}
                    amountFinanced={this.props.amountFinanced || 0}
                    totalPayment={this.props.totalPayment || 0}
                    totalSalesPrice={this.props.totalSalesPrice || 0}
                  
                /> }
                <Button style={!this.state.showPaperWork ? styles.doneBtn : styles.doneBtnModal2} 
                onPress={this.props.closeModalVisible}>
                <Text style={styles.doneTxt}>Done</Text></Button>
                { !this.state.showPaperWork &&
                <TouchableHighlight style={styles.recalculateWrapper}>
                <Text style={styles.recalculateTxt}>RECALCULATE</Text>
                </TouchableHighlight>
              }

        </View>
        );
     }
    }

export default ModalResult;
