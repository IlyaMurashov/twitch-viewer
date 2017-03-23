import React from 'react';
import {Header} from './components/Header';
import ChannelContainer from './containers/ChannelsContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ChannelContainer/>
      </div>
    );
  }
}
