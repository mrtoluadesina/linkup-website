import React from 'react';
import './index.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<unknown> {
  text: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, loading } = props;
  return (
    <button {...props} className="default">
      {loading ? (
        <img src="/assets/images/loadingwhite.svg" alt="Loading..." />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
