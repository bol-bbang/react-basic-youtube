import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const search = (query) => {
    if(query === '') return;
    youtube
      .search(query)
      .then(items => {
        setVideos(items);
        setSelectedVideo(null);
      })
      .catch(error => console.log('error', error));
  }
  
  useEffect(() => {
    youtube
      .mostPopular()
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));

  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader search={search} />
      <section className={styles.content}>
      { 
        selectedVideo && 
        (<div className={styles.detail}>
          <VideoDetail video={selectedVideo}/> 
        </div>)
      }
        <div className={styles.list}>
          <VideoList videos={videos} selectVideo={selectVideo} display={selectedVideo? 'grid' : 'list'} />
        </div>
      </section>
    </div>
  );
}

export default App;
