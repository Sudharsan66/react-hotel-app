import React from 'react';

interface LoaderProps {
  size?: string; 
  color?: string;
}

class Loader extends React.Component<LoaderProps> {

  render() {
    return (
      <div className="flex justify-center items-center mt-10">
      <div className="loader items-center">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
    );
  }
}

export default Loader;
