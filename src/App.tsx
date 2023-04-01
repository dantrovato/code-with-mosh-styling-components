import Like from "./components/Like/Like";
import { useState } from "react";
import { produce } from "immer";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClicked = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  const printBugs = () => {
    console.log(bugs);
  };

  return (
    <div>
      <Like
        onClick={() => {
          handleClicked();
          printBugs();
        }}
      />
    </div>
  );
};

export default App;
