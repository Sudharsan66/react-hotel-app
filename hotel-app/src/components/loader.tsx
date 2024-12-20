import React from 'react';

interface LoaderProps {
  size?: string; 
  color?: string;
}

class Loader extends React.Component<LoaderProps> {
  static defaultProps = {
    size: 'h-8 w-8', 
    color: 'border-blue-500',
  };

  render() {
    const { size, color } = this.props;

    return (
      <div className="flex justify-center items-center mt-10">
        <div className={`animate-spin rounded-full ${size} border-t-2 border-b-2 ${color}`}></div>
      </div>
    );
  }
}

export default Loader;
