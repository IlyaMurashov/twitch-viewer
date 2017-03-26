import React from 'react';

export const ActivityTag = (props) => {
  return (
    <div className={props.isActive ? 'user-logo-and-activity--activity-tag__active' : 'user-logo-and-activity--activity-tag__inactive'}>
      {props.isActive ? 'Streaming' : 'Offline'}
    </div>
  );
};

ActivityTag.propTypes = {
  isActive: React.PropTypes.bool.isRequired
};
