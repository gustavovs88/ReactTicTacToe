import styled from "styled-components";
import { colors } from "../../global/colors";

export const Modal = styled.div`

div {
  position: absolute;
}
p {
  position: relative;
  top: -50px;
  right: -210px;
}
p:hover {
  cursor: pointer;
  color: ${colors.red};
}


h1 {
  text-align: center;
  font-size: 34px;
  color: ${colors.lightGreen};
}

h2 {
  text-align: center;
  font-size: 60px;
  color: ${colors.lightGreen};
  margin-bottom: 25px;
}

button {
  border: 2px solid ${colors.darkPurple};
  border-radius: 20px;
  background-color: ${colors.red};
  color: ${colors.darkPurple};
  padding: 7px 20px;
  transition: 0.3s;
}

button:hover {
  background-color: ${colors.lightRed};
  
}

.modal {
  position: absolute;
  top: 30%;
  left: 30%;
  padding: 50px;
  text-align: center;
  width: 500px;
  height: 300px;
  border: 2px solid ${colors.darkPurple};
  border-radius: 20px;
  box-shadow: 5px 5px 12px ${colors.purple}, -2px -2px  5px ${colors.red};
  background-image: linear-gradient(135deg,  ${colors.red},  ${colors.purple},  ${colors.darkPurple});
}

.modalOpen {
  display: block;
  animation: inAnimation 500ms ease-in;
}
.modalClosed {
  display: none;
  animation: outAnimation 510ms ease-in;
}

@keyframes inAnimation {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes outAnimation {
  20% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }

`;
