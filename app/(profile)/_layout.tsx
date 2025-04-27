import { Stack } from 'expo-router';
import React from 'react';
import Colors from '../../constants/Colors';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary.blue,
        },
        headerTintColor: Colors.neutral.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: Colors.neutral.white,
        },
      }}
    >
      <Stack.Screen
        name="edit"
        options={{
          title: 'Editar Perfil',
        }}
      />
    </Stack>
  );
}