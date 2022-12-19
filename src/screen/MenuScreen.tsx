import React, { useEffect } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Button,
  Alert,
  BackHandler,
} from 'react-native'
import styles from '../assets/Style'

const MenuScreen = ({ navigation }: any) => {
  const diffStyle = [styles.Easy, styles.Normal, styles.Hard]
  const diff = ['Easy', 'Normal', 'Hard']
  const [diffSelected, setDiffSelected] = React.useState(1)

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ])
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  const DiffAdd = () => {
    if (diffSelected < 3) {
      setDiffSelected(diffSelected + 1)
    } else {
      setDiffSelected(1)
    }
  }

  const DiffReduce = () => {
    if (diffSelected > 1) {
      setDiffSelected(diffSelected - 1)
    } else {
      setDiffSelected(3)
    }
  }

  function Diff() {
    if (diffSelected == 1) {
      return <Text style={[diffStyle[0], { margin: 20 }]}>{diff[0]}</Text>
    } else if (diffSelected == 2) {
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
                console.log(diffSelected)
                navigation.navigate('Game', {
                  diff: diffSelected,
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
