/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  // SafeAreaView,
} from 'react-native';

export function Home() {
  const [skillToAdd, setSkillToAdd] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(myCurrentSkills => [...myCurrentSkills, skillToAdd]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yo, Marcos Roberto Leite Junior.</Text>
      <Text style={styles.subTitle}>Add a new skill.</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#556"
        onChangeText={setSkillToAdd}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.77789}>
        <Text style={styles.buttonText} onPress={handleAddNewSkill}>
          Add
        </Text>
      </TouchableOpacity>

      {mySkills.length > 0 ? (
        <>
          <Text style={[styles.title, { marginTop: 47, marginBottom: 17 }]}>
            My Skills
          </Text>
          {console.log(mySkills)}
          {mySkills.map(skill => (
            <TouchableOpacity
              key={skill}
              style={styles.skillButton}
              activeOpacity={0.77789}>
              <Text style={styles.skillText}>{skill}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '800',
  },
  subTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 11,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 17,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
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
