import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import RentalCardView from '../components/RentalCardView';

import RENTAL_OFFERS from '../../assets/RENTAL_PLACES_DATA.json';

class OffersListScene extends React.Component {
  static navigationOptions = {
    title: 'Offers',
  };

  render() {
    return (
      <FlatList
        style={styles.mainContainer}
        data={RENTAL_OFFERS}
        renderItem={({ item: offer }) => <RentalCardView offer={offer} />}
        keyExtractor={offer => offer.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default OffersListScene;
