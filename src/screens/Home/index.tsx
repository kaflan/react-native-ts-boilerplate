import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import { IFilm } from "../../redux/modules/global/types";
import Layout from "../../components/LayoutScroll";
import Card from "../../components/Card";

interface IFilmListProps {
  filmList: IFilm[],
  navigation: NavigationScreenProp<any, any>;
}

const mapStateToProps = (state: any) => ({ filmList: state.global.filmList });



class Home extends Component<IFilmListProps> {

  render() {
    const { filmList } = this.props;
    return (
      <View>
        <ScrollView>
          <Layout>
            {filmList.map(item => (
              <Card
                {...item}
                {...this.props}
                key={`${item.id}-uiid`}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Home);
