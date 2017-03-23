import React from 'react';

const style = {color: 'yellow'};

export const IdleChannelCard = (props) => {
  return (
    <div className="idle-channel-card" style={style}>
      <p>{props.name}</p>
      <p>{props.link}</p>
    </div>
  );
};

IdleChannelCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
};
