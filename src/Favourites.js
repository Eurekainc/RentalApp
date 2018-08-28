import React from 'react';
import { StyleSheet, AsyncStorage, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RowCardItem from './RowCardItem';
import RENTAL_OFFERS from '../assets/RENTAL_PLACES_DATA.json';

class Favourites extends React.Component {
  static navigationOptions = {
    title: 'Favourites'
  };

  state = {
    likedOffers: []
  };

  async componentDidMount() {
    await this.getLikedOffers();
    this.props.navigation.addListener('didFocus', this.getLikedOffers);
  }

  getLikedOffers = async () => {
    const likedOffers = await AsyncStorage.getItem('likedOffers');

    if (likedOffers) {
      this.setState(JSON.parse(likedOffers));
    }
  };

  removeItem = async offerId => {
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

  render() {
    const { likedOffers } = this.state;

    const favouritesOffers = RENTAL_OFFERS.filter(offer =>
      likedOffers.includes(offer.id)
    );

    return (
      <FlatList
        style={styles.mainContainer}
        data={favouritesOffers}
        renderItem={({ item: offer }) => (
          <RowCardItem offer={offer} removeItem={this.removeItem} />
        )}
        keyExtractor={offer => offer.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
});

export default createStackNavigator({
  Favourites: {
    screen: Favourites,
    headerMode: 'screen'
  }
});
