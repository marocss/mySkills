import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  text: string;
}

export const SkillCard = ({ text, ...rest }: SkillCardProps) => {
  const { skillButton, skillText } = styles;

  return (
    <TouchableOpacity style={skillButton} activeOpacity={0.77789} {...rest}>
      <Text style={skillText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skillButton: {
    backgroundColor: '#1f1e25',
    padding: 17,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 11,
  },
  skillText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '700',
  },
});
