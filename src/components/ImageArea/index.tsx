import scarecrow from "../../helpers/scarecrow.svg";
import { Container } from "./style";

export default function ImageArea() {
  return (
    <Container>
      <img src={scarecrow} alt="" />
    </Container>
  );
}
