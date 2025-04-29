import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import PageContainer from '../../components/PageContainer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { courseModules, courseTypes } from '../../utils/mockData';
import Colors from '../../constants/Colors';

export default function CourseContentScreen() {
  const { moduleId, courseId, title } = useLocalSearchParams<{ 
    moduleId: string; 
    courseId: string;
    title: string;
  }>();
  
  const module = courseModules.find(m => m.id === moduleId);
  
  const getCourseColor = () => {
    const course = courseTypes.find(c => c.id === courseId);
    return course ? course.color : Colors.primary.blue;
  };
  
  const handleLinkPress = () => {
    if (module?.link) {
      Linking.openURL(module.link);
    }
  };
  
  const handleTestPress = () => {
    router.push({
      pathname: "/(courses)/test",
      params: {
        courseId: courseId,
        moduleId: moduleId
      }
    });
  };
  
  const courseColor = getCourseColor();
  
  if (!module) {
    return (
      <PageContainer>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Módulo não encontrado.</Text>
          <Button
            title="Voltar aos Módulos"
            onPress={() => router.back()}
          />
        </View>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer scrollable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{module.title}</Text>
        </View>
        
        <Card style={styles.contentCard}>
          <Text style={styles.contentText}>{module.content}</Text>
          
          <TouchableOpacity onPress={handleLinkPress} style={styles.linkContainer}>
            <Text style={[styles.link, { color: courseColor }]}>Material Complementar</Text>
          </TouchableOpacity>
          
          <View style={styles.buttonsContainer}>
            <Button
              title="Fazer Teste Final"
              variant={courseId === 'food' ? 'primary' : courseId === 'products' ? 'secondary' : 'accent'}
              onPress={handleTestPress}
            />
          </View>
        </Card>
        
        <Card style={styles.navigationCard}>
          <Text style={styles.navigationTitle}>Navegação do Módulo</Text>
          
          <View style={styles.moduleNavigation}>
            {courseModules.map((mod, index) => (
              <View 
                key={mod.id} 
                style={[
                  styles.moduleIndicator, 
                  mod.id === moduleId && { backgroundColor: courseColor }
                ]}
              >
                <Text 
                  style={[
                    styles.moduleIndicatorText,
                    mod.id === moduleId && { color: Colors.neutral.white }
                  ]}
                >
                  {index + 1}
                </Text>
              </View>
            ))}
          </View>
          
          <View style={styles.navigationButtons}>
            <Button
              title="Anterior"
              variant="primary"
              style={[styles.navButton, { opacity: parseInt(moduleId) <= 1 ? 0.5 : 1 }]}
              disabled={parseInt(moduleId) <= 1}
              onPress={() => {
                const prevId = (parseInt(moduleId) - 1).toString();
                const prevModule = courseModules.find(m => m.id === prevId);
                if (prevModule) {
                  router.push({
                    pathname: "/(courses)/content",
                    params: {
                      moduleId: prevId,
                      courseId: courseId,
                      title: title,
                    }
                  });
                  }
              }}
            />
            <Button
              title="Próximo"
              variant="primary"
              style={[styles.navButton, { opacity: parseInt(moduleId) >= courseModules.length ? 0.5 : 1 }]}
              disabled={parseInt(moduleId) >= courseModules.length}
              onPress={() => {
                const nextId = (parseInt(moduleId) + 1).toString();
                const nextModule = courseModules.find(m => m.id === nextId);
                if (nextModule) {
                  router.push({
                    pathname: "/(courses)/content",
                    params: {
                      moduleId: nextId,
                      courseId: courseId,
                      title: title,
                    }
                  });
                  }
              }}
            />
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
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.black,
  },
  contentCard: {
    marginBottom: 16,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.neutral.darkGray,
    marginBottom: 20,
  },
  linkContainer: {
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    marginTop: 8,
  },
  navigationCard: {
    marginBottom: 24,
  },
  navigationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    marginBottom: 16,
  },
  moduleNavigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  moduleIndicator: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.neutral.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  moduleIndicatorText: {
    fontWeight: '600',
    color: Colors.neutral.darkGray,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 18,
    color: Colors.secondary.red,
    marginBottom: 16,
  },
});