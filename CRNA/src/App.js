// @flow
import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./screens/Login/";
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



const Drawer = createDrawerNavigator(
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

  },
  {
    // index: 0,
    // initialRouteName: "Profile",
    // initialRouteName: "Story",
    // initialRouteName: "CompanyChoose",
    // initialRouteName: "Login",
    // initialRouteName: "Walkthrough",
    initialRouteName: "Drawer",
    // initialRouteName: "Home",


    headerMode: "none"
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
