import React, { useState } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SwiperSlider = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const scrollRef = React.createRef();
  const { currentPage: pageIndex } = sliderState;

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: width * index, animated: true });
      setSliderState({ currentPage: index });
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          ref={scrollRef}
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/screen-1.png")}
              style={styles.imageStyle}
            />
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/slide-2.jpg")}
              style={styles.imageStyle}
            />
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/slide-3.jpg")}
              style={styles.imageStyle}
            />
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/slide-4.jpg")}
              style={styles.imageStyle}
            />
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/images/slide-5.jpg")}
              style={styles.imageStyle}
            />
          </View>
        </ScrollView>
        {pageIndex > 0 && (
          <TouchableOpacity
            style={styles.leftArrow}
            onPress={() => scrollToIndex(pageIndex - 1)}
          >
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
        {pageIndex < 3 && (
          <TouchableOpacity
            style={styles.rightArrow}
            onPress={() => scrollToIndex(pageIndex + 1)}
            disabled={pageIndex === 3}
          >
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(180),
    width: "70%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
  leftArrow: {
    position: "absolute",
    left: 20,
    top: "50%",
    transform: [{ translateY: -25 }],
    zIndex: 1,
  },
  rightArrow: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: [{ translateY: -25 }],
    zIndex: 1,
  },
  arrowText: {
    fontSize: 30,
    color: "#fff",
  },
});

export default SwiperSlider;
