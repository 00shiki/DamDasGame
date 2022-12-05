import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Point: {
        backgroundColor: '#FFFFFF',
        width: 20,
        height: 20,
    },
    Player: {
        backgroundColor: '#FF0000',
        width: 20,
        height: 20,
        borderRadius: radius(20),
    },
    Bot: {
        backgroundColor: '#0000FF',
        width: 20,
        height: 20,
    },
    PlayerWindow: {
        minHeight: 65,
        backgroundColor: '#ffffff',
    },
    PlayerText: {
        fontSize: 30,
        textAlignVertical: 'center',
        fontWeight: '600',
        fontStyle: 'italic'
    },
    Board: {
        minHeight: 500
    },
    p1: {
        position: 'absolute',
        maxHeight: 20,
        maxWidth: 20,
        paddingLeft: 85,
        paddingTop: 22
    },
    p2: {
        position: 'absolute',
        paddingLeft: 175,
        paddingTop: 22,
        maxHeight: 20,
        maxWidth: 20
    },
    p3: {
        position: 'absolute',
        paddingLeft: 265,
        paddingTop: 22,
        maxHeight: 20,
        maxWidth: 20
    },
    p4: {
        position: 'absolute',
        paddingLeft: 19,
        paddingTop: 118,
        maxHeight: 20,
        maxWidth: 20
    },
    p5: {
        position: 'absolute',
        paddingLeft: 175,
        paddingTop: 118,
        maxHeight: 20,
        maxWidth: 20
    },
    p6: {
        position: 'absolute',
        paddingLeft: 331,
        paddingTop: 118,
        maxHeight: 20,
        maxWidth: 20
    },
    p7: {
        position: 'absolute',
        paddingLeft: 19,
        paddingTop: 225,
        maxHeight: 20,
        maxWidth: 20
    },
    p8: {
        position: 'absolute',
        paddingLeft: 175,
        paddingTop: 225,
        maxHeight: 20,
        maxWidth: 20
    },
    p9: {
        position: 'absolute',
        paddingLeft: 331,
        paddingTop: 225,
        maxHeight: 20,
        maxWidth: 20
    },
    p10: {
        position: 'absolute',
        paddingLeft: 19,
        paddingTop: 332,
        maxHeight: 20,
        maxWidth: 20
    },
    p11: {
        position: 'absolute',
        paddingLeft: 175,
        paddingTop: 332,
        maxHeight: 20,
        maxWidth: 20
    },
    p12: {
        position: 'absolute',
        paddingLeft: 332,
        paddingTop: 332,
        maxHeight: 20,
        maxWidth: 20,
    },
    p13: {
        position: 'absolute',
        paddingLeft: 85,
        paddingTop: 430,
        maxHeight: 20,
        maxWidth: 20
    },
    p14: {
        position: 'absolute',
        paddingLeft: 175,
        paddingTop: 430,
        maxHeight: 20,
        maxWidth: 20
    },
    p15: {
        position: 'absolute',
        paddingLeft: 265,
        paddingTop: 430,
        maxHeight: 20,
        maxWidth: 20
    },
    containerSoal: {
        backgroundColor: '#ffffff',
        justifyContent: "space-around",
        margin: 20,
        padding: 10,
        borderColor: '#000000',
        borderWidth: 3,
        borderRadius: 20,
    },
    timeRemaining: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    timeRemainingFont: {
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: 20,
        padding: 7,
        borderWidth: 2,
        borderRadius: 10,
        textAlign: 'center',
    },
    questions: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        minHeight: 150,
    },
    questionsFont: {
        color: '#000000',
        fontSize: 24,
        padding: 7,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    answers: {
        backgroundColor: '#ed8b6f',
        borderWidth: 2,
        borderRadius: 10,
    },
    answerFont: {
        color: '#ffffff',
        fontSize: 14,
        padding: 2,
        margin: 10,
        textAlign: 'center',
        alignContent: 'center'
    },
    answersOption1: {
        backgroundColor: '#29a11a',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10
    },
    answersOption2: {
        backgroundColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10
    },
    answersOption3: {
        backgroundColor: '#cccc21',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10
    },
    answersOption4: {
        backgroundColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10
    }
})

function radius(n: number){
    return Math.sqrt(2*n*n);
}

export default styles;