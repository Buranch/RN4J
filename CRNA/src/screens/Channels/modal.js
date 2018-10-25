// @flow
import React, {Component} from "react";
import {TouchableHighlight} from "react-native";
import {Text, Button, View} from "native-base";
import styles from "./styles";

class ModalResult extends Component {

  render() {
    return (
         <View style={styles.modalView}>
                <Text style={styles.modalMoney}>$5,110.02</Text>
                <Text style={styles.totalPriceTxt}>Total Price</Text>
                <Text style={styles.showPaperWorkTxt}>
                SHOW PAPERWORK INFO</Text>
                <Button style={styles.doneBtn} 
                onPress={this.props.closeModalVisible}>
                <Text style={styles.doneTxt}>Done</Text></Button>
                <TouchableHighlight style={styles.recalculateWrapper}>
                <Text style={styles.recalculateTxt}>RECALCULATE</Text>
                </TouchableHighlight>

        </View>
        );
     }
    }

export default ModalResult;
