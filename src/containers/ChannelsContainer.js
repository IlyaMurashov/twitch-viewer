import React from 'react';
import {queryAll} from '../api/twitchApi';
import {NotFoundChannelCard} from '../components/NotFoundChannelCard';
import {ChannelCard} from '../components/ChannelCard';

export default class ChannelsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      trackedChannels: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "too_panda"],
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
    const userLogo = response.user['logo'];
    const status = response.channel['status'];

    const newCard = (
      <ChannelCard
        key={queried}
        name={displayName}
        isStreaming={false}
        link={`https://twitch.tv/${queried}`}
        userLogo={userLogo}
        status={status}/>
    );

    this.setState(prevState => ({
      idleChannels: [...prevState.idleChannels, newCard]
    }));
  }

  addActiveStream(response) {
    const queried = response._queried;
    const displayName = response.user['display_name'];
    const userLogo = response.user['logo'];
    const game = response.stream.stream['game'];
    const status = response.channel['status'];
    const fps = parseInt(response.stream.stream['average_fps']);

    const newCard = (
      <ChannelCard
        key={queried}
        name={displayName}
        isStreaming={true}
        link={`https://twitch.tv/${queried}`}
        userLogo={userLogo}
        game={game}
        status={status}
        fps={fps}/>
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
