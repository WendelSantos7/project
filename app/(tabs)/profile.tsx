import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import PageContainer from '../../components/PageContainer';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';

export default function ProfileScreen() {
  const handleLogout = () => {
    router.replace('/(auth)/login');
  };

  return (
    <PageContainer scrollable>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>João Silva</Text>
          <Text style={styles.email}>joao.silva@example.com</Text>
        </View>
        
        <Card style={styles.infoCard}>
          <Text style={styles.cardTitle}>Informações Pessoais</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <Text style={styles.infoValue}>João Silva</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>E-mail:</Text>
            <Text style={styles.infoValue}>joao.silva@example.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Telefone:</Text>
            <Text style={styles.infoValue}>(11) 98765-4321</Text>
          </View>
          <Button
            title="Editar Perfil"
            variant="primary"
            style={styles.editButton}
            onPress={() => router.push('/(profile)/edit')}
          />
        </Card>
        
        <Card style={styles.infoCard}>
          <Text style={styles.cardTitle}>Meus Cursos</Text>
          <View style={styles.courseItem}>
            <View style={[styles.courseBadge, { backgroundColor: Colors.primary.lightBlue }]}>
              <Text style={styles.courseBadgeText}>Em andamento</Text>
            </View>
            <Text style={styles.courseTitle}>Entregador de Comida</Text>
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, { width: '40%', backgroundColor: Colors.primary.blue }]} />
            </View>
            <Text style={styles.progressText}>2 de 5 módulos concluídos</Text>
          </View>
          
          <View style={styles.courseItem}>
            <View style={[styles.courseBadge, { backgroundColor: Colors.accent.lightPurple }]}>
              <Text style={styles.courseBadgeText}>Não iniciado</Text>
            </View>
            <Text style={styles.courseTitle}>Motorista Particular</Text>
          </View>
        </Card>

        <Button
          title="Sair"
          variant="secondary"
          onPress={handleLogout}
          style={styles.logoutButton}
        />
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: Colors.primary.blue,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.black,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
  },
  infoCard: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoLabel: {
    width: 80,
    fontSize: 16,
    color: Colors.neutral.darkGray,
    fontWeight: '500',
  },
  infoValue: {
    flex: 1,
    fontSize: 16,
    color: Colors.neutral.black,
  },
  editButton: {
    marginTop: 8,
  },
  courseItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.lightGray,
  },
  courseBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  courseBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.neutral.darkGray,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginBottom: 8,
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
  logoutButton: {
    marginTop: 8,
  },
});