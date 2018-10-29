// @flow
import React, { Component } from "react";
import * as Expo from "expo";
import {
    Container,
    Content,
    Text,
    Item,
    Input,
    Button,
    Icon,
    View,
    Body,
    Toast
} from "native-base";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { Root } from "native-base";
import { connect} from 'react-redux';
import { saveUserToken, _storeData, _retrieveData, _removeUserToken} from "./actions/authActions";
import Login from "./screens/Login/LoginForm";
// import ForgotPassword from "./screens/ForgotPassword";
// import SignUp from "./screens/SignUp/";
import Walkthrough from "./screens/Walkthrough/";
// import Comments from "./screens/Comments/";
// import Channel from "./screens/Channel";
// import Story from "./screens/Story";
import Home from "./screens/Home/";
import Channels from "./screens/Channels";
import Sidebar from "./screens/Sidebar";
// import Overview from "./screens/Overview";
// import Calendar from "./screens/Calendar/";
// import Timeline from "./screens/Timeline";
// import Feedback from "./screens/Feedback/";
import Profile from "./screens/Profile/";
// import Settings from "./screens/Settings";
import CompanyChoose from "./screens/CompanyChoose";
import InitialScreen from "./screens/InitialScreen";

export const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Channels: { screen: Channels },
    // Overview: { screen: Overview },
    // Calendar: { screen: Calendar },
    // Timeline: { screen: Timeline },
    // Feedback: { screen: Feedback },
    Profile: { screen: Profile },
    // Settings: { screen: Settings },
    // CompanyChoose: { screen: CompanyChoose}
  },
  {
    // initialRouteName: "Home",
    // initialRouteName: "Profile",
    initialRouteName: "Channels",
    // initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
);

const App = createStackNavigator(
  {
    CompanyChoose: { screen: CompanyChoose},
    Login: { screen: Login },
    // SignUp: { screen: SignUp },
    // ForgotPassword: { screen: ForgotPassword },
    Walkthrough: { screen: Walkthrough },
    // Story: { screen: Story },
    // Comments: { screen: Comments },
    // Channel: { screen: Channel },
    Channels: { screen: Channels },
    Home: { screen: Home},
    Drawer: { screen: Drawer },
    Profile: { screen: Profile },
    InitialScreen: { screen : InitialScreen }

  },
  {
    // index: 0,
    // initialRouteName: "Profile",
    // initialRouteName: "Story",
    // initialRouteName: "CompanyChoose",
    initialRouteName: "Login",
    // initialRouteName: "InitialScreen",
    // initialRouteName: "Walkthrough",
    // initialRouteName: "Drawer",
    // initialRouteName: "Home",


    headerMode: "none"
  }
);

class Booter extends Component {
      constructor(props) {
        super(props);
        _retrieveData(props.dispatch);
        // _storeData({email: "birukmisa@gmail.com", password: "password"}, this.props.dispatch);

        _removeUserToken(props.dispatch);
      }

      render() {
        const { token, isLoading } = this.props;
        // let toDrawer = false;
        console.log("token", token);
        console.log("isLoading ", isLoading);
        console.log("typeof", typeof(token));
        console.log("type of bool", typeof(token) === "object");

        // if()


        // const t = JSON.parse(token);
        if (isLoading) {
          return <Root><View><Text style={{color: "black"}}>Loading</Text></View></Root>
        }

        // console.log(t);
        return (
            <Root>
              {
                (!isLoading && typeof (token) === "object" && Object.keys(token).length === 0)
                ?
                (<App />) : (<Drawer />)
              }
                {/* <App /> */}
                {/* <Drawer /> */}
              </Root>
        );
      }
}


const mapStateToProps = state => ({
  // items: state.homeReducer.items,
  // hasErrored: state.homeReducer.hasErrored,
  isLoading: state.token.loading,
  token: state.token.token
});


const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Booter);