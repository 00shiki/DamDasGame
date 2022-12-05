import React, { ReactElement, ReactNode, useState } from "react";
import { View, Text, ImageBackground, Button, Pressable, TouchableHighlight, Alert, Modal, ViewComponent } from "react-native";
import styles from "../assets/Style";
import Board from "../components/Board";
import { Soal, soal } from "../model/Soal";
import Bot from "../components/Bot";
import Player from "../components/Player";
import Point from "../components/Point";
import { pawn } from "../model/Pawn";
import { point } from "../model/Point";

const soalTes = soal;

const p0: point = new point([], false, 'no');
const p1: point = new point([], true, 'player');
const p2: point = new point([], true, 'player');
const p3: point = new point([], true, 'player');
const p4: point = new point([], false, 'no');
const p5: point = new point([], false, 'no');
const p6: point = new point([], false, 'no');
const p7: point = new point([], false, 'no');
const p8: point = new point([], false, 'no');
const p9: point = new point([], false, 'no');
const p10: point = new point([], false, 'no');
const p11: point = new point([], false, 'no');
const p12: point = new point([], false, 'no');
const p13: point = new point([], false, 'bot');
const p14: point = new point([], false, 'bot');
const p15: point = new point([], false, 'bot');

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

// const player1: pawn = new pawn(1, true);
// const player2: pawn = new pawn(2, true);
// const player3: pawn = new pawn(3, true);
// const bot1: pawn = new pawn(13, false);
// const bot2: pawn = new pawn(14, false);
// const bot3: pawn = new pawn(15, false);

// const player = [player1, player2, player3];
// const bot = [bot1, bot2, bot3];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}


// const botMove = () => {
//   var moved = bot[getRandomInt(3)];
//   const start = moved.position;
//   var moveInto = points[start].neighbor[0];
//   while (moveInto.isOccupied != 'no') {
//     const n = (points[start].neighbor).length;
//     moveInto = points[start].neighbor[getRandomInt(n)];
//   }
//   points[start - 1].isOccupied = 'no';
//   moveInto.isOccupied = 'bot';
//   // Assign position baru
// }

const pawnClick = () => {
  //Ambil posisi pawn yang diklik
}

const pointClick = () => {
  // Kalo belom kejawab, buka soal
  // Kalo udah kejawab, assign pos ke point yang diclick
}

const place = [
  styles.p1,
  styles.p2,
  styles.p3,
  styles.p4,
  styles.p5,
  styles.p6,
  styles.p7,
  styles.p8,
  styles.p9,
  styles.p10,
  styles.p11,
  styles.p12,
  styles.p13,
  styles.p14,
  styles.p15,
]

function PointCheck(x: point) {
  if (x.isOccupied == 'no') {
    return <Point />
  }
  if (x.isOccupied == 'player') {
    return <Player />
  }
  if (x.isOccupied == 'bot') {
    return <Bot />
  }
}

const GameScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState(p0);
  const [nomor, setNomor] = React.useState(0);
  const [movedTo, setMovedTo] = React.useState(p0);

  interface soalProps {
    visible: boolean;
    nomor: number;
  }

  const ScreenSoal = (x: soalProps) => {
    const [showModal, setShowModal] = React.useState(visible);
    return (
      <Modal transparent visible={visible}>
        <View style={{ alignItems: 'stretch', alignContent: 'center', flex: 10 }}>
          <ImageBackground source={require('./bg.png')} style={[styles.containerSoal, { flex: 7 , borderRadius: 0}]}>
            <View style={styles.timeRemaining}>
              <Text style={styles.timeRemainingFont}>00:10:00</Text>
            </View>
            <View style={styles.questions}>
              <Text style={styles.questionsFont}>{soalTes[nomor].soal}</Text>
            </View>
            <View style={styles.answers}>
              <View style={styles.answersOption1}>
                <TouchableHighlight onPress={() => onAnswer('a1', x.nomor)}>
                  <Text style={styles.answerFont}>{soalTes[nomor].a1}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.answersOption2}>
                <TouchableHighlight onPress={() => onAnswer('a2', x.nomor)}>
                  <Text style={styles.answerFont}>{soalTes[nomor].a2}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.answersOption3}>
                <TouchableHighlight onPress={() => onAnswer('a3', x.nomor)}>
                  <Text style={styles.answerFont}>{soalTes[nomor].a3}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.answersOption4}>
                <TouchableHighlight onPress={() => onAnswer('a4', x.nomor)}>
                  <Text style={styles.answerFont}>{soalTes[nomor].a4}</Text>
                </TouchableHighlight>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Modal>)
  }


  const onPointPress = (x: point) => {
    if (selected == p0) {
      if (x.isOccupied == 'player') {
        setSelected(x);
      } else {
        Alert.alert(
          "Titik tidak bisa dijalankan",
          "Titik yang anda pilih tidak bisa dijalankan",
          [{ text: "OK", onPress: () => Alert.alert(String(points.indexOf(x))) }]);
      }
    } else {
      if (
        (selected.neighbor.includes(x)) &&
        (x.isOccupied == ('no'))
      ) {
        if (x.isAnswered == false) {
          setNomor(points.indexOf(x))
          setMovedTo(x);
          setVisible(true);
        } else {
          selected.isOccupied = 'no';
          x.isOccupied = 'player';
          setSelected(p0);
        }
      } else {
        Alert.alert(
          "Titik tidak bisa dijalankan kesini",
          "Titik yang anda pilih tidak bisa dijalankan kesini",
          [{ text: "OK", onPress: () => Alert.alert(String(points.indexOf(x))) }]);
          setSelected(p0);
      }
    }
  }

  function onAnswer(option: String, x: number) {
    if (option == soal[x].ans) {
      selected.isOccupied = 'no';
      movedTo.isOccupied = 'player';
      setSelected(p0);
      setMovedTo(p0);
      setVisible(false);
    } else { setVisible(false) }
  }



  return (
    <ImageBackground resizeMode={'stretch'} source={require('./bg_board.png')}>
      <ScreenSoal visible={visible} nomor={nomor}></ScreenSoal>
      <Text style={[styles.PlayerWindow, styles.PlayerText]}>Computer</Text>
      <View style={[styles.Board]}>
          <TouchableHighlight disabled={p1.isOccupied == 'bot'} onPress={() => onPointPress(points[0])}>
            <View style={place[0]}>
              {PointCheck(points[0])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p2.isOccupied == 'bot'} onPress={() => onPointPress(points[1])}>
            <View style={place[1]}>
              {PointCheck(points[1])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p3.isOccupied == 'bot'} onPress={() => onPointPress(points[2])}>
            <View style={place[2]}>
              {PointCheck(points[2])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p4.isOccupied == 'bot'} onPress={() => onPointPress(points[3])}>
            <View style={place[3]}>
              {PointCheck(points[3])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p5.isOccupied == 'bot'} onPress={() => onPointPress(points[4])}>
            <View style={place[4]}>
              {PointCheck(points[4])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p6.isOccupied == 'bot'} onPress={() => onPointPress(points[5])}>
            <View style={place[5]}>
              {PointCheck(points[5])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p7.isOccupied == 'bot'} onPress={() => onPointPress(points[6])}>
            <View style={place[6]}>
              {PointCheck(points[6])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p8.isOccupied == 'bot'} onPress={() => onPointPress(points[7])}>
            <View style={place[7]}>
              {PointCheck(points[7])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p9.isOccupied == 'bot'} onPress={() => onPointPress(points[8])}>
            <View style={place[8]}>
              {PointCheck(points[8])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p10.isOccupied == 'bot'} onPress={() => onPointPress(points[9])}>
            <View style={place[9]}>
              {PointCheck(points[9])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p11.isOccupied == 'bot'} onPress={() => onPointPress(points[10])}>
            <View style={place[10]}>
              {PointCheck(points[10])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p12.isOccupied == 'bot'} onPress={() => onPointPress(points[11])}>
            <View style={place[11]}>
              {PointCheck(points[11])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p13.isOccupied == 'bot'} onPress={() => onPointPress(points[12])}>
            <View style={place[12]}>
              {PointCheck(points[12])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p14.isOccupied == 'bot'} onPress={() => onPointPress(points[13])}>
            <View style={place[13]}>
              {PointCheck(points[13])}
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={p15.isOccupied == 'bot'} onPress={() => onPointPress(points[14])}>
            <View style={place[14]}>
              {PointCheck(points[14])}
            </View>
          </TouchableHighlight>
      </View>
      <Text style={[styles.PlayerWindow, styles.PlayerText]}>Player1</Text>
    </ImageBackground>
  );
};

export default GameScreen;