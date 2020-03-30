/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// Custom components
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// import defaults from '@babel/runtime/helpers/esm/defaults';

// const App: () => React$Node = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Open up the app.js</Text>
//     </View>
//   );
// };

function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const goalAddHandler = goalTitle => {
    setCourseGoals(curentGoals => [
      ...curentGoals,
      {key: Math.random().toString(), value: goalTitle},
    ]);
  };

  const removeGoalItemHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={goalAddHandler} />
      <FlatList
        keyEctractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={itemdata => (
          <GoalItem
            id={itemdata.item.key}
            onDelete={removeGoalItemHandler}
            title={itemdata.item.value}
          />
        )}
      />
      {/*<ScrollView style={{marginTop: 8}}>*/}
      {/*  {courseGoals.map(goal => (*/}
      {/*    <View style={styles.textView}>*/}
      {/*      <Text>{goal}</Text>*/}
      {/*    </View>*/}
      {/*  ))}*/}
      {/*</ScrollView>*/}
    </View>
  );
}

function FlexBoxes() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        width: '90%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>1</Text>
      </View>

      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>2</Text>
      </View>

      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>3</Text>
      </View>

      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {padding: 50},
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
