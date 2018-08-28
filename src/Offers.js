import React from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import RentalCardView from './RentalCardView';
import RENTAL_OFFERS from '../assets/RENTAL_PLACES_DATA.json';

class Offers extends React.Component {
  state = {
    likedOffers: []
  };

  async componentDidMount() {
    await this.getLikedOffers();
    this.props.navigation.addListener('didFocus', this.getLikedOffers);
  }

  toggleLikeOffer = async offerId => {
    const { likedOffers } = this.state;

    if (likedOffers.indexOf(offerId) !== -1) {
      const newLikedOffers = likedOffers.filter(id => offerId !== id);

      await AsyncStorage.setItem(
        'likedOffers',
        JSON.stringify({
          likedOffers: newLikedOffers
        }),
        () =>
          this.setState({
            likedOffers: newLikedOffers
          })
      );
    } else {
      const newLikedOffers = [...likedOffers, offerId];
      await AsyncStorage.setItem(
        'likedOffers',
        JSON.stringify({ likedOffers: newLikedOffers }),
        () =>
          this.setState({
            likedOffers: newLikedOffers
          })
      );
    }
  };

  getLikedOffers = async () => {
    const likedOffers = await AsyncStorage.getItem('likedOffers');
    if (likedOffers) {
      this.setState(JSON.parse(likedOffers));
    }
  };

  render() {
    const { navigation } = this.props;
    const { likedOffers } = this.state;

    return (
      <FlatList
        style={styles.mainContainer}
        data={RENTAL_OFFERS}
        extraData={likedOffers}
        renderItem={({ item: offer }) => (
          <RentalCardView
            offer={offer}
            navigation={navigation}
            toggleLikeOffer={this.toggleLikeOffer}
            isLiked={likedOffers.indexOf(offer.id) !== -1}
          />
        )}
        keyExtractor={offer => offer.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default Offers;
