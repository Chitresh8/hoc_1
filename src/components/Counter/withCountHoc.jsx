import { useState } from "react";

const withCountHoc = (WrapperComponent) => {
  const withCount = () => {
    const [count, setCount] = useState(0);
    // const [onMouse, setOnMouse] = useState(0);

    // const increaseOnMouseCount = () => {
    //   setOnMouse(onMouse + 1);
    // };
    const increaseHandlerCount = () => {
      setCount(count + 1);
    };
    return (
      <WrapperComponent
        count={count}
        increaseHandlerCount={increaseHandlerCount}
        // onMouse={onMouse}
        // increaseOnMouseCount={increaseOnMouseCount}
      />
    );
  };
  return withCount;
};
export default withCountHoc;
