export interface StoryItem {
  id: string;
  url: string;
  timestamp: string;
}

export interface UserStories {
  id: number;
  username: string;
  avatar: string;
  stories: StoryItem[];
}
