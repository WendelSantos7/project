import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Card from './Card';
import Colors from '../constants/Colors';

interface CourseCardProps {
  title: string;
  route: string;
  color?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  route,
  color = Colors.primary.blue 
}) => {
  return (
    <TouchableOpacity onPress={() => router.push(route)}>
      <Card style={[styles.card, { borderLeftColor: color }]}>
        <Text style={styles.title}>{title}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderLeftWidth: 4,
    paddingVertical: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral.darkGray,
  },
});

export default CourseCard;