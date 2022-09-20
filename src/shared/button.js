import styled from "styled-components";

const Button = styled.button`
  background-color: #000000;
  color: white;
  border-radius: 0px;
  border-color: #FFFFFF;
  border-style: solid none none none;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  height 20%;
  margin: 0px;
  padding: 0px;
`;
const NavButton = ({ onClick, children }) => {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </Button>
  );
};

export default NavButton;
