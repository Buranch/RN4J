/* @flow */
import React, { Component } from "react";
import { Image, View } from "react-native";

import { Container, Header, Text, Input, Button, Icon, Body, Item, Tabs, Tab } from "native-base";

import styles from "./style";

import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
type Props = {};
class Comments extends Component {
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
		};
	}

	render() {
		return (
			<Container>
				<Image source={require("../../../assets/bg-transparent.png")} style={styles.container}>
					<Header>
						<Body style={{ flexDirection: "row", justifyContent: "space-around" }}>
							<Button transparent onPress={() => this.props.navigation.goBack()}>
								<Icon active name="arrow-back" style={styles.headerIcons} />
							</Button>
							<Button transparent>
								<Icon name="chatboxes" style={styles.headerIcons} />
							</Button>
							<Button transparent>
								<Text style={styles.headerTextIcon}>Aa</Text>
							</Button>
							<Button transparent>
								<Icon name="bookmarks" style={styles.headerIcons} />
							</Button>
							<Button transparent>
								<Icon name="download" style={styles.headerIcons} />
							</Button>
						</Body>
					</Header>
					<View style={styles.commentHeadbg}>
						<Text style={styles.commentHeader}>23 COMMENTS</Text>
						<Tabs tabBarUnderlineStyle={{ height: 0 }}>
							<Tab heading="Best">
								<TabOne />
							</Tab>
							<Tab heading="Newest">
								<TabTwo />
							</Tab>
							<Tab heading="Oldest">
								<TabThree />
							</Tab>
						</Tabs>
					</View>

					<View style={styles.commentBox}>
						<Item>
							<Icon name="ios-attach" style={styles.attachIcon} />
							<Input
								placeholder="Write something..."
								placeholderTextColor="#797979"
								style={styles.input}
							/>
							<Icon name="ios-arrow-forward" style={styles.arrowForwardIcon} />
						</Item>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Comments;
