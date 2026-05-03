import { type UserStories } from "../types/stories";

export const fetchStories = async (): Promise<UserStories[]> => {
  try {
    const response = await fetch("/stories.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: UserStories[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch stories:", error);
    return [];
  }
};
