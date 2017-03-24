import React from 'react';

export const StreamingChannelCard = (props) => {
  return (
    <div className="channel-card__streaming">
      <p>{props.name}</p>
      <p>{props.link}</p>
    </div>
  );
};

StreamingChannelCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
};
