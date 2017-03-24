import React from 'react';
import {queryAll} from '../api/twitchApi';
import {NotFoundChannelCard} from '../components/NotFoundChannelCard';
import {IdleChannelCard} from '../components/IdleChannelCard';
import {StreamingChannelCard} from '../components/StreamingChannelCard';

export default class ChannelsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      trackedChannels: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"],
      notFoundChannels: [],
      idleChannels: [],
      streamingChannels: []
    };
  }

  // TODO: move it to constructor()
  componentWillMount() {
    this.state.trackedChannels.forEach((ch) => {
      queryAll(ch).then((response) => {
        if (response.user.error) {
          this.addNotFoundUser(response);
        }
        else if (response.stream.stream === null) {
          this.addIdleStream(response);
        }
        else {
          this.addActiveStream(response);
        }
      });
    });
  }
  addNotFoundUser(response) {
    const queried = response._queried;

    const newCard = <NotFoundChannelCard name={queried} key={queried}/>;

    this.setState(prevState => ({
      notFoundChannels: [...prevState.notFoundChannels, newCard]
    }));
  }

  addIdleStream(response) {
    const queried = response._queried;
    const displayName = response.user['display_name'];

    const newCard = (
      <IdleChannelCard
        name={displayName}
        link={`https://twitch.tv/${queried}`}
        key={queried}/>
    );

    this.setState(prevState => ({
      idleChannels: [...prevState.idleChannels, newCard]
    }));
  }

  addActiveStream(response) {
    const queried = response._queried;
    const displayName = response.user['display_name'];

    const newCard = (
      <StreamingChannelCard
        name={displayName}
        link={`https://twitch.tv/${queried}`}
        key={queried}/>
    );

    this.setState(prevState => ({
      streamingChannels: [...prevState.streamingChannels, newCard]
    }));
  }

  render() {
    return (
      <div className="channels-container">
        {this.state.streamingChannels}
        {this.state.idleChannels}
        {this.state.notFoundChannels}
      </div>
    );
  }
}

ChannelsContainer.propTypes = {};
