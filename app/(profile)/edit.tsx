import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import PageContainer from '../../components/PageContainer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';

export default function EditProfileScreen() {
  const [name, setName] = useState('João Silva');
  const [email, setEmail] = useState('joao.silva@example.com');
  const [phone, setPhone] = useState('(11) 98765-4321');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.back();
    }, 1000);
  };

  return (
    <PageContainer scrollable keyboardAvoiding>
      <View style={styles.container}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.avatar}
          />
          <View style={styles.avatarOverlay}>
            <Text style={styles.avatarText}>Alterar foto</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.form}>
          <Input
            label="Nome Completo"
            value={name}
            onChangeText={setName}
            placeholder="Seu nome"
          />
          
          <Input
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholder="Seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Input
            label="Telefone"
            value={phone}
            onChangeText={setPhone}
            placeholder="Seu telefone"
            keyboardType="phone-pad"
          />
          
          <Button
            title="Salvar Alterações"
            onPress={handleSave}
            isLoading={isLoading}
            style={styles.saveButton}
          />
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
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginVertical: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    alignItems: 'center',
  },
  avatarText: {
    color: Colors.neutral.white,
    fontSize: 14,
    fontWeight: '500',
  },
  form: {
    flex: 1,
  },
  saveButton: {
    marginTop: 24,
  },
});