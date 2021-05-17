import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const search = (query) => {

    if(query === '') return;

    youtube
      .search(query)
      .then(items => setVideos(items))
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
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
