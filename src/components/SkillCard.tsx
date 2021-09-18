import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  text: string;
}

export const SkillCard = ({ text, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity
      style={styles.skillButton}
      activeOpacity={0.77789}
      {...rest}>
      <Text style={styles.skillText}>{text}</Text>
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
