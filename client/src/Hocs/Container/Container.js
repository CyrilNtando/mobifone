import React from 'react';
import './container.scss';
export default function Container(props) {
  const container = props.container || 'container';
  return <div className={container}>{props.children}</div>;
}
