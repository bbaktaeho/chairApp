import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  BackHandler,
  ScrollView
} from "react-native";
import { Card } from "react-native-elements";
import Toast from "@remobile/react-native-toast";
import { connect } from "react-redux";

import MyHeader from "../../components/MyHeader";

class Home_one extends Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.state = {};
  }
  // 이벤트 등록
  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  // 이벤트 해제
  componentWillUnmount() {
    this.exitApp = false;
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  // 이벤트 동작
  handleBackButton = () => {
    // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
    if (this.exitApp == undefined || !this.exitApp) {
      ToastAndroid.show("한번 더 누르시면 종료됩니다.", ToastAndroid.SHORT);
      this.exitApp = true;

      this.timeout = setTimeout(
        () => {
          this.exitApp = false;
        },
        2000 // 2초
      );
    } else {
      clearTimeout(this.timeout);
      BackHandler.exitApp(); // 앱 종료
    }
    return true;
  };

  render() {
    const { bluetooth } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="홈 1"></MyHeader>
        <ScrollView>
          <View style={styles.container}>
            <Text>{JSON.stringify(bluetooth)}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

// 전역 state 를 참조할 수 있게 해주는 함수
const mapStateToProps = state => ({
  bluetooth: state.bluetoothReducer.bluetooth
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Home_one);
