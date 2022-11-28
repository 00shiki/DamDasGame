import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../assets/Style";
import Board from "../components/Board";
import Pawn from "../components/Pawn";
import { pawn } from "../model/Pawn";
import { point } from "../model/Point";

const p1: point = new point([], false, true);
const p2: point = new point([], false, true);
const p3: point = new point([], false, true);
const p4: point = new point([], false, false);
const p5: point = new point([], false, false);
const p6: point = new point([], false, false);
const p7: point = new point([], false, false);
const p8: point = new point([], false, false);
const p9: point = new point([], false, false);
const p10: point = new point([], false, false);
const p11: point = new point([], false, false);
const p12: point = new point([], false, false);
const p13: point = new point([], false, true);
const p14: point = new point([], false, true);
const p15: point = new point([], false, true);

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

const points = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];

const player1: pawn = new pawn(1, true);
const player2: pawn = new pawn(2, true);
const player3: pawn = new pawn(3, true);
const bot1: pawn = new pawn(13, false);
const bot2: pawn = new pawn(14, false);
const bot3: pawn = new pawn(15, false);

const player = [player1, player2, player3];
const bot = [bot1, bot2, bot3];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}


const botMove = () => {
  var moved = bot[getRandomInt(3)];
  const start = moved.position;
  var moveInto = points[start].neighbor[0];
  while (moveInto.isOccupied) {
    const n = (points[start].neighbor).length;
    moveInto = points[start].neighbor[getRandomInt(n)];
  }
  points[start - 1].isOccupied = false;
  moveInto.isOccupied = true;
  // Assign position baru
}

const pawnClick = () => {
  //Ambil posisi pawn yang diklik
}

const pointClick = () => {
  // Kalo belom kejawab, buka soal
  // Kalo udah kejawab, assign pos ke point yang diclick
}

const place = [
  styles.p1,
  styles.p2
]

const GameScreen = () => {
  return (
    <View style={{ flex: 10 }}>
      <Text style={[styles.PlayerWindow, {flex:1}]}>Ini player</Text>
      <View style={styles.Board}>
        <Board points={[]} />
        <View style={place[0]}>
          <Pawn />
        </View>
        <View style={styles.p2}>
          <Pawn />
        </View>
      </View>
      <Text style={[styles.PlayerWindow, {flex:1}]}>Ini bot</Text>
    </View>
  );
};

export default GameScreen;
