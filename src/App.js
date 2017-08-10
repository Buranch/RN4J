import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./Screens/Login/";
import NeedHelp from "./Screens/NeedHelp";
import SignUp from "./Screens/SignUp/";
import Walkthrough from "./Screens/Walkthrough/";
import Comments from "./Screens/Comments/";
import Channel from "./Screens/Channel";
import Story from "./Screens/Story";
import Home from "./Screens/Home/";
import Channels from "./Screens/Channels";
import Sidebar from "./Screens/Sidebar";
import Overview from "./Screens/Overview";
import Calendar from "./Screens/Calendar/";
import Timeline from "./Screens/Timeline";
import Feedback from "./Screens/Feedback/";
import Profile from "./Screens/Profile/";
import Settings from "./Screens/Settings";
import Widgets from "./Screens/Widgets";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		Channels: { screen: Channels },
		Overview: { screen: Overview },
		Calendar: { screen: Calendar },
		Timeline: { screen: Timeline },
		Feedback: { screen: Feedback },
		Profile: { screen: Profile },
		Settings: { screen: Settings },
		Widgets: { screen: Widgets },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		SignUp: { screen: SignUp },
		NeedHelp: { screen: NeedHelp },
		Walkthrough: { screen: Walkthrough },
		Story: { screen: Story },
		Comments: { screen: Comments },
		Channel: { screen: Channel },
		Drawer: { screen: Drawer },
	},
	{
		index: 0,
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () =>
	<Root>
		<App />
	</Root>;
