import AiChatBox from "./Screens/AIChatBox";
import HomePage from "./Screens/HomePage";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <main
            style={{
              backgroundColor: "black",
              height: "100%",
              margin: "0px",
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bolt-ai" element={<AiChatBox />} />
            </Routes>
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
