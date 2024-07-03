import React, { useState } from 'react';
import './collapse.scss';
import arrow from './assets/arrow-collapse.png'

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className='collapse-element'>
        <p>{title}</p>
        <img src={arrow} alt="arrow" className={`collapse-toggle ${isCollapsed ? 'open' : ''}`} onClick={toggleCollapse} />
      </div>
      {
        Array.isArray(content) ? <ul className={`collapse-content ${isCollapsed ? 'open' : ''}`}>{content.map((item, i) => (<li key={i}>{item}</li>))}</ul>:
        <div className={`collapse-content ${isCollapsed ? 'open' : ''}`}>{content}</div>
      }
    </div>
  );
};

export default Collapse;
