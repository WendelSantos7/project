import React from 'react';
import { Tabs } from 'expo-router';
import { Home, UserCircle, Info } from 'lucide-react-native';
import Colors from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.blue,
        tabBarInactiveTintColor: Colors.neutral.gray,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        headerStyle: {
          backgroundColor: Colors.primary.blue,
        },
        headerTintColor: Colors.neutral.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Meu Perfil',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <UserCircle size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color }) => <Info size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}