import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video, video : {snippet}, selectVideo, display}) => {

  const displayClass = display === 'list' ? styles.list : styles.grid;

  return (
    <li className={`${styles.container} ${displayClass}`} onClick={()=>selectVideo(video)}>
      <div className={styles.video}>
        <img className={styles.thumnail} src={snippet.thumbnails.high.url} alt="thumbnail" />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  )
}
 
export default VideoItem;