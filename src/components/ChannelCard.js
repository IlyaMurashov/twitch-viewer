import React from 'react';

import {UserLogo} from './UserLogo';
import {ActivityTag} from './ActivityTag';

export const ChannelCard = (props) => {
  return (
    <div className="channel-card">
      <div className="user-logo-and-activity">
        <UserLogo userLogo={props.userLogo}/>
        <ActivityTag isActive={props.isStreaming}/>
      </div>
      <div className="channel-card--info-wrapper">
        <p className="channel-card--user-name">{props.name}</p>
        {props.status &&
        <p className="channel-card--status">{props.status}</p>
        }
        {props.isStreaming &&
        <p className="channel-card--streaming">Streaming <i>{props.game} @{props.fps}fps</i></p>
        }
      </div>
    </div>
  )
    ;
};

ChannelCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  isStreaming: React.PropTypes.bool.isRequired,
  userLogo: React.PropTypes.string,
  game: React.PropTypes.string,
  status: React.PropTypes.string,
  fps: React.PropTypes.number
};
