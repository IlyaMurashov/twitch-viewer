import React from 'react';

export const ActivityTag = (props) => {
  return (
    <div className={props.isActive ? 'activity-tag__active' : 'activity-tag__inactive'}>
      {props.isActive ? 'Streaming' : 'Offline'}
    </div>
  );
};

ActivityTag.propTypes = {
  isActive: React.PropTypes.bool.isRequired
};
