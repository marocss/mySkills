/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  skill: string;
}

export const Home = () => {
  const [skillToAdd, setSkillToAdd] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    if (skillToAdd === '') {
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      skill: skillToAdd,
    };

    setMySkills(myCurrentSkills => [...myCurrentSkills, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(myCurrentSkills =>
      myCurrentSkills.filter(item => item.id !== id),
    );
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning!');
    } else if (currentHour < 12 && currentHour < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good night!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yo, Marcos Roberto Leite Junior.</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <Text style={styles.subTitle}>Add a new skill.</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#556"
        onChangeText={setSkillToAdd}
      />

      <Button onPress={handleAddNewSkill} text="Add" />

      {mySkills.length !== 0 && (
        <Text style={[styles.title, { marginTop: 47, marginBottom: 17 }]}>
          My Skills
        </Text>
      )}

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            onPress={() => handleRemoveSkill(item.id)}
            text={item.skill}
          />
        )}
      />
    </View>
  );
};

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
  greetings: {
    marginTop: 7,
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  subTitle: {
    color: '#fff',
    fontSize: 13,
    marginTop: 11,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 17,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 29,
    borderRadius: 7,
  },
});
