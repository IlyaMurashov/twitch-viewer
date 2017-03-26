import React from 'react';

import ChannelContainer from './containers/ChannelsContainer';
import {Header} from './components/Header';

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
