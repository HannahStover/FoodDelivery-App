import React, { Component } from "react";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { connect } from "http2";

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants;
    };
};

function RenderItem(props) {
    const item = props.item;

    if (props.isLoading) {
        return <Loading />;
    } else if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    } else {
        if (item != null) {
            return(
                <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={{uri: baseUrl + item.image}}>
                <Text style={{margin: 10}}>{item.description}</Text>
                </Card>
            );
        } else {
            return <View></View>;
        }
    }
}

class AllRestaurants extends Component {

return(
    <View>
    <RenderItem
        item={this.props.restaurants.restaurants.filter(restaurant => restaurant)[0]}
        isLoading={this.props.restaurants.isLoading}
        errMess={this.props.restaurants.errMess}
        />
)
}

export default connect(mapStateToProps)(AllRestaurants);