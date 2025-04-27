import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import PageContainer from '../../components/PageContainer';
import Card from '../../components/Card';
import CourseCard from '../../components/CourseCard';
import { courseModules, courseTypes } from '../../utils/mockData';
import Colors from '../../constants/Colors';

export default function CourseModulesScreen() {
  const { courseId, title } = useLocalSearchParams<{ courseId: string; title: string }>();
  
  const getCourseColor = () => {
    const course = courseTypes.find(c => c.id === courseId);
    return course ? course.color : Colors.primary.blue;
  };
  
  const courseColor = getCourseColor();
  
  return (
    <PageContainer scrollable>
      <View style={styles.container}>
        <Card style={[styles.courseHeader, { borderLeftColor: courseColor }]}>
          <Text style={styles.courseTitle}>{title}</Text>
          <Text style={styles.courseDescription}>
            Este curso contém 5 módulos essenciais para sua formação profissional.
            Complete todos os módulos para receber seu certificado.
          </Text>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: '0%', backgroundColor: courseColor }]} />
          </View>
          <Text style={styles.progressText}>0 de 5 módulos concluídos</Text>
        </Card>

        <Text style={styles.sectionTitle}>Módulos do Curso</Text>
        
        <View style={styles.modulesContainer}>
          {courseModules.map((module) => (
            <CourseCard
              key={module.id}
              title={module.title}
              route={`/courses/content?moduleId=${module.id}&courseId=${courseId}&title=${encodeURIComponent(module.title)}`}
              color={courseColor}
            />
          ))}
        </View>
        
        <Card style={styles.infoCard}>
          <Text style={styles.infoTitle}>Materiais do Curso</Text>
          <View style={styles.materialItem}>
            <View style={[styles.materialIcon, { backgroundColor: Colors.primary.lightBlue }]}>
              <Text style={styles.materialIconText}>PDF</Text>
            </View>
            <View style={styles.materialInfo}>
              <Text style={styles.materialTitle}>Manual do Entregador</Text>
              <Text style={styles.materialDesc}>Guia completo com dicas e práticas</Text>
            </View>
          </View>
          <View style={styles.materialItem}>
            <View style={[styles.materialIcon, { backgroundColor: Colors.accent.lightPurple }]}>
              <Text style={styles.materialIconText}>VID</Text>
            </View>
            <View style={styles.materialInfo}>
              <Text style={styles.materialTitle}>Vídeos de Treinamento</Text>
              <Text style={styles.materialDesc}>Conteúdo complementar em vídeo</Text>
            </View>
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
  courseHeader: {
    marginVertical: 16,
    borderLeftWidth: 4,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.neutral.black,
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
    lineHeight: 24,
    marginBottom: 16,
  },
  progressContainer: {
    height: 8,
    backgroundColor: Colors.neutral.lightGray,
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: Colors.neutral.darkGray,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginTop: 24,
    marginBottom: 16,
  },
  modulesContainer: {
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
  materialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  materialIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  materialIconText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.neutral.darkGray,
  },
  materialInfo: {
    flex: 1,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral.black,
    marginBottom: 4,
  },
  materialDesc: {
    fontSize: 14,
    color: Colors.neutral.darkGray,
  },
});