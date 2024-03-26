import React from 'react';
import PropTypes from 'prop-types';

const Fullpage_video = ({ videoSrc, children }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <video autoPlay loop muted className="min-w-full min-h-full object-cover">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      <div className="absolute z-20 text-white">{children}</div>
    </div>
  );
};

Fullpage_video.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Fullpage_video;
