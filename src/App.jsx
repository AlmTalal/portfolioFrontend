import HomePage from "./Screens/HomePage";
import { ColorModeContext, tokens, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.pallete.mode);
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main
            style={{
              backgroundColor: colors.primary[500],
              height: "100%",
              margin: "0px",
            }}
          >
            <HomePage />
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
