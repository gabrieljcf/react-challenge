import { useState } from "react";
import { Button } from "./components/Button";
import { Dot } from "./components/Dot";

type Coordinates = {
  clientX: number;
  clientY: number;
};

export type MoveList = {
  list: Coordinates[];
  setToAdd: React.Dispatch<React.SetStateAction<Coordinates[]>>;
  setToRemove: React.Dispatch<React.SetStateAction<Coordinates[]>>;
};

function App() {
  const [dotList, setDotList] = useState<Coordinates[]>([]);
  const [undoList, setUndoList] = useState<Coordinates[]>([]);

  function handleClick({ clientX, clientY }: React.MouseEvent) {
    setUndoList([]);

    const newDot = {
      clientX,
      clientY,
    };
    setDotList((prev) => [...prev, newDot]);
  }

  function handleUndo(event: React.MouseEvent) {
    event.stopPropagation();
    moveListItemsToOther({
      list: dotList,
      setToAdd: setUndoList,
      setToRemove: setDotList,
    });
  }

  function handleUndid(event: React.MouseEvent) {
    event.stopPropagation();
    moveListItemsToOther({
      list: undoList,
      setToAdd: setDotList,
      setToRemove: setUndoList,
    });
  }

  function moveListItemsToOther({ list, setToAdd, setToRemove }: MoveList) {
    if (!list.length) return;

    const itensIndex = list.length - 1;
    const itemToAdd = list[itensIndex];
    setToAdd((prev) => [...prev, itemToAdd]);

    const newRemoveItens = list.slice(0, -1);
    setToRemove([...newRemoveItens]);
  }

  return (
    <div className="App" onClick={handleClick}>
      <Button handleClick={handleUndo} type="danger">Desfazer</Button>
      <Button handleClick={handleUndid} type="alert">Refazer</Button>

      {!!dotList.length &&
        dotList.map((item, index) => (
          <Dot
            key={index}
            horiozntalPosition={item.clientY}
            verticalPosition={item.clientX}
          />
        ))}
    </div>
  );
}

export default App;
