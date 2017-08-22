const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
	background: {
		flex: 1,
		width: null,
		height: deviceHeight,
		backgroundColor: "rgba(0,0,0,0.1)",
	},
	container: {
		flex: 1,
		flexDirection: "row",
		alignSelf: "center",
	},
	logo: {
		flex: 1,
		// width: deviceHeight < 500 ? 80 : deviceWidth / 4 + 12,
		resizeMode: "contain",
		height: deviceHeight / 4,
		alignSelf: "center",
		// marginTop: deviceWidth < 330 ? deviceHeight / 15 : deviceHeight / 10
	},
	// aShadow: {
	//   flex: 1,
	//   resizeMode: "contain",
	//   // width: deviceWidth / 3 + 8,
	//   height: deviceHeight / 4,
	//   // padding: 20,
	//   alignSelf: "center"
	//   // marginTop: deviceWidth < 330 ? deviceHeight / 15 : deviceHeight / 9 - 60
	// },
	form: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		// paddingBottom: 70,
		// marginTop:
		//   deviceHeight < 500
		//     ? Platform.OS === "android" ? 20 : 0
		//     : Platform.OS === "android" ? deviceHeight / 15 - 45 : deviceHeight / 10
	},
	loginBtn: {
		marginTop: 7,
		height: 50,
		// alignItems: "center"
	},
	otherLinksContainer: {
		paddingTop: deviceHeight < 600 ? 5 : Platform.OS === "android" ? 10 : 15,
		flexDirection: "row",
	},
	helpBtns: {
		opacity: 0.9,
		fontWeight: "bold",
		color: "#fff",
		// fontSize: deviceWidth < 350 ? (Platform.OS === "android" ? 12 : 14) : 14
		fontSize: Platform.OS === "android" ? 12 : 14,
	},
	inputGrp: {
		flexDirection: "row",
		backgroundColor: "rgba(255,255,255,0.3)",
		marginBottom: 8,
		borderWidth: 0,
		borderColor: "transparent",
	},
	input: {
		paddingLeft: 10,
		color: "#fff",
	},
};
