import React from "react";
import { View, Text } from "react-native";

class Point {
  neighbor: Array<Point>; // Neighboring points
  isAnswered: boolean; // point state

  constructor(neighbor: Array<Point>, isAnswered: boolean) {
    this.neighbor = neighbor;
    this.isAnswered = isAnswered;
  }
}

const p1: Point = new Point([], false);
const p2: Point = new Point([], false);
const p3: Point = new Point([], false);
const p4: Point = new Point([], false);
const p5: Point = new Point([], false);
const p6: Point = new Point([], false);
const p7: Point = new Point([], false);
const p8: Point = new Point([], false);
const p9: Point = new Point([], false);
const p10: Point = new Point([], false);
const p11: Point = new Point([], false);
const p12: Point = new Point([], false);
const p13: Point = new Point([], false);
const p14: Point = new Point([], false);
const p15: Point = new Point([], false);

p1.neighbor = [p2, p5];
p2.neighbor = [p1, p3, p5];
p3.neighbor = [p2, p5];
p4.neighbor = [p5, p7, p8];
p5.neighbor = [p1, p2, p3, p4, p6, p8];
p6.neighbor = [p5, p8, p9];
p7.neighbor = [p4, p8, p10];
p8.neighbor = [p4, p5, p6, p7, p9, p10, p11, p12];
p9.neighbor = [p6, p8, p12];
p10.neighbor = [p7, p8, p11];
p11.neighbor = [p10, p12, p13, p14, p15];
p12.neighbor = [p8, p9, p11];
p13.neighbor = [p11, p14];
p14.neighbor = [p11, p13, p15];
p15.neighbor = [p11, p14];

const GameScreen = () => {
  return (
    <View>
      <Text>ini game screen</Text>
    </View>
  );
};

export default GameScreen;
