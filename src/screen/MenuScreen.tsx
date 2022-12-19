import React from 'react'
import { View, Text, ImageBackground, Button } from 'react-native'
import styles from '../assets/Style'
import GameViewModel from './ViewModel'

const MenuScreen = ({ navigation }: any, viewModel: GameViewModel) => {
  const diffStyle = [styles.Easy, styles.Normal, styles.Hard]
  const diffSelected = viewModel.getDiff
  const diff = ['Easy', 'Normal', 'Hard']
  const [option, setOption] = React.useState(1)

  const DiffAdd = () => {
    if (option < 3) {
      setOption(option + 1)
    }
  }

  const DiffReduce = () => {
    if (option > 1) {
      setOption(option - 1)
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
                viewModel.setDiff(option)
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
