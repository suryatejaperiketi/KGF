import React, { useState } from 'react';
import thumbnail from '../../assets/Youtubetumb.jpg';
 import '../Styles/Youtube.css';
const VIDEO_ID = '_JEHJ1RKvRs';
 
const YouTube = () => {
  const [playing, setPlaying] = useState(false);
 
  return (
    <section className="youtube-section">
      <div className="youtube-video-wrapper">
        {!playing ? (
          <div className="youtube-thumbnail" onClick={() => setPlaying(true)}>
            <img src={thumbnail} alt="Video Thumbnail" className="thumb-img" />
            <div className="play-btn">
              <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M66.5 7.7c-.8-2.9-3-5.2-5.9-6C55.8 0 34 0 34 0S12.2 0 7.4 1.7C4.5 2.5 2.3 4.8 1.5 7.7 0 12.6 0 24 0 24s0 11.4 1.5 16.3c.8 2.9 3 5.2 5.9 6C12.2 48 34 48 34 48s21.8 0 26.6-1.7c2.9-.8 5.1-3.1 5.9-6C68 35.4 68 24 68 24s0-11.4-1.5-16.3z"
                  fill="#ff0000"
                />
                <path d="M45 24 27 14v20z" fill="#fff" />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            className="youtube-iframe"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=0&loop=1&playlist=${VIDEO_ID}&controls=1&rel=0&modestbranding=1`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
};
 
export default YouTube;
 