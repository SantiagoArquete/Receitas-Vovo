import React from 'react';
import PropTypes from 'prop-types';
import '../global.css'; 

const Box = ({ title, children, className, style }) => {
  return (
    <div className={`box-container ${className}`} style={style}>
      {title && <div className="box-title">{title}</div>}
      <div className="box-content">
        {children}
      </div>
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Box.defaultProps = {
  title: '',
  className: '',
  style: {},
};

export default Box;
