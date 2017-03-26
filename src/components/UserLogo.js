import React from 'react';

export const UserLogo = (props) => {
  return (
    <img
      className="user-logo-and-activity--user-logo"
      src={props.userLogo !== null ? props.userLogo : require('../resources/images/404_user_150x150.png')}/>
  );
};

UserLogo.propTypes = {
  userLogo: React.PropTypes.string
};
