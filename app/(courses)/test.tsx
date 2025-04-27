import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import PageContainer from '../../components/PageContainer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { testQuestions, courseTypes } from '../../utils/mockData';
import Colors from '../../constants/Colors';

export default function TestScreen() {
  const { courseId, moduleId } = useLocalSearchParams<{ courseId: string; moduleId: string }>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(testQuestions.length).fill(-1));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  const getCourseColor = () => {
    const course = courseTypes.find(c => c.id === courseId);
    return course ? course.color : Colors.primary.blue;
  };
  
  const courseColor = getCourseColor();
  
  const handleSelectAnswer = (index: number) => {
    if (isSubmitted) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = index;
    setSelectedAnswers(newAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const calculateScore = () => {
    let correctAnswers = 0;
    
    testQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    return Math.round((correctAnswers / testQuestions.length) * 100);
  };
  
  const handleSubmitTest = () => {
    // Check if all questions are answered
    if (selectedAnswers.includes(-1)) {
      Alert.alert(
        "Teste Incompleto",
        "Por favor, responda todas as perguntas antes de enviar o teste.",
        [{ text: "OK" }]
      );
      return;
    }
    
    const finalScore = calculateScore();
    setScore(finalScore);
    setIsSubmitted(true);
  };
  
  const handleFinishTest = () => {
    router.replace('/(tabs)');
  };
  
  // Current question data
  const question = testQuestions[currentQuestion];
  
  // If the test has been submitted, show results
  if (isSubmitted) {
    return (
      <PageContainer scrollable>
        <View style={styles.container}>
          <Card style={styles.resultCard}>
            <Text style={styles.resultTitle}>Resultado do Teste</Text>
            
            <View style={styles.scoreContainer}>
              <Text style={[styles.scoreText, { color: score >= 70 ? Colors.primary.blue : Colors.secondary.red }]}>
                {score}%
              </Text>
              <Text style={styles.scoreLabel}>
                {score >= 70 ? 'Aprovado!' : 'Tente novamente'}
              </Text>
            </View>
            
            <Text style={styles.resultMessage}>
              {score >= 70 
                ? 'Parabéns! Você completou este módulo com sucesso.'
                : 'Você não atingiu a pontuação mínima de 70% para passar neste teste. Revise o conteúdo e tente novamente.'}
            </Text>
            
            <Button
              title={score >= 70 ? "Continuar" : "Tentar Novamente"}
              variant={score >= 70 ? "primary" : "secondary"}
              onPress={handleFinishTest}
              style={styles.resultButton}
            />
          </Card>
          
          <Card style={styles.answersReviewCard}>
            <Text style={styles.reviewTitle}>Revisão de Respostas</Text>
            
            {testQuestions.map((q, index) => (
              <View key={index} style={styles.reviewItem}>
                <Text style={styles.reviewQuestion}>
                  {index + 1}. {q.question}
                </Text>
                <Text style={styles.reviewAnswer}>
                  Sua resposta: {q.options[selectedAnswers[index]]}
                </Text>
                <Text 
                  style={[
                    styles.reviewCorrect,
                    { color: selectedAnswers[index] === q.correctAnswer ? Colors.primary.blue : Colors.secondary.red }
                  ]}
                >
                  {selectedAnswers[index] === q.correctAnswer 
                    ? '✓ Correto' 
                    : `✗ Incorreto. A resposta correta é: ${q.options[q.correctAnswer]}`}
                </Text>
              </View>
            ))}
          </Card>
        </View>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer scrollable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Teste Final</Text>
          <Text style={styles.subtitle}>Responda todas as perguntas para concluir o módulo</Text>
        </View>
        
        <View style={styles.progressContainer}>
          <View 
            style={[
              styles.progressBar, 
              { width: `${((currentQuestion + 1) / testQuestions.length) * 100}%`, backgroundColor: courseColor }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          Questão {currentQuestion + 1} de {testQuestions.length}
        </Text>
        
        <Card style={styles.questionCard}>
          <Text style={styles.questionText}>{question.question}</Text>
          
          <View style={styles.optionsContainer}>
            {question.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionItem,
                  selectedAnswers[currentQuestion] === index && { 
                    backgroundColor: courseColor + '20', 
                    borderColor: courseColor 
                  }
                ]}
                onPress={() => handleSelectAnswer(index)}
              >
                <View 
                  style={[
                    styles.optionIndicator,
                    selectedAnswers[currentQuestion] === index && { 
                      backgroundColor: courseColor,
                      borderColor: courseColor
                    }
                  ]}
                >
                  {selectedAnswers[currentQuestion] === index && (
                    <View style={styles.optionIndicatorInner} />
                  )}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>
        
        <View style={styles.navigation}>
          <Button
            title="Anterior"
            variant="primary"
            style={[styles.navButton, { opacity: currentQuestion === 0 ? 0.5 : 1 }]}
            disabled={currentQuestion === 0}
            onPress={handlePrevQuestion}
          />
          
          {currentQuestion === testQuestions.length - 1 ? (
            <Button
              title="Finalizar"
              variant="accent"
              style={styles.navButton}
              onPress={handleSubmitTest}
            />
          ) : (
            <Button
              title="Próximo"
              variant="primary"
              style={styles.navButton}
              onPress={handleNextQuestion}
            />
          )}
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
    marginVertical: 16,
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
    marginBottom: 16,
  },
  questionCard: {
    marginBottom: 24,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginBottom: 24,
    lineHeight: 26,
  },
  optionsContainer: {
    marginBottom: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.neutral.gray,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.neutral.gray,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionIndicatorInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.neutral.white,
  },
  optionText: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
    flex: 1,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  resultCard: {
    marginVertical: 16,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.black,
    marginBottom: 24,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 18,
    color: Colors.neutral.darkGray,
  },
  resultMessage: {
    fontSize: 16,
    color: Colors.neutral.darkGray,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  resultButton: {
    minWidth: 200,
  },
  answersReviewCard: {
    marginBottom: 24,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginBottom: 16,
  },
  reviewItem: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.lightGray,
    paddingVertical: 12,
  },
  reviewQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral.black,
    marginBottom: 8,
  },
  reviewAnswer: {
    fontSize: 14,
    color: Colors.neutral.darkGray,
    marginBottom: 4,
  },
  reviewCorrect: {
    fontSize: 14,
    fontWeight: '500',
  },
});