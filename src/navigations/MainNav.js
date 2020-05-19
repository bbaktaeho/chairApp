import React from "react";
import { View, Text, ScrollView, AsyncStorage } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Avatar, Icon } from "react-native-elements";

import SettingNav from "../navigations/SettingNav";
import HomeNav from "../navigations/HomeNav";
// import Privacy from "../screens/auth/Privacy";
import AppConfig from "../screens/main/AppConfig";
import StatNav from "../navigations/StatNav";
import Fetch from "../components/Fetch";
import URL from "../NET";

// 드로우 네비게이션 상단 컴포넌트(로그인 상태)
class DrawerContent extends React.Component {
  state = {
    username: "",
  };

  requestInfo = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token == null) {
      this.setState({ username: "비회원" });
    } else {
      const res = await Fetch(URL.account, "GET", null, token);
      const body = JSON.parse(res._bodyText);
      if (body.success) {
        this.setState({ username: body.user.name });
      } else {
        console.log("fetch error");
      }
    }
  };

  componentWillMount() {
    this.requestInfo();
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 140,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            size="small"
            rounded
            icon={{ name: "user", type: "antdesign" }}
            overlayContainerStyle={{ backgroundColor: "#695c4c" }}
            containerStyle={{ marginLeft: 15, marginTop: 10 }}
          />
          <Text style={{ paddingRight: 185, fontSize: 23, color: "#695c4c" }}>
            {this.state.username}
          </Text>
        </View>
        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}

export default MainNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav,
      navigationOptions: {
        drawerLabel: "홈",
        drawerIcon: () => (
          <Icon name="home" size={25} type="antdesign" color="#544e48" />
        ),
      },
    },

    Stat: {
      screen: StatNav,
      navigationOptions: {
        drawerLabel: "통계",
        drawerIcon: () => (
          <Icon name="barschart" size={25} type="antdesign" color="#544e48" />
        ),
      },
    },
  },
  {
    hideStatusBar: false,
    intialRouteName: "Home",
    //drawerBackgroundColor: "#DFCEBE", // 앱의 백그라운드 컬러와 맞추면 됨
    overlayColor: "#d3d3d3",
    contentComponent: DrawerContent,
    contentOptions: {
      labelStyle: { fontSize: 15 },
      activeTintColor: "#695c4c",
      inactiveTintColor: "#d3d3d3",
    },
  }
);
