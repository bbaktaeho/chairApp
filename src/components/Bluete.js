import React from "react";
import { Provider, connect } from "react-redux";
import { PermissionsAndroid, BackHandler, AsyncStorage } from "react-native";
import ActionCreator from "../actions/index";
import initStore from "../store/index";

import BluetoothSerial from "react-native-bluetooth-serial-next";
import Toast from "@remobile/react-native-toast";

import { Buffer } from "buffer";
global.Buffer = Buffer;
global.connected = false;

const store = initStore();

class Bluete extends React.Component {
  constructor(props) {
    super(props);
    this.events = null;
    this.state = {
      connected: false,
      isEnabled: false,
      device: null,
      devices: [],
      scanning: false,
      processing: false
    };
  }

  async componentDidMount() {
    this.events = this.props.events;
    // 블루투스 검색할 수 있는 permission
    await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    ).then(result => {
      if (!result) {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
        );
      }
    });

    try {
      // 초기 어플 실행 시 작업공간
      const [isEnabled, devices] = await Promise.all([
        // paired 가져옴
        BluetoothSerial.isEnabled(),
        BluetoothSerial.list()
      ]);
      // 블루투스가 off 라면
      if (!isEnabled) {
        // 블루투스 자동으로 on
        await BluetoothSerial.enable();
      }

      var temp = []; // 찾은 chairCommunication 저장
      var id; // 찾은 chairCommunication의 id(블루투스 adress) 저장
      var check;
      for (let v of devices) {
        if (v.name === "chairCommunication") {
          temp = [v];
          id = v.id;
          break;
        }
      }
      if (temp.length > 0) {
        this.setState({
          isEnabled,
          devices: temp.map(device => ({
            // chairCommunication 발견 했다면 devices에 넣어놓고
            // 객체 속성을 추가함(paired, connected)
            ...device,
            paired: true
          }))
        });
        // 찾은게 있다면 강제 커넥트
        await BluetoothSerial.connect(id);

        // catch에 걸리지 않으면
        // this.state.connected = true;
        global.connected = true;
        Toast.showShortBottom("블루투스와 연결되었습니다");

        let splitData = [];
        let vib = [];
        let back = [];
        let seat = [];
        let a, b, c;
        // 블루투스 모듈 연결이 성공했을 때
        BluetoothSerial.read((data, subscription) => {
          splitData = data.split(",");
          vib = splitData[2];
          global.vib = vib;
          back = splitData[1].split("^");
          seat = splitData[0].split("^");
          for (var i = 1; i < 5; i++) {
            switch (i) {
              case 1:
                a = parseInt(back[i - 1]);
              case 2:
                b = parseInt(back[i - 1]);
              case 3:
                c = parseInt(back[i - 1]);
              case 4:
                this.props.backchange(4, a, b, c, parseInt(back[i - 1]));
            }
          }

          if (this.imBoredNow && subscription) {
            BluetoothSerial.removeSubscription(subscription);
          }
        }, "\r\n");
        // await this.read();
      } else {
        Toast.showLongBottom("블루투스를 등록해 주세요. 곧 종료됩니다");

        // 여기는 다 완성되고 나서 주석을 지워주시면 됩니다.
        // await this.noneChair();
      }
    } catch (e) {
      Toast.showShortBottom(e.message);
    }
  }

  async componentWillMount() {
    try {
    } catch (e) {
      console.log(e.message);
    }
  }

  // 앱이 종료되는 시점에 앱 내부에 저장한 데이터를 모두 제거
  // 자동 로그인 구현 시 제거해야할 로직임
  async componentWillUnmount() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e.message);
    }
  }

  // 등록한 체어가 없다면 실행
  noneChair() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        BackHandler.exitApp();
      }, 2500);
    });
  }

  render() {
    return <Provider store={store}></Provider>;
  }
}

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    backchange: (num, da, da2, da3, da4) => {
      dispatch(ActionCreator.backchange(num, da, da2, da3, da4));
    },
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bluete);
