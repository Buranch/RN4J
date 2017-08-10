const React = require("react-native");

const { Dimensions, Platform } = React;

// const primary = require('../../theme/variables/commonColor').brandPrimary;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
	iosShadow: {
		flex: 1,
		width: deviceHeight < 500 ? 80 : deviceWidth / 4 + 12,
		resizeMode: "contain",
		height: deviceHeight < 500 ? 50 : deviceHeight / 15,
		alignSelf: "center",
		marginTop: deviceWidth < 330 ? deviceHeight / 15 : deviceHeight / 10,
	},
	aShadow: {
		flex: 1,
		resizeMode: "contain",
		width: deviceWidth / 3 + 8,
		height: deviceHeight / 20,
		padding: 20,
		alignSelf: "center",
		marginTop: deviceWidth < 330 ? deviceHeight / 15 : deviceHeight / 9 - 60,
	},
	inputGrp: {
		flexDirection: "row",
		backgroundColor: "rgba(255,255,255,0.3)",
		marginBottom: 10,
		borderWidth: 0,
		borderColor: "transparent",
	},
	input: {
		paddingLeft: 10,
		color: "#FFF",
	},
	background: {
		flex: 1,
		width: null,
		height: deviceHeight,
		backgroundColor: "rgba(0,0,0,0.1)",
	},
	bg: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 70,
		marginTop:
			deviceHeight < 500
				? Platform.OS === "android" ? 20 : 0
				: Platform.OS === "android" ? deviceHeight / 15 - 45 : deviceHeight / 10,
	},
	loginBtn: {
		marginTop: 10,
		height: 50,
		alignItems: "center",
	},
	helpBtns: {
		opacity: 0.9,
		fontSize: 14,
		fontWeight: "bold",
		color: "#FFF",
	},
	otherLinksContainer: {
		flexDirection: "row",
	},
};
