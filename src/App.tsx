import { observer } from "mobx-react-lite";
import "./App.css";
import { Intro } from "./Components/Intro/Intro";
import { Player } from "./Components/Player/Player";
import player from "./store/player";
import { Outro } from "./Components/Outro/Outro";

const App = observer(() => {
  return (
    <>
      {player.test.status === "ready" && <Intro />}
      {player.test.status === "started" && <Player />}
      {player.test.status === "finished" && <Outro />}
    </>
  );
});

export default App;
