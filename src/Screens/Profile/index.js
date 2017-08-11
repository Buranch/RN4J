import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";

import { Container, Content, Text, Thumbnail, View } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import MyHeader from "../../Components/MyHeader";

import styles from "./styles";

class Profile extends Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<Container>
				<Image source={require("../../../assets/bg-transparent.png")} style={styles.container}>
					<MyHeader navigation={navigation} />

					<Content showsVerticalScrollIndicator={false}>
						<View style={styles.profileInfoContainer}>
							<View style={{ alignSelf: "center" }}>
								<Thumbnail
									source={require("../../../assets/Contacts/sanket.png")}
									style={styles.profilePic}
								/>
							</View>
							<View style={styles.profileInfo}>
								<Text style={styles.profileUser}>Kumar Sanket</Text>
								<Text note style={styles.profileUserInfo}>
									CEO, GeekyAnts
								</Text>
							</View>
						</View>

						<View style={styles.linkTabs}>
							<Grid>
								<Col>
									<View style={styles.linkTabs_header}>
										<Text style={styles.linkTabs_tabCounts}>13</Text>
										<Text note style={styles.linkTabs_tabName}>
											Comments
										</Text>
									</View>
								</Col>
								<Col>
									<View style={styles.linkTabs_header}>
										<Text style={styles.linkTabs_tabCounts}>12</Text>
										<Text note style={styles.linkTabs_tabName}>
											Channels
										</Text>
									</View>
								</Col>
								<Col>
									<View style={styles.linkTabs_header}>
										<Text style={styles.linkTabs_tabCounts}>52</Text>
										<Text note style={styles.linkTabs_tabName}>
											Bookmarks
										</Text>
									</View>
								</Col>
							</Grid>
						</View>
						<View style={{ backgroundColor: "#fff" }}>
							<TouchableOpacity
								style={{ flexDirection: "row" }}
								onPress={() => navigation.navigate("Story")}
							>
								<Image source={require("../../../assets/NewsIcons/1.jpg")} style={styles.newsImage} />
								<View style={styles.newsContent}>
									<Text numberOfLines={2} style={styles.newsHeader}>
										Flat App is focussed on a minimal use of simple elements.
									</Text>
									<Grid style={{ marginTop: 25 }}>
										<Col>
											<TouchableOpacity>
												<Text style={styles.newsLink}>CDC</Text>
											</TouchableOpacity>
										</Col>
										<Col>
											<TouchableOpacity style={styles.newsTypeView}>
												<Text style={styles.newsTypeText}>ENVIRONMENT</Text>
											</TouchableOpacity>
										</Col>
									</Grid>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: "row" }}
								onPress={() => navigation.navigate("Story")}
							>
								<Image source={require("../../../assets/NewsIcons/3.jpg")} style={styles.newsImage} />
								<View style={styles.newsContent}>
									<Text numberOfLines={2} style={styles.newsHeader}>
										So that the applications are able to load faster and reaize easily.
									</Text>
									<Grid style={{ marginTop: 25 }}>
										<Col>
											<TouchableOpacity>
												<Text style={styles.newsLink}>SPACE.com</Text>
											</TouchableOpacity>
										</Col>
										<Col>
											<TouchableOpacity style={styles.newsTypeView}>
												<Text style={styles.newsTypeText}>SCIENCE</Text>
											</TouchableOpacity>
										</Col>
									</Grid>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: "row" }}
								onPress={() => navigation.navigate("Story")}
							>
								<Image source={require("../../../assets/NewsIcons/4.jpg")} style={styles.newsImage} />
								<View style={styles.newsContent}>
									<Text numberOfLines={2} style={styles.newsHeader}>
										But still look sharp on high-definition screens.
									</Text>
									<Grid style={{ marginTop: 25 }}>
										<Col>
											<TouchableOpacity>
												<Text style={styles.newsLink}>SKY.com</Text>
											</TouchableOpacity>
										</Col>
										<Col>
											<TouchableOpacity style={styles.newsTypeView}>
												<Text style={styles.newsTypeText}>WORLD</Text>
											</TouchableOpacity>
										</Col>
									</Grid>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								style={{ flexDirection: "row" }}
								onPress={() => navigation.navigate("Story")}
							>
								<Image source={require("../../../assets/NewsIcons/10.jpg")} style={styles.newsImage} />
								<View style={styles.newsContent}>
									<Text numberOfLines={2} style={styles.newsHeader}>
										Highly customizable widgets are part of our never ending mission.
									</Text>
									<Grid style={{ marginTop: 25 }}>
										<Col>
											<TouchableOpacity>
												<Text style={styles.newsLink}>ANI.com</Text>
											</TouchableOpacity>
										</Col>
										<Col>
											<TouchableOpacity style={styles.newsTypeView}>
												<Text style={styles.newsTypeText}>ANIMATION</Text>
											</TouchableOpacity>
										</Col>
									</Grid>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: "row" }}
								onPress={() => navigation.navigate("Story")}
							>
								<Image source={require("../../../assets/NewsIcons/9.jpg")} style={styles.newsImage} />
								<View style={styles.newsContent}>
									<Text numberOfLines={2} style={styles.newsHeader}>
										Ready to use components built using NativeBase.
									</Text>
									<Grid style={{ marginTop: 25 }}>
										<Col>
											<TouchableOpacity>
												<Text style={styles.newsLink}>STYLE.com</Text>
											</TouchableOpacity>
										</Col>
										<Col>
											<TouchableOpacity style={styles.newsTypeView}>
												<Text style={styles.newsTypeText}>FASHION</Text>
											</TouchableOpacity>
										</Col>
									</Grid>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: "row" }}
								onPress={() => navigation.navigate("Story")}
							>
								<Image source={require("../../../assets/NewsIcons/12.jpg")} style={styles.newsImage} />
								<View style={styles.newsContent}>
									<Text numberOfLines={2} style={styles.newsHeader}>
										Theme your app with one single file.
									</Text>
									<Grid style={{ marginTop: 25 }}>
										<Col>
											<TouchableOpacity>
												<Text style={styles.newsLink}>ART.com</Text>
											</TouchableOpacity>
										</Col>
										<Col>
											<TouchableOpacity style={styles.newsTypeView}>
												<Text style={styles.newsTypeText}>ART</Text>
											</TouchableOpacity>
										</Col>
									</Grid>
								</View>
							</TouchableOpacity>
						</View>
					</Content>
				</Image>
			</Container>
		);
	}
}

export default Profile;
