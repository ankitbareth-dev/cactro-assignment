import StoryTray from "./components/StoryTray";

function App() {
  return (
    <div className="app-container">
      <header
        style={{
          padding: "15px",
          borderBottom: "1px solid #dbdbdb",
          fontWeight: "600",
        }}
      >
        Instagram
      </header>
      <StoryTray />
      <div style={{ padding: "20px", textAlign: "center", color: "#8e8e8e" }}>
        Feed content goes here...
      </div>
    </div>
  );
}

export default App;
