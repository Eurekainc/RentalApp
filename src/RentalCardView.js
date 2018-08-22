import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';

const RentalCardView = ({ offer, navigation, isLiked, toggleLikeOffer }) => {
  const imageHeight = Dimensions.get('window').height * 0.7;
  const description = `${offer.type} for rent, ${offer.size} square meters`;

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Details', { offer })}
      >
        <ImageBackground
          style={[styles.cardView, { height: imageHeight }]}
          source={{
            uri: offer.image
          }}
        >
          <View style={[{ ...styles.overlay, top: imageHeight - 128 }]}>
            <View style={styles.descriptionContainer}>
              <View>
                <View style={styles.rowWithSpaceBetween}>
                  <Text style={styles.offerDescription}>
                    {description.toUpperCase()}
                  </Text>
                  <TouchableOpacity onPress={() => toggleLikeOffer(offer.id)}>
                    <Image
                      source={
                        isLiked
                          ? require('../assets/heart-selected.png')
                          : require('../assets/heart.png')
                      }
                      style={{ width: 24, height: 24 }}
                    />
                  </TouchableOpacity>
                </View>
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
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF',
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  cardView: {
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  descriptionContainer: {
    flex: 1,
    margin: 16,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  priceTag: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    marginVertical: 4
  },
  offerDescription: {
    fontWeight: '500',
    fontSize: 14,
    color: '#eee'
  },
  rowWithSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  offerRating: {
    fontSize: 11,
    color: 'gold'
  },
  offerLocation: {
    fontSize: 14,
    color: '#eee'
  }
});

export default RentalCardView;
