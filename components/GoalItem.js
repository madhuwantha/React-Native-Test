import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.textView}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 4,
    backgroundColor: '#ccc9b0',
  },
});

export default GoalItem;
