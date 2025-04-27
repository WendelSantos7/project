import { Stack } from 'expo-router';
import React from 'react';
import Colors from '../../constants/Colors';

export default function CoursesLayout() {
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
        name="selection"
        options={{
          title: 'Selecione um Curso',
        }}
      />
      <Stack.Screen
        name="modules"
        options={{
          title: 'Módulos do Curso',
        }}
      />
      <Stack.Screen
        name="content"
        options={{
          title: 'Conteúdo do Módulo',
        }}
      />
      <Stack.Screen
        name="test"
        options={{
          title: 'Teste Final',
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}