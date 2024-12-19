import React from 'react';
import { View, Text, StyleSheet, useColorScheme, SafeAreaView } from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={isDarkMode ? styles.darkBackground : styles.lightBackground}>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                    Hello World
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteText: {
        color: 'light',
    },
    darkText: {
        color: 'dark',
    },
    darkBackground: {
        backgroundColor: 'dark',
        flex: 1,
    },
    lightBackground: {
        backgroundColor: 'light',
        flex: 1,
    },
});

export default AppPro;
