import React from 'react';

export const NotFoundChannelCard = (props) => {
  return (
    <div className="channel-card__not-found">
      <p>{props.name}</p>
    </div>
  );
};

NotFoundChannelCard.propTypes = {
  name: React.PropTypes.string.isRequired
};
