import { useState } from 'react';
import { Button, FlatList, StatusBar, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
	const [Goals, setGoals] = useState([]);
	const [goalText, setGoalText] = useState('');
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const handleInputChange = (text) => setGoalText(text);

	const startAddGoalhandler = () => {
		setModalIsVisible(true);
	};

	const endAddGoalhandler = () => {
		setGoalText('');
		setModalIsVisible(false);
	};

	const addGoal = () => {
		if (!goalText.trim()) return;
		setGoals((prevGoals) => [
			...prevGoals,
			{ text: goalText, id: Math.random().toString() },
		]);
		setGoalText('');
		setModalIsVisible(false);
	};

	const deleteGoal = (id) => {
		setGoals((prevGoals) => prevGoals.filter((goals) => goals.id !== id));
	};

	return (
		<>
			<StatusBar style="auto" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#b180f0"
					onPress={startAddGoalhandler}
				/>
				<GoalInput
					visible={modalIsVisible}
					onPress={addGoal}
					cancleModal={endAddGoalhandler}
					onChangeText={handleInputChange}
					value={goalText}
				/>

				<View style={styles.goalsContainer}>
					<FlatList
						data={Goals}
						renderItem={(itemData) => (
							<GoalItem
								text={itemData.item.text}
								onGoalDelete={() => deleteGoal(itemData.item.id)}
							/>
						)}
						keyExtractor={(itemdId) => itemdId.id}
					/>
				</View>
			</View>
		</>
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
