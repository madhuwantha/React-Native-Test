/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import defaults from '@babel/runtime/helpers/esm/defaults';

// const App: () => React$Node = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Open up the app.js</Text>
//     </View>
//   );
// };

function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.goalInput} placeholder="Course Goal" />
        <Button title="ADD" />
      </View>
      <View />
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {padding: 50},
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
    goalInput: {width: '80%', borderColor: '#b22222', borderWidth: 1},
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
