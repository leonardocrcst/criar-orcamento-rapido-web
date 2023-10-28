import '@fontsource/fira-sans/300.css'
import './App.css'
import {Scaffold} from "./components/Scaffold.tsx";
import {ThemeProvider} from "@mui/material";
import {Default} from "./themes/Default.tsx";

function App() {
  return (
    <ThemeProvider theme={Default}>
      <Scaffold/>
    </ThemeProvider>
  )
}

export default App
