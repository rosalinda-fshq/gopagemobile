import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, StatusBar, SafeAreaView, ScrollView, PixelRatio, TouchableOpacity } from 'react-native';
import ButtonComponent from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

const SwiperSlider = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

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
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
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
              source={require('../assets/images/slider1.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Nature Imitates Art</Text>
              <Text style={styles.paragraph}>....something like that</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('../assets/images/slider2.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>High quality Art work</Text>
              <Text style={styles.paragraph}>... for a fraction of the price</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('../assets/images/slider3.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Top Notch Artists</Text>
              <Text style={styles.paragraph}>... all in one place</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('../assets/images/slider4.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Best deal on the market</Text>
              <Text style={styles.paragraph}>... let's find your next art</Text>
            </View>
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
          {Array.from(Array(4).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#0898A0',
    marginLeft: 10,
  },
  leftArrow: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: [{ translateY: -25 }],
    zIndex: 1,
  },
  rightArrow: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -25 }],
    zIndex: 1,
  },
  arrowText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default SwiperSlider;
