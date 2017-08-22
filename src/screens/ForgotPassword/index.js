// @flow
import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { Container, Content, Text, Button, Icon, Item, Input, View, Toast, Footer } from "native-base";
import { Field, reduxForm } from "redux-form";
import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

const required = value => (value ? undefined : "Required");
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
type Props = {
	navigation: () => void,
};
class ForgotPasswordForm extends Component {
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
			name: "",
		};
	}

	renderInput({ input, label, type, meta: { touched, error, warning } }) {
		return (
			<View>
				<Item error={error && touched} rounded style={styles.inputGrp}>
					<Icon active name="mail" style={{ color: "#fff" }} />
					<Input placeholderTextColor="#FFF" style={styles.input} placeholder="Email" {...input} />
					{touched && error
						? <Icon active style={{ color: "#fff", marginTop: 5, right: 10 }} name="close" />
						: <Text />}
				</Item>
				{touched && error
					? <Text
							style={{
								fontSize: 15,
								color: commonColor.brandDanger,
								textAlign: "right",
								top: -10,
							}}
						>
							{error}
						</Text>
					: <Text
							style={{
								fontSize: 15,
								color: "transparent",
								textAlign: "right",
								top: -10,
							}}
						>
							error here
						</Text>}
			</View>
		);
	}

	forgotPassword() {
		if (this.props.valid) {
			this.props.navigation.navigate("Login");
		} else {
			Toast.show({
				text: "Enter Valid Email",
				type: "danger",
				duration: 2500,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	render() {
		return (
			<Container>
				<StatusBar backgroundColor={commonColor.statusBarColor} barStyle="light-content" />
				<Image source={require("../../../assets/bg-signup.png")} style={styles.background}>
					<Content contentOffset={this.state.offset}>
						<Content padder scrollEnabled={false}>
							<Text style={styles.forgotPasswordHeader}>Forgot Your Password?</Text>
							<View style={styles.forgotPasswordContainer}>
								<Field
									name="email"
									component={this.renderInput}
									type="email"
									validate={[email, required]}
								/>

								<Button
									rounded
									block
									bordered
									onPress={() => this.forgotPassword()}
									style={styles.emailBtn}
								>
									<Text style={{ color: "#FFF" }}>Send Email</Text>
								</Button>
							</View>
						</Content>
					</Content>
					<Footer
						style={{
							paddingLeft: 20,
							paddingRight: 20,
						}}
					>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Text style={styles.helpBtns}>Back To Login</Text>
						</Button>
					</Footer>
				</Image>
			</Container>
		);
	}
}

const ForgotPassword = reduxForm({
	form: "test",
})(ForgotPasswordForm);
export default ForgotPassword;
