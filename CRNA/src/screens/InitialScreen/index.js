import React, { Component } from "react";
import { connect} from 'react-redux';
import { saveUserToken, _storeData, _retrieveData } from "./../../actions/authActions";
import Login from './../Login';

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

class Init extends Component {
    constructor(props) {
        super(props);
        _retrieveData(props.dispatch);
    }

    componentWillMount() {
        if (!this.props.isLoading) {
            console.log("Routing to drawer");
            this.props.navigation.navigate("Drawer");
        }
    }


    render() {
        const { isLoading, token } = this.props;
        console.log("TOKEN", token);
        console.log("is Loading ", isLoading);
        // if (!this.props.isLoading) {
        //     console.log("Routing to drawer");
        //     this.props.navigation.navigate("Drawer");
        // }
        return (
            <Container>
                <View>
                    <Text style={{color: "#000"}}>{isLoading ?  "Loading" : "Should be Login" } </Text>
                </View>
            </Container>
            // <Login />
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
)(Init);