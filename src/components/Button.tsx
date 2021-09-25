import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}
const isIos = Platform.OS === 'ios';

export const Button = ({ text, ...rest }: ButtonProps) => {
  const { button, buttonText } = styles;

  return (
    <TouchableOpacity style={button} activeOpacity={0.77789} {...rest}>
      <Text style={buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: isIos ? 15 : 10,
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
