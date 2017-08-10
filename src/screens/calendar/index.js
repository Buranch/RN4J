import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";

import { Container, Header, Content, Text, Left, Right, Body, Button, Icon, View } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import { Calendar as MonthCalendar } from "react-native-calendars";

import styles from "./styles";

const headerLogo = require("../../../assets/header-logo.png");

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
		this.onDayPress = this.onDayPress.bind(this);
	}

	onDateChange(date) {
		this.setState({ date });
	}
	onDayPress(day) {
		this.setState({
			selected: day.dateString,
		});
	}

	render() {
		const navigation = this.props.navigation;
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent style={styles.btnHeader} onPress={() => navigation.goBack()}>
							<Icon active name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Image source={headerLogo} style={styles.imageHeader} />
					</Body>
					<Right>
						<Button transparent style={styles.btnHeader} onPress={() => navigation.navigate("DrawerOpen")}>
							<Icon active name="menu" />
						</Button>
					</Right>
				</Header>

				<Content showsVerticalScrollIndicator={false}>
					<View style={styles.bg}>
						<MonthCalendar
							onDayPress={this.onDayPress}
							disableMonthChange={true}
							markedDates={{ [this.state.selected]: { selected: true } }}
							theme={{
								calendarBackground: "#ffffff",
								textSectionTitleColor: "#01cca1",
								selectedDayBackgroundColor: "#01cca1",
								selectedDayTextColor: "#ffffff",
								todayTextColor: "#01cca1",
								dayTextColor: "#2d4150",
								textDisabledColor: "#d9e1e8",
								dotColor: "#00adf5",
								selectedDotColor: "#ffffff",
								arrowColor: "#01cca1",
								monthTextColor: "#000",
							}}
						/>
					</View>

					<View style={{ backgroundColor: "#fff" }}>
						<TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("Story")}>
							<Image source={require("../../../assets/NewsIcons/1.jpg")} style={styles.newsImage} />
							<View style={styles.newsContent}>
								<Text numberOfLines={2} style={styles.newsHeader}>
									Flat App is focussed on a minimal use of simple elements.
								</Text>
								<Grid style={{ marginTop: 25 }}>
									<Col>
										<Text style={styles.newsLink}>CDC</Text>
									</Col>
									<Col>
										<TouchableOpacity
											style={styles.newsTypeView}
											onPress={() => this.props.navigation.navigate("Channel")}
										>
											<Text style={styles.newsTypeText}>ENVIRONMENT</Text>
										</TouchableOpacity>
									</Col>
								</Grid>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("Story")}>
							<Image source={require("../../../assets/NewsIcons/3.jpg")} style={styles.newsImage} />
							<View style={styles.newsContent}>
								<Text numberOfLines={2} style={styles.newsHeader}>
									So that the applications are able to load faster and reaize easily.
								</Text>
								<Grid style={{ marginTop: 25 }}>
									<Col>
										<Text style={styles.newsLink}>SPACE.com</Text>
									</Col>
									<Col>
										<TouchableOpacity
											style={styles.newsTypeView}
											onPress={() => this.props.navigation.navigate("Channel")}
										>
											<Text style={styles.newsTypeText}>SCIENCE</Text>
										</TouchableOpacity>
									</Col>
								</Grid>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("Story")}>
							<Image source={require("../../../assets/NewsIcons/4.jpg")} style={styles.newsImage} />
							<View style={styles.newsContent}>
								<Text numberOfLines={2} style={styles.newsHeader}>
									But still look sharp on high-definition screens.
								</Text>
								<Grid style={{ marginTop: 25 }}>
									<Col>
										<Text style={styles.newsLink}>SKY.com</Text>
									</Col>
									<Col>
										<TouchableOpacity
											style={styles.newsTypeView}
											onPress={() => this.props.navigation.navigate("Channel")}
										>
											<Text style={styles.newsTypeText}>WORLD</Text>
										</TouchableOpacity>
									</Col>
								</Grid>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("Story")}>
							<Image source={require("../../../assets/NewsIcons/11.jpg")} style={styles.newsImage} />
							<View style={styles.newsContent}>
								<Text numberOfLines={2} style={styles.newsHeader}>
									Highly customizable widgets are part of our never ending mission.
								</Text>
								<Grid style={{ marginTop: 25 }}>
									<Col>
										<Text style={styles.newsLink}>ESPN</Text>
									</Col>
									<Col>
										<TouchableOpacity
											style={styles.newsTypeView}
											onPress={() => this.props.navigation.navigate("Channel")}
										>
											<Text style={styles.newsTypeText}>SPORTS</Text>
										</TouchableOpacity>
									</Col>
								</Grid>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("Story")}>
							<Image source={require("../../../assets/NewsIcons/13.jpg")} style={styles.newsImage} />
							<View style={styles.newsContent}>
								<Text numberOfLines={2} style={styles.newsHeader}>
									Ready to use components built using NativeBase.
								</Text>
								<Grid style={{ marginTop: 25 }}>
									<Col>
										<Text style={styles.newsLink}>EDU.com</Text>
									</Col>
									<Col>
										<TouchableOpacity
											style={styles.newsTypeView}
											onPress={() => this.props.navigation.navigate("Channel")}
										>
											<Text style={styles.newsTypeText}>EDUCATION</Text>
										</TouchableOpacity>
									</Col>
								</Grid>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("Story")}>
							<Image source={require("../../../assets/NewsIcons/12.jpg")} style={styles.newsImage} />
							<View style={styles.newsContent}>
								<Text numberOfLines={2} style={styles.newsHeader}>
									Theme your app with one single file.
								</Text>
								<Grid style={{ marginTop: 25 }}>
									<Col>
										<Text style={styles.newsLink}>ART.com</Text>
									</Col>
									<Col>
										<TouchableOpacity
											style={styles.newsTypeView}
											onPress={() => this.props.navigation.navigate("Channel")}
										>
											<Text style={styles.newsTypeText}>ART</Text>
										</TouchableOpacity>
									</Col>
								</Grid>
							</View>
						</TouchableOpacity>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Calendar;
