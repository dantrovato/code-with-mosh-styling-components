import { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Dave" } });
  };
  return (
    <div>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
