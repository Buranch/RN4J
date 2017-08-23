import React, { Component } from "react";
import { Image } from "react-native";
import { Icon, Button, Left, Right, Body, Header } from "native-base";

import styles from "./styles";

const headerLogo = require("../../../assets/header-logo.png");

class CustomHeader extends Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<Header hasTabs={this.props.hasTabs}>
				<Left>
					<Button transparent onPress={() => navigation.goBack()}>
						<Icon active name="arrow-back" />
					</Button>
				</Left>
				<Body>
					<Image source={headerLogo} style={styles.imageHeader} />
				</Body>
				<Right>
					<Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
						<Icon active name="menu" />
					</Button>
				</Right>
			</Header>
		);
	}
}

export default CustomHeader;
