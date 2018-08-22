import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const Details = ({ navigation }) => {
  const offer = navigation.getParam('offer');
  const imageHeight = Dimensions.get('window').height * 0.8;
  const description = `${offer.type} for rent, ${offer.size} square meters`;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButtonContainer}
      >
        <Image
          source={require('../assets/left-arrow.png')}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
      <Image
        style={{ height: imageHeight }}
        source={{
          uri: offer.image
        }}
      />
      <View style={styles.descriptionContainer}>
        <View>
          <Text style={styles.offerDescription}>
            {description.toUpperCase()}
          </Text>
          <Text style={styles.priceTag}>{offer.price}</Text>
          <View style={styles.rowWithSpaceBetween}>
            <View>
              <Text style={styles.offerLocation}>{offer.location}</Text>
            </View>
            <View>
              <Text style={styles.offerRating}>
                RATING: {[...Array(offer.rating).keys()].map(star => '★')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 44,
    left: 24,
    zIndex: 1
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600'
  },
  descriptionContainer: {
    margin: 16,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  priceTag: {
    color: '#333',
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 4
  },
  offerDescription: {
    fontWeight: '500',
    fontSize: 14,
    color: '#333'
  },
  rowWithSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  offerRating: {
    fontSize: 11,
    color: '#333'
  },
  offerLocation: {
    fontSize: 14,
    color: '#333'
  }
});

export default Details;
