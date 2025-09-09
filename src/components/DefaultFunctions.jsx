import React from 'react';
import PropTypes from 'prop-types';
import '../global.css'; 
// Componente Box
export const Box = ({ title, children, className, style }) => {
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
// Componente Box

export const BoxInto = ({ title, children, className, style }) => {
  return (
    <div className={`boxInto-container ${className}`} style={style}>
      {title && <div className="boxInto-title">{title}</div>}
      <div className="boxInto-content">
        {children}
      </div>
    </div>
  );
};

BoxInto.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

BoxInto.defaultProps = {
  title: '',
  className: '',
  style: {},
};

// Componente PageTemplate
export const PageTemplate = ({ children, title, header, footer, className, style }) => {
  return (
    <div className={`page-template ${className}`} style={style}>
      {header && <header className="page-header">{header}</header>}
      <div className="page-body"> 
        {title && <h1 className="page-title">{title}</h1>}
        <div className="page-content">
          {children}
        </div>
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
  title: '',
  header: null,
  footer: null,
  className: '',
  style: {},
};

// Outras funções utilitárias
export const formatText = (text) => text.toUpperCase();

export const getCurrentDate = () => new Date().toLocaleDateString();
