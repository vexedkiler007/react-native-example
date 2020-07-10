/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View
          style={{
            backgroundColor: "green",
            flexDirection: "row",
            height: 100,
            padding: 20,
            justifyContent: "center",

          }}
      >
        <Text style={styles.titleText}> I'm cool</Text>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Roboto"
  }
});

export default App;
