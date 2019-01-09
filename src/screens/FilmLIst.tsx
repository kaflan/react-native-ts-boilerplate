import React, { Component } from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import Header, { IHeaderProps } from '../components/Header';
import {IFilm} from "../redux/modules/global/types";

interface IFilmListProps {
  filmList: IFilm[]
}

const mapStateToProps = (state: any) => ({ filmList: state.global.filmList})



class FilmLIst extends Component<IFilmListProps, IHeaderProps> {
  constructor(props: IFilmListProps, context?: any) {
    super(props, context);
    this.state = {
      headerText: 'Star Gate',
    };
  }

  render() {
    const { headerText } = this.state;
    return (
      <View>
        <Header headerText={headerText} />
      </View>
    );
  }
}
export default connect(mapStateToProps)(FilmLIst);
// export default FilmLIst
