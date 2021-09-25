/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface Skill {
  id: string;
  skill: string;
}

export const Home = () => {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [greeting, setGreeting] = useState('');
  const textInput = useRef<TextInput>(null);

  function handleAddNewSkill() {
    if (skill === '') {
      return;
    }

    const newSkill = {
      id: String(new Date().getTime()),
      skill: skill,
    };

    if (textInput.current) {
      textInput.current.clear();
      setSkill('');
    }

    setSkills(prevSkills => [...prevSkills, newSkill]);
  }

  function handleRemoveSkill(id: string) {
    Alert.alert('Delete Skill', 'Are you sure you want to delete this skill?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () =>
          setSkills(myCurrentSkills =>
            myCurrentSkills.filter(item => item.id !== id),
          ),
        style: 'destructive',
      },
    ]);
  }

  useEffect(() => {
    const time = new Date().getHours();
    const isMorning = time < 12;
    const isAfternoon = time > 12 && time < 18;

    if (isMorning) {
      setGreeting('Good morning!');
    } else if (isAfternoon) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good night!');
    }
  }, []);

  const { container, title, greetings, subTitle, input } = styles;
  const hasSkills = skills.length !== 0;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <Text style={title}>Yo, Marcos Roberto Leite Junior.</Text>

        <Text style={greetings}>{greeting}</Text>

        <Text style={subTitle}>Add a new skill.</Text>
        <TextInput
          style={input}
          placeholder="New skill"
          placeholderTextColor="#556"
          onChangeText={setSkill}
          ref={textInput}
          autoCorrect={false}
        />

        <Button onPress={handleAddNewSkill} text="Add" />

        {hasSkills && (
          <Text style={[title, { marginTop: 47, marginBottom: 17 }]}>
            My Skills
          </Text>
        )}

        <FlatList
          data={skills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard
              onPress={() => handleRemoveSkill(item.id)}
              text={item.skill}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </TouchableWithoutFeedback>
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
