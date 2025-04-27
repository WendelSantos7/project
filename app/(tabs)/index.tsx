import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import PageContainer from '../../components/PageContainer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Colors from '../../constants/Colors';

export default function DashboardScreen() {
  return (
    <PageContainer scrollable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Bem-vindo ao</Text>
          <Text style={styles.title}>EasyRoute</Text>
        </View>
        
        <Card style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Treinamentos Disponíveis</Text>
          </View>
          <Text style={styles.cardDescription}>
            Prepare-se para sua jornada com nossos cursos especializados para profissionais de entrega e transporte.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/7706465/pexels-photo-7706465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
          <Button 
            title="Iniciar Curso" 
            onPress={() => router.push('/(courses)/selection')}
            variant="primary"
          />
        </Card>
        
        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Cursos</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={[styles.statValue, { color: Colors.secondary.red }]}>5</Text>
            <Text style={styles.statLabel}>Módulos/Curso</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={[styles.statValue, { color: Colors.accent.purple }]}>+15</Text>
            <Text style={styles.statLabel}>Horas</Text>
          </Card>
        </View>
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
  welcome: {
    fontSize: 18,
    color: Colors.neutral.darkGray,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary.blue,
    marginTop: 4,
  },
  infoCard: {
    marginBottom: 24,
  },
  cardHeader: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.neutral.black,
  },
  cardDescription: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
    lineHeight: 24,
    marginBottom: 16,
  },
  imageContainer: {
    height: 180,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    margin: 4,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary.blue,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.neutral.darkGray,
    textAlign: 'center',
  },
});