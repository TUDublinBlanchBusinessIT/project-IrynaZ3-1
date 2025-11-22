import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function AddWorkout() {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const saveWorkout = async () => {
    await addDoc(collection(db, "workouts"), {
      type,
      duration: Number(duration),
      calories: Number(calories),
      createdAt: Timestamp.now()
    });
    alert("Workout saved!");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Workout Type</Text>
      <TextInput value={type} onChangeText={setType} />

      <Text>Duration (minutes)</Text>
      <TextInput value={duration} onChangeText={setDuration} keyboardType="numeric" />

      <Text>Calories Burned</Text>
      <TextInput value={calories} onChangeText={setCalories} keyboardType="numeric"/>

      <Button title="Save Workout" onPress={saveWorkout}/>
    </View>
  );
}
