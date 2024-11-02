import { useState } from 'react';
import {
	Button,
	Image,
	Modal,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';

const GoalInput = ({ onPress, onChangeText, value, visible, cancleModal }) => {
	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require('../assets/images/goal.png')}
					style={styles.image}
				/>
				<TextInput
					value={value}
					onChangeText={onChangeText}
					placeholder="Your course goal"
					style={styles.textInput}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={cancleModal} color="#f31282" />
					</View>
					<View style={styles.button}>
						<Button title="Add goal" onPress={onPress} color="#b180f0" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#311b6b',
	},

	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		width: '100%',
		padding: 16,
		borderRadius: 6,
		color: '#120438',
		backgroundColor: 'white',
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		marginHorizontal: 8,
		width: '100',
	},
	image: {
		width: 100,
		height: 100,
		marginRight: 20,
		marginBottom: 16,
	},
});
