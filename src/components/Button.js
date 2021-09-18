import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';

export const Button = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.77789}
      onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 17,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
});
