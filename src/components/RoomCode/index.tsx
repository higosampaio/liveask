import copyImg from "../../assets/images/copy.svg";

import { Container } from "./styles";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #-Mg0kbJGTR9AbAXUyW1p</span>
    </Container>
  );
}
