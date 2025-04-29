import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import PageContainer from '../../components/PageContainer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{name?: string; email?: string; phone?: string; password?: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: {name?: string; email?: string; phone?: string; password?: string} = {};
    
    if (!name) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!phone) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\d{10,11}$/.test(phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone inválido';
    }
    
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (!/^\d{10,11}$/.test(password.replace(/\D/g, ''))) {
      newErrors.password = 'Senha inválida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validate()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        router.replace('/(tabs)');
      }, 1000);
    }
  };


  return (
    <PageContainer scrollable keyboardAvoiding>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Criar Conta</Text>
          <Text style={styles.subtitle}>Preencha seus dados</Text>
        </View>
        
        <View style={styles.form}>
          <Input
            label="Nome Completo"
            placeholder="Seu nome"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            error={errors.name}
          />
          
          <Input
            label="E-mail"
            placeholder="Seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.email}
          />
          
          <Input
            label="Telefone"
            placeholder="Seu telefone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            error={errors.phone}
          />
          
          <Input
            label="Senha"
            placeholder="Sua Senha"
            value={password}
            onChangeText={setPassword}
            keyboardType="visible-password"
            error={errors.password}
          />

          <Button 
            title="Cadastrar" 
            onPress={handleRegister}
            isLoading={isLoading}
            variant="accent"
          />
          
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Já tem uma conta?</Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text style={styles.loginLink}>Faça login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.accent.purple,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
  },
  form: {
    width: '100%',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: Colors.neutral.darkGray,
  },
  loginLink: {
    color: Colors.primary.blue,
    marginLeft: 5,
    fontWeight: '600',
  },
});