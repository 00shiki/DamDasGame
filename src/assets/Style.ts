import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Point: {
        backgroundColor: '#000',
        width: 40,
        height: 40,
        borderRadius: radius(40)
    },
    Pawn: {
        backgroundColor: '#FF0000',
        width: 40,
        height: 40,
        borderRadius: radius(40),
    },
    PlayerWindow: {
        backgroundColor: '#00ff00',
    },
    Board: {
        flex: 7,
        backgroundColor: '#00ffff',
        borderRadius: 30
    },
    p1: {
        alignItems: 'flex-end'
    },
    p2: {
        alignItems: 'flex-start'
    }
})

function radius(n: number){
    return Math.sqrt(2*n*n);
}

export default styles;