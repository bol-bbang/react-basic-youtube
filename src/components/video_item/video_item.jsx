import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video : {snippet}}) => {

  return (
    <div className={styles.container}>
      <li className={styles.video}>
        <img className={styles.thumnail} src={snippet.thumbnails.standard.url} />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </li>
    </div>
  )
}
 
export default VideoItem;