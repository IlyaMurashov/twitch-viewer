import React from 'react';

export const ControlBar = (props) => {
  return (
    <div className="control-bar">
      <input
        name="showStreaming"
        type="checkbox"
        checked={props.showStreaming}
        onChange={props.handleControlEvents}/>
      <label>Show streaming channels</label>

      <input
        name="showIdle"
        type="checkbox"
        checked={props.showIdle}
        onChange={props.handleControlEvents}/>
      <label>Show idle channels</label>

      <input
        name="showNotFound"
        type="checkbox"
        checked={props.showNotFound}
        onChange={props.handleControlEvents}/>
      <label>Show not found channels</label>
    </div>
  );
};

ControlBar.propTypes = {
  showStreaming: React.PropTypes.bool.isRequired,
  showIdle: React.PropTypes.bool.isRequired,
  showNotFound: React.PropTypes.bool.isRequired,
  handleControlEvents: React.PropTypes.func.isRequired
};
