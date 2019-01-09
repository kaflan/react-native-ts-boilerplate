import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import Header, { IHeaderProps } from '../components/Header';
import { IFilm } from "../redux/modules/global/types";
import Layout from "../components/LayoutScroll";
import Card from "../components/Card";

interface IFilmListProps {
  filmList: IFilm[]
}

const mapStateToProps = (state: any) => ({ filmList: state.global.filmList});



class Home extends Component<IFilmListProps, IHeaderProps> {
  constructor(props: IFilmListProps) {
    super(props);
    this.state = {
      headerText: 'Star Gate',
    };
  }

  render() {
    const { headerText } = this.state;
    const { filmList } = this.props;
    return (
      <View>
        <Header headerText={headerText.toUpperCase()} />
        <ScrollView>
          <Layout>
            {filmList.map(item => <Card {...item} key={item.id} />)}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Home);
