import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import PageContainer from '../../components/PageContainer';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';

export default function AboutScreen() {
  return (
    <PageContainer scrollable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sobre o EasyRoute</Text>
          <Text style={styles.subtitle}>
            A plataforma de treinamento para profissionais de mobilidade
          </Text>
        </View>
        
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Nossa Missão</Text>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/6803489/pexels-photo-6803489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>
            O EasyRoute tem como missão fornecer treinamento de qualidade para profissionais de entrega e transporte,
            ajudando-os a desenvolver habilidades essenciais para suas carreiras e garantir um serviço de excelência.
          </Text>
        </Card>
        
        <View style={styles.statsRow}>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>10k+</Text>
            <Text style={styles.statLabel}>Usuários</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={[styles.statValue, { color: Colors.secondary.red }]}>3</Text>
            <Text style={styles.statLabel}>Cursos</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={[styles.statValue, { color: Colors.accent.purple }]}>4.8</Text>
            <Text style={styles.statLabel}>Avaliação</Text>
          </Card>
        </View>
        
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Nossos Cursos</Text>
          <Text style={styles.cardText}>
            Oferecemos cursos específicos para diferentes áreas de atuação, com conteúdo desenvolvido por especialistas
            e focado nas necessidades reais do mercado.
          </Text>
          <View style={styles.coursesList}>
            <View style={styles.courseItem}>
              <View style={[styles.courseIcon, { backgroundColor: Colors.primary.lightBlue }]}>
                <Text style={styles.courseIconText}>FC</Text>
              </View>
              <Text style={styles.courseTitle}>Entregador de Comida</Text>
            </View>
            <View style={styles.courseItem}>
              <View style={[styles.courseIcon, { backgroundColor: Colors.secondary.lightRed }]}>
                <Text style={styles.courseIconText}>EP</Text>
              </View>
              <Text style={styles.courseTitle}>Entregador de Produtos</Text>
            </View>
            <View style={styles.courseItem}>
              <View style={[styles.courseIcon, { backgroundColor: Colors.accent.lightPurple }]}>
                <Text style={styles.courseIconText}>MP</Text>
              </View>
              <Text style={styles.courseTitle}>Motorista Particular</Text>
            </View>
          </View>
        </Card>
        
        <Card style={styles.contactCard}>
          <Text style={styles.cardTitle}>Entre em Contato</Text>
          <Button
            title="Enviar E-mail"
            onPress={() => Linking.openURL('mailto:contato@easyroute.com')}
            style={styles.contactButton}
          />
          <Button
            title="Visite Nosso Site"
            variant="accent"
            onPress={() => Linking.openURL('https://easyroute.example.com')}
            style={styles.contactButton}
          />
        </Card>
        
        <Text style={styles.versionText}>Versão 1.0.0</Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary.blue,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
    textAlign: 'center',
    lineHeight: 24,
  },
  card: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginBottom: 12,
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
    lineHeight: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
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
  },
  coursesList: {
    marginTop: 16,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  courseIconText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.neutral.darkGray,
  },
  courseTitle: {
    fontSize: 16,
    color: Colors.neutral.black,
  },
  contactCard: {
    marginBottom: 24,
  },
  contactButton: {
    marginBottom: 8,
  },
  versionText: {
    textAlign: 'center',
    color: Colors.neutral.gray,
    marginBottom: 24,
  },
});