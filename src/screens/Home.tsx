import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import { IFilm } from "../redux/modules/global/types";
import Layout from "../components/LayoutScroll";
import Card from "../components/Card";
import { starGateDetailsNavTypes } from "../navigation/config";

interface IFilmListProps {
  filmList: IFilm[],
  navigation: NavigationScreenProp<any, any>;
}

const mapStateToProps = (state: any) => ({ filmList: state.global.filmList });



class Home extends Component<IFilmListProps> {

  onPress = (item: IFilm) => {
    const { navigation } = this.props;
    navigation.navigate(starGateDetailsNavTypes.STAR_GATE_DETAILS, ({ ...item }))
  };
  render() {
    const { filmList } = this.props;
    return (
      <View>
        <ScrollView>
          <Layout>
            {filmList.map(item => (
              <Card
                name={item.name}
                image={item.image}
                key={`${item.id}-uiid`}
                // tslint:disable-next-line jsx-no-lambda
                onPress={() => this.onPress(item)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Home);
