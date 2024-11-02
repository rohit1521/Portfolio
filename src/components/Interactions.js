import React, { useState } from "react";
import styles from "./Interactions.module.css";

// Array of video URLs
const videoUrl1 = [
  "https://cdn.dribbble.com/users/3493513/screenshots/15150728/media/6b6cce2e5754c60d7eed138601bfbdf1.mp4",
  "https://cdn.dribbble.com/users/3493513/screenshots/15152193/media/a24968e830140a77a6a9f665e0cfa939.mp4",
  "https://cdn.dribbble.com/users/3493513/screenshots/15124243/media/8f228e01c98940f91b027f7bcd2b392f.mp4",
  "https://cdn.dribbble.com/users/3493513/screenshots/15124313/media/8332bc041b7e26ba1cb44516cbb4abed.mp4",
  "https://cdn.dribbble.com/users/3493513/screenshots/16404477/media/57562487606a54ac625a735b7827ec22.mp4",
];

const videoUrl2 = [
  "https://cdn.dribbble.com/users/3493513/screenshots/15835612/media/64e5c459fa8b5d1159042c0a300179ea.mp4",
  "https://cdn.dribbble.com/users/3493513/screenshots/15824300/media/bfa6b9cf00ac3a10f286f5cd8ffa135b.mp4",
  "https://cdn.dribbble.com/users/3493513/screenshots/15816466/media/f99ca4de039cec47fb870a8905f7007b.mp4",
  "https://cdn.dribbble.com/users/3493513/screenshots/15807464/media/50ddae443a0a9f2959b9e5e07568e34e.mp4",
  "https://cdn.dribbble.com/users/3493513/screenshots/15809821/media/74f156af63d0e86c9cba22742803db42.mp4",
];

const AutoScrollingCards = () => {
  return (
    <div className={styles.container}>
      {/* Row 1: Scrolling left to right */}
      <div className={styles.cardWrapper}>
        {videoUrl1.concat(videoUrl1).map((videoUrl, index) => (
          <VideoCard key={`row1-${index}`} videoUrl={videoUrl} />
        ))}
      </div>
      {/* Row 2: Scrolling right to left */}
      <div className={`${styles.cardWrapper} ${styles.reverse}`}>
        {videoUrl2.concat(videoUrl2).map((videoUrl, index) => (
          <VideoCard key={`row2-${index}`} videoUrl={videoUrl} />
        ))}
      </div>
    </div>
  );
};

// VideoCard Component with Lazy Loading and Shimmer Effect
const VideoCard = ({ videoUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.card}>
      {isLoading && <div className={styles.shimmer}></div>}
      <video
        className={styles.video}
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleLoadedData} // Hide shimmer when video is loaded
      />
    </div>
  );
};

export default AutoScrollingCards;
