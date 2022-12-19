import { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableHighlight,
  Alert,
  Modal,
} from 'react-native'
import styles from '../assets/Style'
import Board from '../components/Board'
import { Soal, soal } from '../model/Soal'
import Bot from '../components/Bot'
import Player from '../components/Player'
import Point from '../components/Point'
import { pawn } from '../model/Pawn'
import { point } from '../model/Point'

const p0: point = new point([], false, 'no')
const p1: point = new point([], false, 'bot')
const p2: point = new point([], false, 'bot')
const p3: point = new point([], false, 'bot')
const p4: point = new point([], false, 'no')
const p5: point = new point([], false, 'no')
const p6: point = new point([], false, 'no')
const p7: point = new point([], false, 'no')
const p8: point = new point([], false, 'no')
const p9: point = new point([], false, 'no')
const p10: point = new point([], false, 'no')
const p11: point = new point([], false, 'no')
const p12: point = new point([], false, 'no')
const p13: point = new point([], true, 'player')
const p14: point = new point([], true, 'player')
const p15: point = new point([], true, 'player')

p1.neighbor = [p2, p5]
p2.neighbor = [p1, p3, p5]
p3.neighbor = [p2, p5]
p4.neighbor = [p5, p7]
p5.neighbor = [p1, p2, p3, p4, p6, p7, p8, p9]
p6.neighbor = [p5, p9]
p7.neighbor = [p4, p5, p8, p10, p11]
p8.neighbor = [p4, p5, p6, p7, p9, p10, p11, p12]
p9.neighbor = [p5, p6, p8, p11, p12]
p10.neighbor = [p7, p11]
p11.neighbor = [p7, p8, p9, p10, p12, p13, p14, p15]
p12.neighbor = [p9, p11]
p13.neighbor = [p11, p14]
p14.neighbor = [p11, p13, p15]
p15.neighbor = [p11, p14]

const points = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
]
const bot = [p1, p2, p3]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

function moveSelection(x: point) {
  var l = 1
  var option = x.neighbor
  var selected = option[option.length - l]
  while (selected.isOccupied != 'no') {
    if (option.length - l === 0) {
      break
    }
    l += 1
    selected = option[option.length - l]
  }
  return selected
}

function botMove() {
  var moved = bot[getRandomInt(bot.length)]
  var moveInto = moveSelection(moved)
  while (moveInto.isOccupied != 'no') {
    moved = bot[getRandomInt(bot.length)]
    moveInto = moveSelection(moved)
  }
  moved.isOccupied = 'no'
  moveInto.isOccupied = 'bot'
  bot.splice(bot.indexOf(moved), 1)
  bot.push(moveInto)
  if (moveInto === (p13 || p14 || p15)) {
    bot.splice(bot.indexOf(moveInto), 1)
  }
  moved = p0
  moveInto = p0
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
  if (x.isOccupied === 'no') {
    return <Point />
  }
  if (x.isOccupied === 'player') {
    return <Player />
  }
  if (x.isOccupied === 'bot') {
    return <Bot />
  }
}

const GameScreen = ({ navigation, route }: any) => {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(p0)
  const [nomor, setNomor] = useState(0)
  const [movedTo, setMovedTo] = useState(p0)
  const [isConcluding, setIsConcluding] = useState(false)
  const [win, setWin] = useState(0)
  const diff = route.diffSelected

  const soalTes = soal[diff - 1]

  interface soalProps {
    visible: boolean
    nomor: number
  }

  function GameReset() {
    p1.isOccupied = 'bot'
    p2.isOccupied = 'bot'
    p3.isOccupied = 'bot'
    p4.isOccupied = 'no'
    p5.isOccupied = 'no'
    p6.isOccupied = 'no'
    p7.isOccupied = 'no'
    p8.isOccupied = 'no'
    p9.isOccupied = 'no'
    p10.isOccupied = 'no'
    p11.isOccupied = 'no'
    p12.isOccupied = 'no'
    p13.isOccupied = 'player'
    p14.isOccupied = 'player'
    p15.isOccupied = 'player'

    p1.isAnswered = false
    p2.isAnswered = false
    p3.isAnswered = false
    p4.isAnswered = false
    p5.isAnswered = false
    p6.isAnswered = false
    p7.isAnswered = false
    p8.isAnswered = false
    p9.isAnswered = false
    p10.isAnswered = false
    p11.isAnswered = false
    p12.isAnswered = false

    setIsConcluding(false)
  }

  function WinScreen() {
    const nor = ['#0000ff', 'WAH', 'PERMAINAN SERI!']
    const winning = ['#00ff00', 'SELAMAT!', 'KAMU MENANG!']
    const lose = ['#ff0000', 'YAH!', 'KAMU KALAH:(']
    var condition = nor

    if (win === 1) {
      condition = winning
    } else if (win === -1) {
      condition = lose
    } else {
      condition = nor
    }

    return (
      <Modal transparent visible={isConcluding}>
        <View
          style={[
            styles.WinScreen,
            styles.containerSoal,
            {
              marginHorizontal: 60,
              marginTop: 300,
              backgroundColor: condition[0],
            },
          ]}
        >
          <Text style={styles.WinFont}>{condition[1]}</Text>
          <Text style={styles.WinFont}>{condition[2]}</Text>
          <Button onPress={() => GameReset()} title='Main lagi'></Button>
        </View>
      </Modal>
    )
  }

  const ScreenSoal = (x: soalProps) => {
    const [showModal, setShowModal] = useState(visible)
    return (
      <Modal transparent visible={visible}>
        <View
          style={{ alignItems: 'stretch', alignContent: 'center', flex: 10 }}
        >
          <ImageBackground
            source={require('./bg.png')}
            style={[styles.containerSoal, { flex: 7, borderRadius: 0 }]}
          >
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
      </Modal>
    )
  }

  const onPointPress = (x: point) => {
    if (selected === p0) {
      if (x.isOccupied === 'player') {
        setSelected(x)
      } else {
        Alert.alert(
          'Titik tidak bisa dijalankan',
          'Titik yang anda pilih tidak bisa dijalankan',
          [
            {
              text: 'OK',
              onPress: () =>
                Alert.alert(
                  'Anda ingin memindahkan ',
                  String(points.indexOf(x))
                ),
            },
          ]
        )
      }
    } else {
      if (selected.neighbor.includes(x) && x.isOccupied === 'no') {
        if (x.isAnswered === false) {
          setNomor(getRandomInt(soalTes.length))
          setMovedTo(x)
          setVisible(true)
        } else {
          selected.isOccupied = 'no'
          x.isOccupied = 'player'
          setSelected(p0)
          if (
            p1.isOccupied === 'player' &&
            p2.isOccupied === 'player' &&
            p3.isOccupied === 'player'
          ) {
            setWin(1)
            setIsConcluding(true)
            WinScreen()
          }
          botMove()
          if (
            p13.isOccupied === 'bot' &&
            p14.isOccupied === 'bot' &&
            p15.isOccupied === 'bot'
          ) {
            setWin(-1)
            setIsConcluding(true)
            WinScreen()
          }
        }
      } else {
        Alert.alert(
          'Titik tidak bisa dijalankan kesini',
          'Titik yang anda pilih tidak bisa dijalankan kesini',
          [
            {
              text: 'OK',
              onPress: () => Alert.alert(String(points.indexOf(x))),
            },
          ]
        )
        setSelected(p0)
      }
    }
  }

  function onAnswer(option: String, x: number) {
    if (option === soalTes[x].ans) {
      selected.isOccupied = 'no'
      movedTo.isOccupied = 'player'
      movedTo.isAnswered = true
      setSelected(p0)
      setMovedTo(p0)
      setVisible(false)
      if (
        p1.isOccupied === 'player' &&
        p2.isOccupied === 'player' &&
        p3.isOccupied === 'player'
      ) {
        setWin(1)
        setIsConcluding(true)
        WinScreen()
      }
      botMove()
      if (
        p13.isOccupied === 'bot' &&
        p14.isOccupied === 'bot' &&
        p15.isOccupied === 'bot'
      ) {
        setWin(-1)
        setIsConcluding(true)
        WinScreen()
      }
    } else {
      setVisible(false)
      botMove()
      if (
        p13.isOccupied === 'bot' &&
        p14.isOccupied === 'bot' &&
        p15.isOccupied === 'bot'
      ) {
        setWin(-1)
        setIsConcluding(true)
        WinScreen()
      }
    }
  }

  return (
    <ImageBackground resizeMode={'stretch'} source={require('./bg_board.png')}>
      <ScreenSoal visible={visible} nomor={nomor}></ScreenSoal>
      <WinScreen></WinScreen>
      <Text style={[styles.PlayerWindow, styles.PlayerText]}>Computer</Text>
      <View style={[styles.Board]}>
        <View style={place[0]}>
          <TouchableHighlight onPress={() => onPointPress(points[0])}>
            {PointCheck(points[0])}
          </TouchableHighlight>
        </View>
        <View style={place[1]}>
          <TouchableHighlight onPress={() => onPointPress(points[1])}>
            {PointCheck(points[1])}
          </TouchableHighlight>
        </View>
        <View style={place[2]}>
          <TouchableHighlight onPress={() => onPointPress(points[2])}>
            {PointCheck(points[2])}
          </TouchableHighlight>
        </View>
        <View style={place[3]}>
          <TouchableHighlight onPress={() => onPointPress(points[3])}>
            {PointCheck(points[3])}
          </TouchableHighlight>
        </View>
        <View style={place[4]}>
          <TouchableHighlight onPress={() => onPointPress(points[4])}>
            {PointCheck(points[4])}
          </TouchableHighlight>
        </View>
        <View style={place[5]}>
          <TouchableHighlight onPress={() => onPointPress(points[5])}>
            {PointCheck(points[5])}
          </TouchableHighlight>
        </View>
        <View style={place[6]}>
          <TouchableHighlight onPress={() => onPointPress(points[6])}>
            {PointCheck(points[6])}
          </TouchableHighlight>
        </View>
        <View style={place[7]}>
          <TouchableHighlight onPress={() => onPointPress(points[7])}>
            {PointCheck(points[7])}
          </TouchableHighlight>
        </View>
        <View style={place[8]}>
          <TouchableHighlight onPress={() => onPointPress(points[8])}>
            {PointCheck(points[8])}
          </TouchableHighlight>
        </View>
        <View style={place[9]}>
          <TouchableHighlight onPress={() => onPointPress(points[9])}>
            {PointCheck(points[9])}
          </TouchableHighlight>
        </View>
        <View style={place[10]}>
          <TouchableHighlight onPress={() => onPointPress(points[10])}>
            {PointCheck(points[10])}
          </TouchableHighlight>
        </View>
        <View style={place[11]}>
          <TouchableHighlight onPress={() => onPointPress(points[11])}>
            {PointCheck(points[11])}
          </TouchableHighlight>
        </View>
        <View style={place[12]}>
          <TouchableHighlight
            hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
            onPress={() => onPointPress(points[12])}
          >
            {PointCheck(points[12])}
          </TouchableHighlight>
        </View>
        <View style={place[13]}>
          <TouchableHighlight
            hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
            onPress={() => onPointPress(points[13])}
          >
            {PointCheck(points[13])}
          </TouchableHighlight>
        </View>
        <View style={place[14]}>
          <TouchableHighlight
            hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
            onPress={() => onPointPress(points[14])}
          >
            {PointCheck(points[14])}
          </TouchableHighlight>
        </View>
      </View>
      <Text style={[styles.PlayerWindow, styles.PlayerText]}>Player1</Text>
    </ImageBackground>
  )
}

export default GameScreen
