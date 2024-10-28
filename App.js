import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setcourseGoals] = useState([]);

	const goalInputHandler = (textInput) => {
		setEnteredGoalText(textInput);
	};

	const addGoalHandler = () => {
		setcourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			enteredGoalText,
		]);
		setEnteredGoalText('');
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					value={enteredGoalText}
					onChangeText={goalInputHandler}
					placeholder="Your course goal"
					style={styles.textInput}
				/>
				<View>
					<Button title="Add goal" onPress={addGoalHandler} />
				</View>
			</View>
			<View style={styles.goalsContainer}>
				{courseGoals.map((goal, index) => (
					<Text key={index}>{goal}</Text>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		padding: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 4,
	},
});

export default App;
