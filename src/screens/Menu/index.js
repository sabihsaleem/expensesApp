import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';

class Menu extends Component {
  myCards = () => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.containerTextHeader}>My Cards</Text>
          <TouchableOpacity style={styles.containerIcon}>
            <View style={styles.iconTextView}>
              <Text style={styles.iconText}>OS</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsView} >
          {this.cards()}
        </View>

      </View>
    );
  };

  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
  }

  cards = () => {
    const cards = [
      {
        title: 'Hello'
      },
      {
        title: 'World'
      }
    ];
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={cards}
        renderItem={this._renderItem}
        sliderWidth={wp('100%')}
        itemWidth={wp('50%')}
        slideStyle={styles.slideStyle}
      />
    );
  };

  render() {
    return (
      <View style={styles.main}>
        {this.myCards()}
      </View>
    )
  }
}

export default Menu;
