import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { whiteTheme } from "./Theme/WhiteTheme";
import Navbar from "./Components/Navbar/Navbar";
import HeaderImage from "./Components/HeaderImage/HeaderImage";
import Home from './Components/Home/Home';  // Import Home component

function App() {
  return (
      <ThemeProvider theme={whiteTheme}>
        <CssBaseline />

        {/* Header Image */}
        <HeaderImage
            imageUrl="https://cdn.pixabay.com/photo/2020/03/25/02/31/rolls-4965915_1280.jpg"
            logoUrl="https://www.senviet.art/wp-content/uploads/2021/12/hocvientaichinh.jpg"
            height="200px"
        />

        {/* Navbar */}

        {/* Home Component */}
        <Home />  {/* Show Home content */}
      </ThemeProvider>
  );
}

export default App;
