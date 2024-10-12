import React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import Colors from '../config/Colors';
import AppButton from '../components/AppButton';

function DemarrageDiag({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View>
                    <Text>

                    </Text>
                </View>
                <Image 
                    source={require('../assets/diagnostic.png')} 
                    style={styles.diagnosticImage}
                />
            </View >
            <Text style={styles.avertissement}>
                ⚠️ Avertissement
                L'application ne remplace pas une consultation médicale avec un professionnel de santé. Les résultats obtenus à travers l'auto-évaluation sont uniquement à titre indicatif. Si vous avez des préoccupations concernant votre santé, veuillez consulter un médecin.
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InformationDemo')}>
                    <Text style={styles.buttonText}>COMMENCER</Text>
                </TouchableOpacity>
                <AppButton 
                    title='ANNULER'
                    onPress={() => navigation.goBack()}
                    style={styles.secondaryButton}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC0CB',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: Colors.textcolor,
    },
    imageContainer: {
        marginVertical: 40,
    },
    diagnosticImage: {
        width:375,
        height: 300,
        borderRadius:15,
    },
    avertissement:{
        fontSize: 19,
        textAlign: 'center',
        color: Colors.textcolor,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom:30,
    },
    button: {
        backgroundColor: Colors.primary, 
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    secondaryButton: {
        backgroundColor: Colors.secondary,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    secondaryButtonText: {
        color: Colors.textcolor,
    },
})


export default DemarrageDiag;