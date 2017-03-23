import React from 'react';

const style = {color: 'green'};

export const StreamingChannelCard = (props) => {
  return (
    <div className="streaming-channel-card" style={style}>
      <p>{props.name}</p>
      <p>{props.link}</p>
    </div>
  );
};

StreamingChannelCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
};
