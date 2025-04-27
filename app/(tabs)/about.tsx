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
            Nossa plataforma foi desenvolvida pensando nas necessidades específicas dos profissionais do setor de mobilidade,
            oferecendo conteúdo prático e relevante para o dia a dia de trabalho.
          </Text>
        </Card>
        
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
              <View style={styles.courseContent}>
                <Text style={styles.courseTitle}>Entregador de Comida</Text>
                <Text style={styles.courseDescription}>
                  Curso completo focado em boas práticas de manipulação de alimentos, 
                  atendimento ao cliente, rotas eficientes e segurança alimentar. 
                  Ideal para profissionais que trabalham com delivery de refeições.
                </Text>
              </View>
            </View>
            
            <View style={styles.courseItem}>
              <View style={[styles.courseIcon, { backgroundColor: Colors.secondary.lightRed }]}>
                <Text style={styles.courseIconText}>EP</Text>
              </View>
              <View style={styles.courseContent}>
                <Text style={styles.courseTitle}>Entregador de Produtos</Text>
                <Text style={styles.courseDescription}>
                  Treinamento especializado em logística urbana, manuseio de mercadorias, 
                  documentação de entregas e otimização de rotas. Perfeito para 
                  profissionais do e-commerce e entregas expressas.
                </Text>
              </View>
            </View>
            
            <View style={styles.courseItem}>
              <View style={[styles.courseIcon, { backgroundColor: Colors.accent.lightPurple }]}>
                <Text style={styles.courseIconText}>MP</Text>
              </View>
              <View style={styles.courseContent}>
                <Text style={styles.courseTitle}>Motorista Particular</Text>
                <Text style={styles.courseDescription}>
                  Programa avançado com foco em excelência no atendimento, 
                  direção defensiva, conhecimento da cidade e protocolos de segurança. 
                  Desenvolvido para motoristas de aplicativos e serviços particulares.
                </Text>
              </View>
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
  coursesList: {
    marginTop: 24,
  },
  courseItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  courseIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  courseIconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.neutral.darkGray,
  },
  courseContent: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    color: Colors.neutral.darkGray,
    lineHeight: 20,
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