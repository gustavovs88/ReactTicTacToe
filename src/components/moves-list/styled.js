import styled from "styled-components";
import { colors } from "../../global/colors";

export const Wrapper = styled.div`
  display: block;
  font-size: 18px;
  margin-left: 20px;
  text-align: center;
  height: 400px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
  }

  .invert-button {
    background-color: ${colors.red};
    border-radius: 10px;
    color: ${colors.lightGreen};
    margin-bottom: 15px;
    padding: 10px;
  }
  .invert-button:hover {
    opacity: 0.8;
    transition: opacity 0.5s;
  }

  li {
    background-color: ${colors.purple};
    border: 1px solid ${colors.semiDarkPurple};
    border-radius: 10px;
    margin-bottom: 10px;
    opacity: 1;
    padding: 10px;
    text-align: center;
    transition: 0.5s ease;
    page-break-inside: avoid;
  }

  li:hover {
    opacity: 0.8;
    transition: opacity 0.5s;
  }

  li button {
    color: ${colors.red};
    margin-bottom: 0px;
  }

  button span {
    font-weight: bold;
    color: ${colors.lightGreen};
    background-color: ${colors.purple};
  }
  ul {
    max-height: 400px;
    -moz-column-count: 2;
    -moz-column-gap: 30px;
    -webkit-column-count: 2;
    -webkit-column-gap: 30px;
    column-count: 2;
    column-gap: 30px;
    -webkit-column-rule: 1px single grey; /* Chrome/Opera, Safari */
    -moz-column-rule: 1px single grey; /* Mozilla Firefox */
    column-rule: 1px single grey;
  }

  .olDescending,
  .liDescending {
    transform: rotate(-180deg);
  }

  .liDescending:last-of-type {
    margin-bottom: 0;
  }
`;
