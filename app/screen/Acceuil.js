import React from 'react';
import { View, StyleSheet,Image,Text,TouchableOpacity, Linking } from 'react-native';
import Colors from '../config/Colors';

function Acceuil({navigation}) {

  const handlePress = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL: ", err));
  };

    return (
        <View style={styles.container}>
            <View style={styles.ribbonContainer}>
                <Image source={require('../assets/ribbon.png')} style={styles.ribbon} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>BIENVENUE</Text>
                <Text style={styles.descriptionText}>
                  Cette application a pour objectif de vous informer sur les facteurs de risque du cancer du sein et de vous aider à effectuer une auto-évaluation pour déterminer si vous présentez des risques potentiels. Elle ne remplace en aucun cas un avis médical professionnel.
                  <TouchableOpacity onPress={() => handlePress('https://www.ligue-cancer.net/questce-que-le-cancer/les-types-de-cancer/cancer-du-sein')}>
                      <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                        voir plus
                      </Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Confidentialite')}>
                    <Text style={styles.buttonText}>CONTINUER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        padding:5,
      },
      ribbonContainer: {
        marginVertical: 30,
      },
      ribbon: {
        width: 300,
        height: 400,
      },
      textContainer: {
        alignItems: 'center',
        marginVertical: 20,
      },
      welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.textcolor,
      },
      descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.textcolor,
      },
      buttonContainer: {
        width: 300,
        height:70,
        marginBottom: 0,
      },
      button:{
        backgroundColor: Colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:'100%',
        marginVertical: 10,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
})

export default Acceuil;