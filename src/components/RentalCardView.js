import React from 'react';

import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

class RentalCardView extends React.PureComponent {
  render() {
    const { offer } = this.props;

    const imageWidth = Dimensions.get('window').height * 0.7;

    const description = `${offer.type} for rent, ${offer.size} square meters`;

    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <ImageBackground
            style={[styles.cardView, { height: imageWidth }]}
            source={{
              uri: offer.image,
            }}
          >
            <View style={styles.descriptionContainer}>
              <View>
                <Text style={styles.priceTag}>{offer.price}</Text>
                <Text style={styles.offerDescription}>{description}</Text>
                <Text style={styles.offerDescription}>{offer.location}</Text>
              </View>

              <View>
                <Text style={styles.offerRating}>★{offer.rating}</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  cardView: {
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceTag: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800',
  },
  offerRating: {
    fontSize: 20,
    color: 'gold',
  },
  offerDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: '#eee',
  },
});

export default RentalCardView;
