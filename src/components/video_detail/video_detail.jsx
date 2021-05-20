import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video : {snippet}}) => {

  return (
    <section className={styles.detail}>
      <iframe 
        className={styles.player} 
        type="text/html"
        title="youtube video player"
        width="100%" 
        height="500px"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.chennelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
}

export default VideoDetail;