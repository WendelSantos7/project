import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import PageContainer from '../../components/PageContainer';
import Card from '../../components/Card';
import CourseCard from '../../components/CourseCard';
import Colors from '../../constants/Colors';
import { courseTypes } from '../../utils/mockData';

export default function CourseSelectionScreen() {
  return (
    <PageContainer scrollable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Selecione um Curso</Text>
          <Text style={styles.subtitle}>
            Escolha o curso que melhor se adequa à sua área de atuação
          </Text>
        </View>

        <View style={styles.coursesContainer}>
          {courseTypes.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              route={`/courses/modules?courseId=${course.id}&title=${encodeURIComponent(course.title)}`}
              color={course.color}
            />
          ))}
        </View>
        
        <Card style={styles.infoCard}>
          <Text style={styles.infoTitle}>Por que fazer nossos cursos?</Text>
          <View style={styles.infoItem}>
            <View style={[styles.infoBullet, { backgroundColor: Colors.primary.blue }]} />
            <Text style={styles.infoText}>
              Conteúdo desenvolvido por especialistas
            </Text>
          </View>
          <View style={styles.infoItem}>
            <View style={[styles.infoBullet, { backgroundColor: Colors.secondary.red }]} />
            <Text style={styles.infoText}>
              Certificado de conclusão
            </Text>
          </View>
          <View style={styles.infoItem}>
            <View style={[styles.infoBullet, { backgroundColor: Colors.accent.purple }]} />
            <Text style={styles.infoText}>
              Acesso permanente ao material
            </Text>
          </View>
          <View style={styles.infoItem}>
            <View style={[styles.infoBullet, { backgroundColor: Colors.primary.blue }]} />
            <Text style={styles.infoText}>
              Conteúdo prático e aplicável
            </Text>
          </View>
        </Card>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.black,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
    lineHeight: 24,
  },
  coursesContainer: {
    marginBottom: 24,
  },
  infoCard: {
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  infoText: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
    flex: 1,
  },
});