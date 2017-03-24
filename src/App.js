import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Header} from './components/Header';
import ChannelContainer from './containers/ChannelsContainer';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          <ChannelContainer/>
        </div>
      </MuiThemeProvider>
    );
  }
}
