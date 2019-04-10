import React from 'react';
import { connect } from "react-redux";

const Display = (props) => {
  const { locked, closed } = props;
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;
  console.log(props);
  return (
    <div className="display panel">
      <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
      <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

// Display.defaultProps = {
//   closed: false,
//   locked: false,
// };

const mapStateToProps = ({ locked, closed }) => ({
  locked, closed
})

export default connect(mapStateToProps, {})(Display);
