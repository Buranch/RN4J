const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center"
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
    height: deviceHeight / 4,
    alignSelf: "center"
  },
  form: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  loginBtn: {
    marginTop: 7,
    height: 50
  },
  otherLinksContainer: {
    paddingTop: deviceHeight < 600 ? 5 : Platform.OS === "android" ? 10 : 15,
    flexDirection: "row"
  },
  helpBtns: {
    opacity: 0.9,
    fontWeight: "bold",
    color: "#fff",
    fontSize: Platform.OS === "android" ? 12 : 12
  },
  inputGrp: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: 8,
    borderWidth: 0,
    borderColor: "transparent"
  },
  input: {
    paddingLeft: 10,
    color: "#fff"
  }
};
