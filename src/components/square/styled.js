import styled from "styled-components";

export const squareStyle = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  color: ${(props) => (props.winner ? "blue" : "red")};
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
