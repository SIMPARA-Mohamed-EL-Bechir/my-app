import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Colors from '../config/Colors';
import AppButton from '../components/AppButton';

function Confidentialite({ navigation }) {

  const handleNext = () => {
      navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛡️ POLITIQUE DE CONFIDENTIALITÉ </Text>
      <Text style={styles.text}>
        Collecte de données : Nous respectons la confidentialité de vos données. Aucune information personnelle saisie dans l'application ne sera stockée ou partagée sans votre consentement.
      </Text>
      <Text style={styles.text}>
        Utilisation des données : Les informations collectées sont uniquement utilisées pour vous fournir des conseils personnalisés.
      </Text>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Accepter"
          onPress={handleNext}
          style={styles.secondaryButton}
          textStyle={styles.secondaryButtonText}
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
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.textcolor,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.textcolor,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    justifyContent: 'center', 
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 25,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButtonText: {
    color: Colors.white,
    fontSize: 18, 
  },
});

export default Confidentialite;