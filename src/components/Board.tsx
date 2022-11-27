import { View } from "react-native";
import { point } from "../model/Point";
import Point from "../components/Point";

interface BoardProps {
  points: point[];
}

const Board = ({ points }: BoardProps) => {
  return (
    <View>
      <Point />
    </View>
  );
};

export default Board;
