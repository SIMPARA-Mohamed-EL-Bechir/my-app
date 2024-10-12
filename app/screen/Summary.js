import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../config/Colors';

function Summary({ navigation, userData  }) {

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>RÉCAPITULATIF DES DONNÉES</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>GROUPE ÂGE :</Text>
                <Text style={styles.value}>{
                    userData.selectedAgeGroup == 1 ? '35-39'
                    :userData.selectedAgeGroup ==2 ? '40-44'
                    :userData.selectedAgeGroup ==3 ? '45-49'
                    :userData.selectedAgeGroup ==4 ? '50-54'
                    :userData.selectedAgeGroup ==5 ? '55-59'
                    :userData.selectedAgeGroup ==6 ? '60-64'
                    :userData.selectedAgeGroup ==7 ? '65-69'
                    :userData.selectedAgeGroup ==8 ? '70-74'
                    :userData.selectedAgeGroup ==9 ? '75-79'
                    :userData.selectedAgeGroup ==10 ? '80-84'
                    :'Non renseigné'}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Race/Ethnie :</Text>
                <Text style={styles.value}>{
                    userData.selectedRaceEthnicity == 1 ? 'Blanc'
                    :userData.selectedRaceEthnicity ==2 ? 'Asiatique/Insulaire du Pacifique'
                    :userData.selectedRaceEthnicity ==3 ? 'Noir'
                    :userData.selectedRaceEthnicity ==4 ? 'Amérindien'
                    :userData.selectedRaceEthnicity ==5 ? 'Autre/Mixte'
                    :userData.selectedRaceEthnicity ==9 ? 'Inconnu'
                    :'Non renseigné'}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Age du premier accouchement</Text>
                <Text style={styles.value}>{
                    userData.selectedAgeFirst == 0 ? '0-29'
                    :userData.selectedAgeFirst ==1 ? '30+'
                    :userData.selectedAgeFirst ==2 ? 'Nullipare'
                    :userData.selectedAgeFirst ==9 ? 'Inconnu'
                    :'Non renseigné'}
                </Text>            
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nombre de Parent qui avait le Cancer de Sein</Text>
                <Text style={styles.value}>{
                    userData.selectedNrelbc == 0 ? 'Zero'
                    :userData.selectedNrelbc == 1 ? 'Un'
                    :userData.selectedNrelbc == 2 ? '2+'
                    :userData.selectedNrelbc == 9 ? 'Inconnu'
                    :'Non renseigné'}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Traitemet Hormonale substitutif</Text>
                <Text style={styles.value}>{
                    userData.selectedHrt == 0 ? 'Non'
                    :userData.selectedHrt == 1 ? 'Oui'
                    :userData.selectedHrt == 9 ? 'Inconnu'
                    :'Non renseigné'}
                </Text>
            </View>
         
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Types de THS utilisé</Text>
                <Text style={styles.value}>{
                    userData.selectedDensity == 1 ? 'Presque entièrement graisseux'
                    :userData.selectedDensity == 2 ? 'Densités fibro-glandulaires dispersées'
                    :userData.selectedDensity == 3 ? 'Densité hétérogène'
                    :userData.selectedDensity == 4 ? 'Densité extrêmement élevée'
                    :userData.selectedDensity == 9 ? 'Inconnu ou système de mesure différent'
                    :'Non renseigné'}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>STATUT MÉNOPAUSIQUE :</Text>
                <Text style={styles.value}>{
                    userData.statutMenopausique == 0 ? 'Pré-ménopausée'
                    :userData.statutMenopausique == 1 ? 'Post-ménopausée ou âge ≥ 55 ans'
                    :userData.statutMenopausique == 9 ? 'Inconnu'
                    :'Non renseigné'}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>IMC (Indice de Masse Corporelle) :</Text>
                <Text style={styles.value}>{(userData.weight / ((userData.height/100) * (userData.height/100))) || 'Non renseigné'}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>RETOUR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => {/* Action à définir */}}>
                    <Text style={[styles.buttonText, styles.secondaryButtonText]}>ENVOYER</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: Colors.textcolor,
    },
    infoContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        color: Colors.bordercolor,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        color: Colors.textcolor,
        marginVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 0,
        marginBottom:30,
    },
    button: {
        backgroundColor: Colors.secondary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '48%',
        marginTop: 0,
    },
    secondaryButton: {
        backgroundColor: Colors.primary,
    },
    buttonText: {
        color: Colors.textcolor,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    secondaryButtonText: {
        color: Colors.white,
    },
});

export default Summary;
