const React = require("react-native");
const {
  Dimensions,
  Platform
} = React;

const primary = require("../../theme/variables/commonColor").brandPrimary;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  bgHead: {
    backgroundColor: primary,
    flex: 1
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  channelBtn1: {
    borderWidth: 1,
    borderColor: Platform.OS === "android" ? "#ddd" : "rgba(255,255,255,0.5)"
  },
  na: {},
  channelImg: {
    height: deviceHeight / 4 + 10,
    width: deviceWidth / 2 + 2
  },
  ioschannelImgText: {
    fontSize: 12,
    fontWeight: "900",
    padding: 20,
    paddingLeft: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginLeft: 20,
    marginTop: deviceHeight / 6 + 10
  },
  achannelImgText: {
    fontSize: 12,
    fontWeight: "900",
    marginLeft: 20,
    marginTop: deviceHeight / 4 - 20
  },
  infoDiv: {
    backgroundColor: "#c6fccb87"
  },
  infoDivText: {
    padding: 20,
    fontWeight: "600",
    color: primary
  },
  cols: {
    paddingLeft: 15
  },
  label: {
    color: primary,
    padding: 2,
    paddingBottom: 0,
    paddingTop: 10
  },
  inputIcon: {
    color: "#7cb97f",
    fontSize: 15
  },
  input: {
    color: primary
  }
};
