import { calculatePoints } from "../../helpers";
import Styled from "./TotalPoints.styled.js";

const TotalPoints = ({ transactions }) => {
  const sumPoints = transactions.reduce((prev, curr) => {
    return calculatePoints(curr.price) + prev;
  }, 0);

  return (
    <Styled.Text>
      Total loyalty points:{" "}
      <Styled.TotalPoints>
        { sumPoints }
      </Styled.TotalPoints>
    </Styled.Text>
  )
}

export default TotalPoints;
