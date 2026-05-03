import { useEffect, useState } from "react";
import { type UserStories } from "../types/stories";
import { fetchStories } from "../services/api";
import { useStory } from "../context/StoryContext";
import styles from "./StoryTray.module.css";

export default function StoryTray() {
  const [stories, setStories] = useState<UserStories[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { openStory } = useStory();

  useEffect(() => {
    const loadStories = async () => {
      const data = await fetchStories();
      setStories(data);
      setLoading(false);
    };
    loadStories();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading stories...</div>;
  }

  return (
    <div className={styles.tray}>
      {stories.map((user) => (
        <div
          key={user.id}
          className={styles.storyItem}
          onClick={() => openStory(user.id)}
        >
          <div className={styles.avatarRing}>
            <img
              src={user.avatar}
              alt={user.username}
              className={styles.avatar}
              loading="lazy"
            />
          </div>
          <span className={styles.username}>{user.username}</span>
        </div>
      ))}
    </div>
  );
}
