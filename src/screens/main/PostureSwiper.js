import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import MyHeader from "../../components/MyHeader";
import MyDivider from "../../components/MyDivider";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width,
    flex: 1,
    resizeMode: "contain",
  },
  description: {
    margin: 20,
    fontSize: 15,
    color: "black",
    // textAlign: "justify",
    lineHeight: 22,
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  dividerText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 5,
    color: "silver",
  },
  dividerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 380,
    height: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "silver",
  },
};

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey", fontSize: 20 }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

export default class PostureSwiper extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader
          navigation={this.props.navigation}
          title="자세 설명"
        ></MyHeader>
        <Swiper
          style={styles.wrapper}
          renderPagination={renderPagination}
          loop={false}
        >
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../../assets/Images/P0.png")}
            />
            <View style={{ flex: 1.2 }}>
              <MyDivider title="바른 자세" left={15} />
              <Text style={styles.description}>
                허리 디스크병의 큰 원인 중 하나는 나쁜 자세로 앉는 습관입니다.
                10도 정도 뒤로 허리를 펴고, 15도 정도의 높이로 하늘을 보는 듯
                목을 바로 들고 앉는 자세가 좋습니다. 허리나 등을 등받이에 대면
                디스크 내부의 압력이 감소됩니다. 의자에 앉을 때 엉덩이를 의자
                깊숙이 넣고, 등받이에 허리를 닿게 하는 자세가 좋습니다.
              </Text>
            </View>
          </View>

          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../../assets/Images/P5.png")}
            />
            <View style={{ flex: 1.2 }}>
              <MyDivider title="숙인 자세" left={15} />
              <Text style={styles.description}>
                의자를 앉는 잘못된 자세입니다. 앞으로 숙인 자세는 거북목, 라운드
                숄더와 같은 자세 변형을 유발하고 이로 인해 목 통증 및 어깨
                통증을 유발합니다. 이러한 증상은 곧 상부 교차 증후군의 원인이
                됩니다.
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../../assets/Images/P4.png")}
            />
            <View style={{ flex: 1.2 }}>
              <MyDivider title="둔부 앞 자세" left={15} />
              <Text style={styles.description}>
                허리가 등받이에 대지 않고 기댄 자세로서 척추 전반에 무리를 주는
                자세다. 기대고 있는 어깨쪽에 무리를 주며 목과 어깨의 통증을
                유발하고 정상적인 척추만곡을 해칩니다.
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../../assets/Images/P2.png")}
            />
            <View style={{ flex: 1.2 }}>
              <MyDivider title="다리를 꼰 자세" left={15} />
              <Text style={styles.description}>
                골반의 틀어짐도 허리의 통증을 유발하는 원인이 됩니다. 다리를
                꼬고 앉으면 꼬고 앉은 쪽으로 골반이 틀어지게 되고 연결 되어있는
                척추에까지 영향을 주어 척추의 좌우 균형을 무너뜨리는 원인이
                됩니다. 또 다리를 꼬고 앉게 되면 한쪽 엉덩이가 뜨거나 한쪽으로
                몸이 기울어 지면서 허리 척추 질환을 가속화 할 수 있습니다.
                그러므로 다리는 꼬지 않고 바로 앉는 습관을 들이도록 하는 것이
                좋습니다.
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../../assets/Images/P1.png")}
            />
            <View style={{ flex: 1.2 }}>
              <MyDivider title="걸터 앉은 자세" left={15} />
              <Text style={styles.description}>
                많은 사람들이 허리가 아프다는 이유로 의자의 끝에 엉덩이를 살짝
                걸쳐 앉곤 하지만 이런 습관은 자세를 구부정하게 만든다. 또
                느낌과는 전혀 다르게 의자에 바로 앉았을 때보다 2배 이상의 압력이
                허리에 실리게 된다. 즉 이 자세는 허리 통증을 심화시킬 수 있다.
                따라서 의자에 앉을 때는 허리에 실리는 무게를 분산시킬 수 있도록
                끝에만 살짝 걸쳐 앉는 습관은 피하자.
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
    );
  }
}
