import { createContext, useContext, useState, type ReactNode } from "react";

interface StoryContextType {
  isOpen: boolean;
  currentUserIndex: number | null;
  currentStoryIndex: number;
  openStory: (userId: number) => void;
  closeStory: () => void;
}

const StoryContext = createContext<StoryContextType | undefined>(undefined);

export const StoryProvider = ({ children }: { children: ReactNode }) => {
  const [currentUserIndex, setCurrentUserIndex] = useState<number | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const isOpen = currentUserIndex !== null;

  const openStory = (userId: number) => {
    setCurrentUserIndex(userId);
    setCurrentStoryIndex(0);
  };

  const closeStory = () => {
    setCurrentUserIndex(null);
    setCurrentStoryIndex(0);
  };

  return (
    <StoryContext.Provider
      value={{
        isOpen,
        currentUserIndex,
        currentStoryIndex,
        openStory,
        closeStory,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error("useStory must be used within a StoryProvider");
  }
  return context;
};
