import React from 'react';

export const ControlBar = (props) => {
  return (
    <div className="control-bar">
      <div className="control-bar--checkbox">
        <input
          name="showStreaming"
          type="checkbox"
          checked={props.showStreaming}
          onChange={props.handleControlEvents}/>
        <label>Show streaming channels</label>
      </div>

      <div className="control-bar--checkbox">
        <input
          name="showIdle"
          type="checkbox"
          className="control-bar--checkbox"
          checked={props.showIdle}
          onChange={props.handleControlEvents}/>
        <label>Show idle channels</label>
      </div>

      <div className="control-bar--checkbox">
        <input
          name="showNotFound"
          type="checkbox"
          className="control-bar--checkbox"
          checked={props.showNotFound}
          onChange={props.handleControlEvents}/>
        <label>Show not found channels</label>
      </div>
    </div>
  );
};

ControlBar.propTypes = {
  showStreaming: React.PropTypes.bool.isRequired,
  showIdle: React.PropTypes.bool.isRequired,
  showNotFound: React.PropTypes.bool.isRequired,
  handleControlEvents: React.PropTypes.func.isRequired,
};
