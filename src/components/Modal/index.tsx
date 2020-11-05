import React from 'react';
import Card from '../Card';
import './index.scss';

interface ComponentProps extends React.HtmlHTMLAttributes<unknown> { }

const Modal: React.FC<ComponentProps> = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-modal" onClick={props.onClick}>close</span>
        <Card>
          {props.children}
        </Card>
      </div>
    </div>
  );
}

export default Modal;