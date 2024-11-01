import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
	const [Goals, setGoals] = useState([]);
	const [goalText, setGoalText] = useState('');

	const handleInputChange = (text) => setGoalText(text);

	const addGoal = () => {
		if (!goalText.trim()) return;
		setGoals((prevGoals) => [
			...prevGoals,
			{ text: goalText, id: Math.random().toString() },
		]);
		setGoalText('');
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput
				onPress={addGoal}
				onChangeText={handleInputChange}
				value={goalText}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					data={Goals}
					renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
					keyExtractor={(itemdId) => itemdId.id}
				/>
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

	goalsContainer: {
		flex: 4,
	},
});

export default App;
