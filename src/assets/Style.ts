import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Point: {
        backgroundColor: '#FFFFFF',
        width: 30,
        height: 30,
    },
    Player: {
        backgroundColor: '#0000FF',
        width: 30,
        height: 30,
    },
    Bot: {
        backgroundColor: '#FF0000',
        width: 30,
        height: 30,
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
    Diff: {
        fontSize: 40,
        textAlignVertical: 'center',
        fontWeight: '600',
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#220055',
        borderColor: '#000000',
        textShadowColor: '#000000',
        textShadowOffset: {width: 4, height: 2},
    },
    Easy:{
        minHeight: 65,
        fontSize: 40,
        textAlignVertical: 'center',
        fontWeight: '600',
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#0000f0',
        borderColor: '#000000',
        borderRadius: 20,
        borderWidth: 2,
    },
    Normal:{
        minHeight: 65,
        fontSize: 40,
        textAlignVertical: 'center',
        fontWeight: '600',
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#000000',
        backgroundColor: '#ffff00',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 20
    },
    Hard:{
        minHeight: 65,
        fontSize: 40,
        textAlignVertical: 'center',
        fontWeight: '600',
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#f00000',
        borderColor: '#000000',
        borderRadius: 20,
        borderWidth: 2,
    },
    Board: {
        minHeight: 500
    },
    p1: {
        position: 'absolute',
        maxHeight: 20,
        maxWidth: 20,
        paddingLeft: 75,
        paddingTop: 25
    },
    p2: {
        position: 'absolute',
        paddingLeft: 165,
        paddingTop: 25,
        maxHeight: 20,
        maxWidth: 20
    },
    p3: {
        position: 'absolute',
        paddingLeft: 255,
        paddingTop: 25,
        maxHeight: 20,
        maxWidth: 20
    },
    p4: {
        position: 'absolute',
        paddingLeft: 15,
        paddingTop: 130,
        maxHeight: 20,
        maxWidth: 20
    },
    p5: {
        position: 'absolute',
        paddingLeft: 165,
        paddingTop: 130,
        maxHeight: 20,
        maxWidth: 20
    },
    p6: {
        position: 'absolute',
        paddingLeft: 315,
        paddingTop: 130,
        maxHeight: 20,
        maxWidth: 20
    },
    p7: {
        position: 'absolute',
        paddingLeft: 15,
        paddingTop: 235,
        maxHeight: 20,
        maxWidth: 20
    },
    p8: {
        position: 'absolute',
        paddingLeft: 165,
        paddingTop: 235,
        maxHeight: 20,
        maxWidth: 20
    },
    p9: {
        position: 'absolute',
        paddingLeft: 315,
        paddingTop: 235,
        maxHeight: 20,
        maxWidth: 20
    },
    p10: {
        position: 'absolute',
        paddingLeft: 15,
        paddingTop: 340,
        maxHeight: 20,
        maxWidth: 20
    },
    p11: {
        position: 'absolute',
        paddingLeft: 165,
        paddingTop: 340,
        maxHeight: 20,
        maxWidth: 20
    },
    p12: {
        position: 'absolute',
        paddingLeft: 315,
        paddingTop: 340,
        maxHeight: 20,
        maxWidth: 20,
    },
    p13: {
        position: 'absolute',
        paddingLeft: 75,
        paddingTop: 435,
        maxHeight: 20,
        maxWidth: 20
    },
    p14: {
        position: 'absolute',
        paddingLeft: 165,
        paddingTop: 435,
        maxHeight: 20,
        maxWidth: 20
    },
    p15: {
        position: 'absolute',
        paddingLeft: 255,
        paddingTop: 435,
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
    },
    WinScreen: {
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    WinFont: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold'
    }
})

function radius(n: number){
    return Math.sqrt(2*n*n);
}

export default styles;