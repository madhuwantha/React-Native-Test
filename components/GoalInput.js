import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
  const [entertedGoal, setEntertedGoal] = useState('');

  const goalInputHandler = entertedText => {
    setEntertedGoal(entertedText);
    entertedText = '';
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.goalInput}
          placeholder="Course Goal.."
        />
        <Button title="CACEl" onPress={props.onCancel} color="red" />
        <Button
          onPress={props.onAddGoal.bind(this, entertedGoal)}
          title="ADD"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalInput: {
    width: '80%',
    borderColor: '#b22222',
    borderWidth: 1,
    padding: 10,
    marginBottom: 8,
  },
});

export default GoalInput;
