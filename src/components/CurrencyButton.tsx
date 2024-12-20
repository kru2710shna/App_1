// components/CurrencyButton.tsx

import React from 'react';
import type { PropsWithChildren } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
  onPress: () => void; // Added onPress prop
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  const { name, flag, onPress } = props;

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.flagText}>{flag}</Text>
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // Align flag and name horizontally
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 5,
    width: '100%',
    justifyContent: 'space-between',
  },
  flagText: {
    fontSize: 24,
    marginRight: 10,
  },
  nameText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default CurrencyButton;
