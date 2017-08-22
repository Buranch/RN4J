// @flow
import React, { Component } from "react";
import { Image } from "react-native";

import { Container, Header, Content, Text, Button, Icon, Item, Input, Left, Right, Body, View } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import styles from "./styles";

const bgSignUp = require("../../../assets/bg-signup.png");
const headerLogo = require("../../../assets/header-logo.png");
const primary = require("../../theme/variables/commonColor").brandPrimary;
type Props = {
	navigation: () => void,
};
class Feedback extends Component {
	state: {
		offset: {
			x: 0,
			y: 0,
		},
	};
	props: Props;
	constructor(props: Props) {
		super(props);
		this.state = {
			offset: {
				x: 0,
				y: 0,
			},
		};
	}

	render() {
		const navigation = this.props.navigation;
		return (
			<Container contentOffset={this.state.offset} scrollEnabled={false}>
				<Image source={bgSignUp} style={styles.container}>
					<Header>
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

					<Content showsVerticalScrollIndicator={false}>
						<View style={styles.contentIconsContainer}>
							<Grid>
								<Col>
									<Button transparent style={styles.roundedButton}>
										<Icon
											name="ios-call-outline"
											style={{ fontSize: 30, width: 30, color: "#FFF" }}
										/>
									</Button>
								</Col>
								<Col>
									<Button transparent style={styles.roundedCustomButton}>
										<Icon
											name="ios-mail-outline"
											style={{
												fontSize: 28,
												color: primary,
												width: 22,
												marginLeft: 5,
											}}
										/>
									</Button>
								</Col>
								<Col>
									<Button transparent style={styles.roundedButton}>
										<Icon
											name="ios-pin-outline"
											style={{ fontSize: 28, width: 30, color: "#FFF" }}
										/>
									</Button>
								</Col>
							</Grid>
						</View>
						<View style={styles.feedbackHeaderContainer}>
							<Text style={styles.feedbackHeader}>SEND FEEDBACK</Text>
							<Text note style={styles.feedbackHead}>
								Your feedback is very important to us.
							</Text>
						</View>
						<View style={styles.feedbackContainer}>
							<Item rounded style={styles.inputGrp}>
								<Icon name="ios-person-outline" />
								<Input
									placeholder="Username"
									placeholderTextColor="rgba(255,255,255,0.5)"
									style={styles.input}
								/>
							</Item>
							<Item rounded style={styles.inputGrp}>
								<Icon name="ios-mail-outline" />
								<Input
									placeholder="Email"
									placeholderTextColor="rgba(255,255,255,0.5)"
									style={styles.input}
								/>
							</Item>

							<View style={styles.feedbackInputBox}>
								<Item iconRight>
									<Input
										placeholder="Write something..."
										placeholderTextColor="rgba(255,255,255,0.5)"
										style={styles.input}
									/>
									<Icon active name="arrow-forward" style={styles.forwardIcon} />
								</Item>
							</View>
						</View>
					</Content>
				</Image>
			</Container>
		);
	}
}

export default Feedback;
