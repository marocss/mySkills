import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.77789}
      // onPress={onPress}
      {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
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
