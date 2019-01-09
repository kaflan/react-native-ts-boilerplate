import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import Header, { IHeaderProps } from '../components/Header';
import { IFilm } from "../redux/modules/global/types";
import Layout from "../components/LayoutScroll";
import Card from "../components/Card";
import { starGateDetails } from "../navigation/config";

interface IFilmListProps {
  filmList: IFilm[],
  navigation: NavigationScreenProp<any, any>;
}

const mapStateToProps = (state: any) => ({ filmList: state.global.filmList });



class Home extends Component<IFilmListProps, IHeaderProps> {
  constructor(props: IFilmListProps) {
    super(props);
    this.state = {
      headerText: 'Star Gate',
    };
  }

  onPress = (item: any) => {
    const { navigation } = this.props;
    // console.log('onPress', item, navigation);
    navigation.navigate(starGateDetails.STAR_GATE_DETAILS, ({ show: { ...item } }))
  };
  render() {
    const { headerText } = this.state;
    const { filmList } = this.props;
    return (
      <View>
        <Header headerText={headerText} />
        <ScrollView>
          <Layout>
            {filmList.map(item => (
              <Card
                name={item.name}
                image={item.image}
                key={`${item.id}-uiid`}
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
