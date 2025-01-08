import withCountHoc from "./WithCountHoc";

const Heading = ({ /*onMouse, increaseOnMouseCount*/  count, increaseHandlerCount }) => {
  return <h3 onMouseOver={increaseHandlerCount}>{count}</h3>;
  //   return <h3 onMouseOver={increaseOnMouseCount}>{onMouse}</h3>;\
};
export default withCountHoc(Heading);




// ============================

