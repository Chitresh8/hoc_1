import withCountHoc from "./WithCountHoc";

const Counter = ({ count, increaseHandlerCount }) => {
  return (
    <>
      <button onClick={increaseHandlerCount}>Clicked {count} times</button>
    </>
  );
};
export default withCountHoc(Counter);
