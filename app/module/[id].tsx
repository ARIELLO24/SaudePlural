import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const moduleContent = {
    intro: {
        title: 'INTRODUÇÃO',
        subtitle: 'Conhecendo os Conceitos',
        content: 'Aqui vai o conteúdo detalhado da Introdução. Explicação sobre orientação sexual, identidade de gênero, terminologias, etc.',
        color: '#FF0018',
    },
    uc1: {
        title: 'UC1',
        subtitle: 'A Luta Pelo Direito à Saúde',
        content: 'Conteúdo detalhado da UC1. Histórico da luta LGBTQIA+ pelo direito à saúde.',
        color: '#FFA52C',
    },
    uc2: {
        title: 'UC2',
        subtitle: 'Determinação Social de Saúde',
        content: 'Conteúdo detalhado da UC2. Como a orientação sexual e identidade de gênero influenciam na saúde.',
        color: '#FFFF41',
    },
    uc3: {
        title: 'UC3',
        subtitle: 'Política Nacional de Saúde',
        content: 'Conteúdo detalhado da UC3. Detalhes sobre a Política Nacional de Saúde Integral LGBTQIA+.',
        color: '#008018',
    },
    uc4: {
        title: 'UC4',
        subtitle: 'Plano Operacional',
        content: 'Conteúdo detalhado da UC4. Implementação prática da política nacional.',
        color: '#0000F9',
    },
    uc5: {
        title: 'UC5',
        subtitle: 'Plano Operacional (Cont.)',
        content: 'Conteúdo detalhado da UC5. Continuação do plano operacional e estudos de caso.',
        color: '#86007D',
    },
};

export default function ModuleDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    // Fallback se o id não for encontrado ou for inválido
    const moduleData = moduleContent[id as keyof typeof moduleContent] || {
        title: 'Módulo não encontrado',
        subtitle: '',
        content: 'O conteúdo deste módulo não está disponível.',
        color: Colors.primary,
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={Colors.rainbow as any}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.background}
            />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{moduleData.title}</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <View style={[styles.cardHeader, { backgroundColor: moduleData.color }]}>
                        <Text style={styles.cardTitle}>{moduleData.title}</Text>
                        <Text style={styles.cardSubtitle}>{moduleData.subtitle}</Text>
                    </View>

                    <View style={styles.cardBody}>
                        <Text style={styles.content}>{moduleData.content}</Text>

                        <Text style={styles.placeholderText}>
                            (Este é um texto simulado. O conteúdo real do curso seria inserido aqui, com vídeos, imagens e textos explicativos.)
                        </Text>
                    </View>
                </View>
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
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    backButton: {
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    scrollContent: {
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        minHeight: 400,
    },
    cardHeader: {
        padding: 20,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    cardSubtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'center',
    },
    cardBody: {
        padding: 20,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        marginBottom: 20,
    },
    placeholderText: {
        fontSize: 14,
        color: '#999',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
    },
});
