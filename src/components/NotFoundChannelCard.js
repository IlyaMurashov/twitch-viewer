import React from 'react';

export const NotFoundChannelCard = (props) => {
  return (
    <div className="channel-card__not-found">
      <p className="channel-card--message__not-found"><strong>{props.name}</strong> was not found</p>
    </div>
  );
};

NotFoundChannelCard.propTypes = {
  name: React.PropTypes.string.isRequired,
};
