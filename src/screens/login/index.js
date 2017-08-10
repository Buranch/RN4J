import React, { Component } from "react";
import { Image, Platform, StatusBar } from "react-native";
import { Container, Content, Text, Item, Input, Button, Icon, View, Left, Right, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

const bg = require("../../../assets/bg.png");
const logo = require("../../../assets/logo.png");

const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
export const minLength = min => value =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength8 = minLength(8);
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			hasError: undefined,
		};
		this.renderInput = this.renderInput.bind(this);
		this.login = this.login.bind(this);
	}
	renderInput({ input, label, type, meta: { touched, error, warning } }) {
		return (
			<View>
				<Item error={error && touched} rounded style={styles.inputGrp}>
					<Icon active name={input.name === "email" ? "person" : "unlock"} />
					<Input
						placeholderTextColor="#FFF"
						style={[styles.input, { color: touched && error ? "red" : "#FFF" }]}
						placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
						{...input}
					/>
					{touched && error
						? <Icon active style={{ color: "red", marginTop: 5, right: 10 }} name="close" />
						: <Text />}
				</Item>
				{touched && error
					? <Text style={{ fontSize: 15, color: "red", textAlign: "right", top: -10 }}>
							{error}
						</Text>
					: <Text style={{ fontSize: 15, color: "transparent", textAlign: "right", top: -10 }}>
							error here
						</Text>}
			</View>
		);
	}
	login() {
		if (this.props.valid) {
			this.props.navigation.navigate("Walkthrough");
		} else
			Toast.show({
				text: "Enter Valid Username & password!",
				type: "danger",
				duration: 2500,
				position: "top",
				textStyle: { textAlign: "center" },
			});
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
							<Field
								name="email"
								component={this.renderInput}
								type="email"
								validate={[email, required]}
							/>
							<Field
								name="password"
								component={this.renderInput}
								type="password"
								validate={[alphaNumeric, minLength8, maxLength15, required]}
							/>

							<Button rounded primary block large style={styles.loginBtn} onPress={() => this.login()}>
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
							<Button
								small
								transparent
								style={{ alignSelf: "flex-end", marginTop: 10 }}
								onPress={() => navigation.navigate("Walkthrough")}
							>
								<Text style={styles.helpBtns}>Skip</Text>
							</Button>
							<View style={styles.otherLinksContainer}>
								<Left>
									<Button
										small
										transparent
										style={{ alignSelf: "flex-start" }}
										onPress={() => navigation.navigate("SignUp")}
									>
										<Text style={styles.helpBtns}>Create Account</Text>
									</Button>
								</Left>
								<Right>
									<Button
										small
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
})(LoginForm);
export default Login;
