import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
  const [entertedGoal, setEntertedGoal] = useState('');

  const goalInputHandler = entertedText => {
    setEntertedGoal(entertedText);
    entertedText = '';
  };

  const goalAddHandler = () => {
    props.onAddGoal(entertedGoal);
    setEntertedGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.goalInput}
          placeholder="Course Goal.."
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <Button title="CACEl" onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.buttonView}>
            <Button onPress={goalAddHandler} title="ADD" />
          </View>
        </View>
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
  buttonContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '60%',
  },
  buttonView: {
    width: '40%',
  },
});

export default GoalInput;
