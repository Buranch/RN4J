import React, { Component } from "react";
import { Image, Platform, StatusBar } from "react-native";
import { Container, Content, Text, Item, Input, Button, Icon, View, Left, Right } from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

const bg = require("../../../images/BG.png");
const logo = require("../../../images/logo.png");

const validate = values => {
	const error = {};
	error.email = "";
	error.password = "";
	var ema = values.email;
	var pw = values.password;
	if (values.email === undefined) {
		ema = "";
	}
	if (values.password === undefined) {
		pw = "";
	}
	if (ema.length < 8 && ema !== "") {
		error.email = "too short";
	}
	if (!ema.includes("@") && ema !== "") {
		error.email = "@ not included";
	}
	if (pw.length > 12) {
		error.password = "max 11 characters";
	}
	if (pw.length < 5 && pw.length > 0) {
		error.password = "Weak";
	}
	return error;
};

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
		};
		this.renderInput = this.renderInput.bind(this);
	}
	renderInput({ input, label, type, meta: { touched, error, warning }, inputProps }) {
		var hasError = false;
		if (error !== undefined) {
			hasError = true;
		}
		return (
			<View>
				<Item error={hasError} rounded style={styles.inputGrp}>
					<Icon active name={input.name === "email" ? "person" : "unlock"} />
					<Input
						placeholderTextColor="#FFF"
						style={styles.input}
						placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
						{...input}
					/>
					{hasError
						? <Icon active style={{ color: "red", marginTop: 5, right: 10 }} name="close" />
						: <Text />}
				</Item>
				{hasError &&
					<Text style={{ fontSize: 15, color: "red", textAlign: "right", top: -15 }}>
						{error}
					</Text>}
			</View>
		);
	}
	render() {
		const navigation = this.props.navigation;
		return (
			<Container>
				<StatusBar backgroundColor={commonColor.statusBarColor} barStyle="light-content" />
				<Content scrollEnabled={true} bounces={false}>
					<Image source={bg} style={styles.background}>
						<Image source={logo} style={Platform.OS === "android" ? styles.aShadow : styles.iosShadow} />

						<View style={styles.bg}>
							{/* <Item rounded style={styles.inputGrp}>
								<Icon name="person" />
								<Input
									placeholder="Username"
									onChangeText={username => this.setState({ username })}
									placeholderTextColor="#FFF"
									style={styles.input}
								/>
							</Item>

							<Item rounded style={styles.inputGrp}>
								<Icon name="unlock" />
								<Input
									placeholder="Password"
									secureTextEntry
									placeholderTextColor="#FFF"
									onChangeText={password => this.setState({ password })}
									style={styles.input}
								/>
							</Item> */}
							<Field name="email" component={this.renderInput} type="email" />
							<Field name="password" component={this.renderInput} type="password" />

							<Button
								rounded
								primary
								block
								large
								style={styles.loginBtn}
								onPress={() => navigation.navigate("Walkthrough")}
							>
								<Text
									style={
										Platform.OS === "android"
											? { fontSize: 16, textAlign: "center", top: -5 }
											: { fontSize: 16, fontWeight: "900" }
									}
								>
									Get Started
								</Text>
							</Button>

							<View style={styles.otherLinksContainer}>
								<Left>
									<Button
										transparent
										style={{ alignSelf: "flex-start" }}
										onPress={() => navigation.navigate("SignUp")}
									>
										<Text style={styles.helpBtns}>Create Account</Text>
									</Button>
								</Left>
								<Right>
									<Button
										transparent
										style={{ alignSelf: "flex-end" }}
										onPress={() => navigation.navigate("NeedHelp")}
									>
										<Text style={styles.helpBtns}>Need Help?</Text>
									</Button>
								</Right>
							</View>
						</View>
					</Image>
				</Content>
			</Container>
		);
	}
}
const Login = reduxForm({
	form: "test",
	validate,
})(LoginForm);
export default Login;
