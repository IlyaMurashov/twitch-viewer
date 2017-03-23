import React from 'react';
import {queryAll, queryStream, queryUser} from '../api/twitchApi';
import {NotFoundChannelCard} from '../components/NotFoundChannelCard';
import {IdleChannelCard} from '../components/IdleChannelCard';
import {StreamingChannelCard} from '../components/StreamingChannelCard';

export default class ChannelsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    queryAll('brunofin').then((data) => {console.log(data);});

    this.state = {
      trackedChannels: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"],
      notFoundChannels: [],
      idleChannels: [],
      streamingChannels: []
    };
  }

  addNotFoundUser(user) {
    const newCard = <NotFoundChannelCard name={user} key={user}/>;

    this.setState(prevState => ({
      notFoundChannels: [...prevState.notFoundChannels, newCard]
    }));
  }

  addIdleStream(stream) {
    const newCard = <IdleChannelCard
      name={stream['stream']['channel']['display_name']}
      link=""
      key={stream['stream']['channel']['display_name']}
    />;

    this.setState(prevState => ({
      idleChannels: [...prevState.idleChannels, newCard]
    }));
  }

  addActiveStream(stream) {
    const newCard = <StreamingChannelCard
      name={stream['stream']['channel']['display_name']}
      link=""
      key={stream['stream']['channel']['display_name']}
    />;

    this.setState(prevState => ({
      streamingChannels: [...prevState.streamingChannels, newCard]
    }));
  }

  // TODO: move it to constructor()
  componentWillMount() {
    const userMap = {};
    const notFoundUsers = [];
    const idleStreams = [];
    const activeStreams = [];
    this.state.trackedChannels.forEach((ch) => {
      userMap[ch] = [queryUser(ch), queryStream(ch)];
    });

    for (let user in userMap) {
      userMap[user][0]
        .then((userData) => {
          if (userData.error) {
            notFoundUsers.push(user);
            this.addNotFoundUser(user);
            console.log("Not found: " + user);
            return Promise.reject();
          }
          else {
            return userMap[user][1];
          }
        })
        .then(
          (streamData) => {
            if (streamData.stream === null) {
              idleStreams.push(streamData);
              this.addIdleStream(streamData);
              console.log("Idle: " + user);
            }
            else {
              activeStreams.push(streamData);
              this.addActiveStream(streamData);
              console.log("Streaming: " + user);
            }
          },
          () => {
            /* do nothing, just silence onReject */
          });
    }

    notFoundUsers.sort((u1, u2) => u1.toLowerCase().localeCompare(u2.toLowerCase()));
    idleStreams.sort((s1, s2) =>
      s1['channel']['display_name'].toLowerCase().localeCompare(s2['channel']['display_name']));
    activeStreams.sort((s1, s2) =>
      s1['channel']['display_name'].toLowerCase().localeCompare(s2['channel']['display_name']));

    const notFoundUserCards = notFoundUsers.map(u => (
      <NotFoundChannelCard
        name={u}
        key={u}
      />
    ));

    const idleCards = idleStreams.map(s => (
      <IdleChannelCard
        name={s['channel']['display_name']}
        link=""
        key={s['channel']['display_name']}
      />
    ));

    const streamingCards = activeStreams.map(s => (
      <StreamingChannelCard
        name={s['channel']['display_name']}
        link=""
        key={s['channel']['display_name']}
      />
    ));

    this.setState({
      notFoundChannels: notFoundUserCards,
      idleChannels: idleCards,
      streamingChannels: streamingCards
    });
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
