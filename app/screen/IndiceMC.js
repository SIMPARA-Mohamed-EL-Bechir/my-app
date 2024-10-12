import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../config/Colors';
import AppButton from '../components/AppButton';

function IndiceMC({ navigation, userData, setUserData }) {
  const [height, setHeight] = useState(userData.height || '');
  const [weight, setWeight] = useState(userData.weight || '');
  const [bmi, setBmi] = useState(userData.bmi || '');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmi);
      return bmi; 
    }
    return null;
  };

  const handleNext = () => {
    const bmiValue = calculateBMI();
    setUserData({ ...userData, height, weight, bmi: bmiValue });
    navigation.navigate('Summary', { userData: { ...userData, height, weight, bmi: bmiValue } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDICE DE MASSE CORPORELLE</Text>
      <View style={styles.contenue}>

      </View>
      <TextInput
        style={styles.input}
        placeholder="Taille (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Poids (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <AppButton title="Calculer IMC" onPress={calculateBMI} />
      {bmi ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Votre IMC est: {bmi}</Text>
        </View>
      ) : null}
      <View style={styles.buttonContainer}>
                    <AppButton 
                    title="TERMINER" 
                    onPress={handleNext} 
                    style={styles.secondaryButton} 
                    textStyle={styles.secondaryButtonText} 
                    />
                    <AppButton 
                    title='←'
                    onPress={() => navigation.goBack()}
                    style={styles.primaryButton}
                    textStyle={styles.primaryButtonText} 
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
    backgroundColor: Colors.background,
    padding: 20,
    marginTop:-80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: Colors.textcolor,
},
  contenue: {
    padding: 10,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    marginTop:80,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: Colors.bordercolor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
    marginTop: 150,
    justifyContent:'space-between'

  },
  primaryButton:{
  },
  primaryButtonText:{
    fontSize: 50,
    marginTop:-30,
  },
  secondaryButton: {
    backgroundColor: Colors.primary,
    
  },
  secondaryButtonText: {
    color: Colors.white,
    fontSize: 25,
    marginTop:-5,
    justifyContent:'center',
  },
});

export default IndiceMC;
