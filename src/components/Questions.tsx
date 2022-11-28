import { View, Text, StyleSheet } from "react-native";

const Questions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.timeRemaining}>
                <Text style={styles.timeRemainingFont}>00:10:00</Text>
            </View>
            <View style={styles.questions}>
                <Text style={styles.questionsFont}>Ini pertanyaan buat ngetes doang</Text>
            </View>
            <View style={styles.answers}>
                <View style={styles.answersOption1}>
                    <Text style={styles.answerFont}>Jawaban A</Text>
                </View>
                <View style={styles.answersOption2}>
                    <Text style={styles.answerFont}>Jawaban B</Text>
                </View>
                <View style={styles.answersOption3}>
                    <Text style={styles.answerFont}>Jawaban C</Text>
                </View>
                <View style={styles.answersOption4}>
                    <Text style={styles.answerFont}>Jawaban D</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff0000',
        flex: 1,
        justifyContent: "space-around",
        margin: 20,
        padding: 10,
        borderRadius: 20,
    },
    timeRemaining: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.1,
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
        backgroundColor: 'blue',
        flex: 0.3,
        borderWidth: 2,
        borderRadius: 10,
    },
    questionsFont: {
        color: '#ffffff',
        fontSize: 24,
        padding: 7,
        textAlign: 'center',
        alignContent: 'center'
    },
    answers: {
        backgroundColor: 'purple',
        flex: 0.5,
        borderWidth: 2,
        borderRadius: 10,
    },
    answerFont: {
        color: '#000000',
        fontSize: 14,
        padding: 2,
        margin: 10,
        textAlign: 'center',
        alignContent: 'center'
    },
    answersOption1: {
        backgroundColor: 'white',
        flex: 0.25,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10
    },
    answersOption2: {
        backgroundColor: 'green',
        flex: 0.25,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10
    },
    answersOption3: {
        backgroundColor: 'grey',
        flex: 0.25,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10
    },
    answersOption4: {
        backgroundColor: 'pink',
        flex: 0.25,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10
    }
})


export default Questions;