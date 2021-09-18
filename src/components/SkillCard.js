import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.skillButton} activeOpacity={0.77789}>
      <Text style={styles.skillText}>{skill}</Text>
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
