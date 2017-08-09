import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Login from "./screens/login/";
import NeedHelp from "./screens/needhelp";
import SignUp from "./screens/sign-up/";
import Walkthrough from "./screens/walkthrough/";
import Comments from "./screens/comments/";
import Channel from "./screens/channel";
import Story from "./screens/story";
import Home from "./screens/home/";
import Channels from "./screens/channels";
import SideBar from "./screens/sideBar";
import Overview from "./screens/overview";
import Calendar from "./screens/calendar/";
import Timeline from "./screens/timeline";
import Feedback from "./screens/feedback/";
import Profile from "./screens/profile/";
import Settings from "./screens/settings";
import Widgets from "./screens/widgets";

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
		contentComponent: props => <SideBar {...props} />,
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

export default App;
