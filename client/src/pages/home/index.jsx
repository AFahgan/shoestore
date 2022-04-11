import React, { Component } from 'react';
import Ad from '../../components/Ad/Ad';
import TopFilter from './Top/TopFilter';
import HomeLanding from '../../components/Home/home';

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <HomeLanding />

        <TopFilter />
        <Ad />
      </div>
    );
  }
}
