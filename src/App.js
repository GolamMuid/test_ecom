import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

function App() {
  const theme = {
    color: {
      primary: "#404040",
      secondary: "black",
      bg: "white",
      bgSecondary: "#dad9d9",
      bgTertiary: "#EFF2F9",
      bgQuaternary: "#F5F5F5",
      invertedPrimary: "white",
      invertedBg: "black",
      borderPrimary: "#dddddd",
      rating: " #FFA41C",
    },
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
