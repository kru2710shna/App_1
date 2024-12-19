import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically centers the text
    alignItems: 'center', // Horizontally centers the text
    backgroundColor: '#f0f0f0', // Light background for better visibility
  },
  text: {
    fontSize: 24, // Make the text large enough to be visible
    color: 'black', // Ensure the text is not the same color as the background
  },
});

export default App;
