import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onPress, onChangeText, value }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder="Your course goal"
				style={styles.textInput}
			/>
			<View>
				<Button title="Add goal" onPress={onPress} />
			</View>
		</View>
	);
};

export default GoalInput;

styles = StyleSheet.create({
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
});
