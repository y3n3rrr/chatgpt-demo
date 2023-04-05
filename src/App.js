import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import Grid from "./components/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import { MessageInput } from "./components/input/Input";
import {Header} from "./components/header";
import {Chat} from './components/chat'

function App() {
  return (
    <ThemeProvider>
      <Grid>
        <Header />
        <Chat />
        <MessageInput />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
