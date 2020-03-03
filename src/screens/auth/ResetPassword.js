import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";
import AuthButton from "../../components/AuthButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logoContainer: {
    marginTop: 35
  },
  inputContainer: {
    width: "90%",
    marginTop: 30
  },
  buttonContainer: {
    width: "85%",
    marginTop: 50
  }
});

export default class ResetPassword extends Component {
  state = {
    email: "",
    name: ""
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value }); // 생소한 문법이지만 key가 'email' 일 때 [key]: value 부분은 email: value 로 변경됨
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={val => {
              this.onChangeText("email", val);
            }}
            value={this.state.email}
            containerStyle={{ paddingBottom: 20 }}
            placeholder="이메일 입력"
            leftIcon={<Icon name="mail" color="gray" />}
          />
          <Input
            onChangeText={val => {
              this.onChangeText("name", val);
            }}
            value={this.state.name}
            containerStyle={{ paddingBottom: 20 }}
            placeholder="이름 입력"
            leftIcon={<Icon name="person" color="gray" />}
          />
        </View>

        <View style={styles.buttonContainer}>
          <AuthButton title="확인" backColor="#C8A480"></AuthButton>
        </View>
      </View>
    );
  }
}