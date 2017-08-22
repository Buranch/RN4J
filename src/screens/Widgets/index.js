import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Platform } from "react-native";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import styles from "./styles";

const headerLogo = require("../../../assets/header-logo.png");
const primary = require("../../theme/variables/commonColor").brandPrimary;

class Widgets extends Component {
  render() {
    return (
      <Container>
        <Image
          source={require("../../../assets/bg-transparent.png")}
          style={styles.container}
        >
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon active name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Image source={headerLogo} style={styles.imageHeader} />
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon active name="menu" />
              </Button>
            </Right>
          </Header>

          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.overviewHeaderContainer}>
              <Text style={styles.overviewHeader}>WIDGETS</Text>
            </View>

            <Image
              source={require("../../../assets/Widgets/widget1.png")}
              style={styles.mainWidget}
            >
              <Grid style={styles.mainWidgetContainer}>
                <Col>
                  <Icon name="ios-cloud-outline" style={{ fontSize: 40 }} />
                  <Text style={{ fontWeight: "700" }}>Mostly Cloudy</Text>
                  <Text style={{ opacity: 0.7, fontWeight: "700" }}>
                    Bangalore
                  </Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.weather}>38</Text>
                    <Icon
                      name="ios-radio-button-off"
                      style={{ fontSize: 16, marginTop: 5 }}
                    />
                  </View>
                </Col>
              </Grid>

              <Grid style={styles.weatherInfoContainer}>
                <Col style={{ alignItems: "center" }}>
                  <Text style={styles.weatherInfo}>30</Text>
                  <Text style={styles.weatherTime}>8 AM</Text>
                </Col>
                <Col style={{ alignItems: "center" }}>
                  <Text style={styles.weatherInfo}>43</Text>
                  <Text style={styles.weatherTime}>12 PM</Text>
                </Col>
                <Col style={{ alignItems: "center" }}>
                  <Text style={styles.weatherInfo}>39</Text>
                  <Text style={styles.weatherTime}>4 PM</Text>
                </Col>
                <Col style={{ alignItems: "center" }}>
                  <Text style={styles.weatherInfo}>37</Text>
                  <Text style={styles.weatherTime}>8 PM</Text>
                </Col>
                <Col style={{ alignItems: "center" }}>
                  <Text style={styles.weatherInfo}>34</Text>
                  <Text style={styles.weatherTime}>12 AM</Text>
                </Col>
                <Col style={{ alignItems: "center" }}>
                  <Text style={styles.weatherInfo}>28</Text>
                  <Text style={styles.weatherTime}>4 AM</Text>
                </Col>
              </Grid>
            </Image>

            <Grid>
              <Col>
                <Image
                  source={require("../../../assets/Widgets/widget2.png")}
                  style={styles.otherWidget}
                >
                  <View style={styles.otherWidgetContainer}>
                    <Text style={styles.widgetName}>KUMAR SANKET</Text>
                    <Text style={styles.blueRatingPerc}>+0.51%</Text>
                    <Text style={styles.ratingNum}>5,055.55</Text>
                    <Button
                      bordered
                      rounded
                      small
                      style={styles.detailsBtn}
                      textStyle={
                        Platform.OS === "android"
                          ? {
                              color: primary,
                              fontSize: 12,
                              fontWeight: "900",
                              textAlign: "center"
                            }
                          : {
                              color: primary,
                              fontSize: 12,
                              fontWeight: "900",
                              textAlign: "center"
                            }
                      }
                    >
                      <Text>Details</Text>
                    </Button>
                  </View>
                </Image>
              </Col>
              <Col>
                <Image
                  source={require("../../../assets/Widgets/widget3.png")}
                  style={styles.otherWidget}
                >
                  <View style={styles.otherWidgetContainer}>
                    <Text style={styles.widgetName}>KUMAR PRATIK</Text>
                    <Text style={styles.redRatingPerc}>-0.31%</Text>
                    <Text style={styles.ratingNum}>4,567.00</Text>
                    <Button
                      bordered
                      rounded
                      small
                      style={styles.detailsBtn}
                      textStyle={
                        Platform.OS === "android"
                          ? {
                              color: primary,
                              fontSize: 12,
                              fontWeight: "900",
                              textAlign: "center"
                            }
                          : {
                              color: primary,
                              fontSize: 12,
                              fontWeight: "900",
                              textAlign: "center"
                            }
                      }
                    >
                      <Text>Details</Text>
                    </Button>
                  </View>
                </Image>
              </Col>
            </Grid>
          </Content>
        </Image>
      </Container>
    );
  }
}

export default connect()(Widgets);
