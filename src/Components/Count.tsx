// -> Observer:- it is an HOC. we use observer in react component. it will help to render the component or update the UI if state changes.

import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";

export const Count = observer(() => {
  const {
    RootStore: { countStore },
  } = useStore();

  const onIncrement = () => {
    countStore.increment();
  };
  const onDecrement = () => {
    countStore.decrement();
  };

  return (
    <>
      <div>Count: {countStore.getCountValue}</div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </>
  );
});
