import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const modules = [
  {
    id: 'intro',
    title: 'INTRODUÇÃO',
    description: 'Conhecendo os Conceitos de Orientação Sexual e Identidade de Gênero + Terminologias e Identidade',
    color: '#FF0018', // Red
  },
  {
    id: 'uc1',
    title: 'UC1',
    description: 'A Luta Pelo Direito à Saúde LGBTQIA+',
    color: '#FFA52C', // Orange
  },
  {
    id: 'uc2',
    title: 'UC2',
    description: 'Orientação Sexual e Identidade de Gênero na Determinação Social de Saúde Integral LGBTQIA+',
    color: '#FFFF41', // Yellow
  },
  {
    id: 'uc3',
    title: 'UC3',
    description: 'Política Nacional de Saúde Integral LGBTQIA+',
    color: '#008018', // Green
  },
  {
    id: 'uc4',
    title: 'UC4',
    description: 'Plano Operacional da Política Nacional de Saúde Integral LGBTQIA+',
    color: '#0000F9', // Blue
  },
  {
    id: 'uc5',
    title: 'UC5',
    description: 'Plano Operacional da Política Nacional de Saúde Integral LGBTQIA+',
    color: '#86007D', // Violet
  },
];

export default function ResourcesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Colors.rainbow as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/LGB.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.headerTitle}>Saúde Plural</Text>
      </View>

      <View style={styles.userBar}>
        <Ionicons name="menu" size={24} color="#333" />
        <Text style={styles.userName}>Nome do usuário aqui</Text>
        <Ionicons name="person-circle-outline" size={28} color="#333" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {modules.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => router.push({ pathname: '/module/[id]', params: { id: item.id } })}
          >
            <View style={[styles.cardBorder, { backgroundColor: item.color }]} />
            <View style={styles.cardContent}>
              <Text style={[styles.cardTitle, { color: item.color }]}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
            <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
              <Ionicons name="list" size={24} color={item.color} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  userBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 30,
    marginBottom: 20,
  },
  userName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBorder: {
    width: 6,
    height: '100%',
  },
  cardContent: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  iconContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#eee',
  },
});
