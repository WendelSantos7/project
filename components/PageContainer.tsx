import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, ViewProps, KeyboardAvoidingView, Platform } from 'react-native';
import Colors from '../constants/Colors';

interface PageContainerProps extends ViewProps {
  scrollable?: boolean;
  keyboardAvoiding?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  style, 
  scrollable = false,
  keyboardAvoiding = false,
  ...props 
}) => {
  const Container = scrollable ? ScrollView : View;
  
  const content = (
    <Container
      style={[styles.container, style]}
      contentContainerStyle={scrollable ? styles.scrollContent : undefined}
      {...props}
    >
      {children}
    </Container>
  );

  if (keyboardAvoiding) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          style={styles.keyboardAvoiding}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {content}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  keyboardAvoiding: {
    flex: 1,
  }
});

export default PageContainer;