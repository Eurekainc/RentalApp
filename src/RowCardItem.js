import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
} from 'react-native';
import {
  PanGestureHandler,
  State as GestureState,
} from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

class RowCardItem extends React.Component {
  state = {
    animatedValue: new Animated.Value(0),
  };

  handleHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === GestureState.END) {
      if (nativeEvent.translationX < -0.35 * width) {
        Animated.timing(this.state.animatedValue, {
          toValue: -width,
          useNativeDriver: true,
        }).start(() => {
          this.props.removeItem(this.props.offer.id);
        });
      } else {
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  render() {
    const { offer } = this.props;
    const imageHeight = height * 0.15;
    const imageWidth = width * 0.7;

    const scale = this.state.animatedValue.interpolate({
      inputRange: [-250, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <PanGestureHandler
        minOffsetX={-1}
        onGestureEvent={Animated.event(
          [{ nativeEvent: { translationX: this.state.animatedValue } }],
          { useNativeDriver: true }
        )}
        onHandlerStateChange={this.handleHandlerStateChange}
      >
        <Animated.View>
          <Animated.View
            style={[
              styles.rowWrapper,
              {
                opacity: this.state.animatedValue.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [1, 1, 0],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          >
            <Animated.Image
              source={require('../assets/garbage.png')}
              style={[
                styles.actionIcon,
                { transform: [{ scale }], width: 32, height: 32 },
              ]}
            />
          </Animated.View>

          <Animated.View
            style={{
              backgroundColor: 'white',
              transform: [
                {
                  translateX: this.state.animatedValue,
                },
              ],
            }}
          >
            <View style={styles.mainContainer}>
              <ImageBackground
                style={[styles.cardView, { height: imageHeight }]}
                source={{
                  uri: offer.image,
                }}
              >
                <View style={[{ ...styles.overlay, left: imageWidth }]}>
                  <View style={styles.content}>
                    <Text style={styles.offerLocation}>{offer.location}</Text>
                    <Text style={styles.priceTag}>{offer.price}</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingVertical: 1,
  },
  content: {
    alignItems: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  cardView: {
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  priceTag: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 4,
  },
  offerLocation: {
    fontSize: 16,
    color: '#eee',
  },
  actionIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 10,
  },
  rowWrapper: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});

export default RowCardItem;
