import React from 'react';

export const IdleChannelCard = (props) => {
  return (
    <div className="channel-card__idle">
      <p>{props.name}</p>
      <p>{props.link}</p>
    </div>
  );
};

IdleChannelCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
};
