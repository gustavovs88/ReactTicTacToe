import styled from "styled-components";
import { colors } from "../../global/colors";

export const squareStyle = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");
  font-family: "Architects Daughter", cursive;
  background: ${colors.lightGreen};
  border: 2px solid ${colors.purple};
  float: left;
  color: ${(props) => (props.winner ? "green" : "black")};
  font-size: 75px;
  font-weight: bold;
  line-height: 100px;
  height: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
`;
