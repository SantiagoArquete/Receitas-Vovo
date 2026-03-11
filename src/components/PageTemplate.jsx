import React from "react";
import PropTypes from "prop-types";
import "../global.css";

const PageTemplate = ({ children, title, header, footer, style }) => {
  return (
    <div className={"page-template"} style={style}>
      {header && <header className="page-header">{header}</header>}
      <div className="page-body">
        {title && <h1 className="page-title">{title}</h1>}
        <div className="page-content">{children}</div>
      </div>
      {footer && <footer className="page-footer">{footer}</footer>}
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

PageTemplate.defaultProps = {
  title: "",
  header: null,
  footer: null,
  className: "",
  style: {},
};

export default PageTemplate;
