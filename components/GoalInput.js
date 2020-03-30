import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const GoalInput = props => {
  const [entertedGoal, setEntertedGoal] = useState('');

  const goalInputHandler = entertedText => {
    setEntertedGoal(entertedText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.goalInput}
        placeholder="Course Goal.."
      />
      <Button onPress={props.onAddGoal.bind(this, entertedGoal)} title="ADD" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  goalInput: {width: '80%', borderColor: '#b22222', borderWidth: 1},
});

export default GoalInput;
