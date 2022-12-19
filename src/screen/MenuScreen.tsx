import React from 'react'
import { View, Text, ImageBackground, Button } from 'react-native'
import styles from '../assets/Style'
import GameViewModel from './ViewModel'

const MenuScreen = ({ navigation }: any, viewModel: GameViewModel) => {
  const [option, setOption] = React.useState(1)
  const diffStyle = [styles.Easy, styles.Normal, styles.Hard]
  var diffSelected = 2
  const diff = ['Easy', 'Normal', 'Hard']

  const DiffAdd = () => {
    if (diffSelected < 3) {
      diffSelected += 1
      setOption(diffSelected)
    } else {
      setOption(diffSelected)
    }
  }

  const DiffReduce = () => {
    if (diffSelected > 1) {
      diffSelected -= 1
      setOption(diffSelected)
    } else {
      setOption(diffSelected)
    }
  }

  function Diff() {
    if (option == 1) {
      return <Text style={[diffStyle[0], { margin: 20 }]}>{diff[0]}</Text>
    } else if (option == 2) {
      return <Text style={[diffStyle[1], { margin: 20 }]}>{diff[1]}</Text>
    } else {
      return <Text style={[diffStyle[2], { margin: 20 }]}>{diff[2]}</Text>
    }
  }

  return (
    <View style={{ alignItems: 'stretch', alignContent: 'center', flex: 10 }}>
      <ImageBackground
        source={require('./bg.png')}
        style={[{ flex: 5, borderRadius: 0, alignContent: 'center' }]}
      >
        <View style={[{ flexWrap: 'nowrap', flex: 5, marginVertical: 100 }]}>
          <Text
            style={[
              { fontSize: 20, textAlign: 'center', marginBottom: 50 },
              styles.Diff,
            ]}
          >
            Silahkan Pilih Tingkat Kesulitan
          </Text>
          <View style={{ marginHorizontal: 130 }}>
            <Button
              title='+'
              color={'#ff6600'}
              onPress={() => {
                DiffAdd()
              }}
            ></Button>
          </View>
          {Diff()}
          <View style={{ marginHorizontal: 130, marginBottom: 50 }}>
            <Button
              title='-'
              color={'#ff6600'}
              onPress={() => {
                DiffReduce()
              }}
            ></Button>
          </View>
          <View style={{ marginHorizontal: 80 }}>
            <Button
              title='Mulai main'
              color={'#00aa00'}
              onPress={() => {
                navigation.navigate('Game', {
                  params: { viewModel },
                })
              }}
            ></Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default MenuScreen
