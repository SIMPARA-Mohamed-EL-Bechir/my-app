import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Colors from '../config/Colors';
import AppButton from '../components/AppButton';

function InformationDemo({ navigation, userData, setUserData }) {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(userData.selectedAgeGroup || null);
  const [selectedRaceEthnicity, setSelectedRaceEthnicity] = useState(userData.selectedRaceEthnicity || null);

  const ageGroups = [
    { label: '35-39', value: '1' },
    { label: '40-44', value: '2' },
    { label: '45-49', value: '3' },
    { label: '50-54', value: '4' },
    { label: '55-59', value: '5' },
    { label: '60-64', value: '6' },
    { label: '65-69', value: '7' },
    { label: '70-74', value: '8' },
    { label: '75-79', value: '9' },
    { label: '80-84', value: '10' },
  ];

  const raceEthnicities = [
    { label: 'Blanc', value: '1' },
    { label: 'Asiatique/Insulaire du Pacifique', value: '2' },
    { label: 'Noir', value: '3' },
    { label: 'Amérindien', value: '4' },
    { label: 'Autre/Mixte', value: '5' },
    { label: 'Je ne sais pas', value: '9' },
  ];

  const handleNext = () => {
    setUserData({ ...userData, selectedAgeGroup, selectedRaceEthnicity });
    navigation.navigate('AntecedentMed', { userData: { ...userData, selectedAgeGroup, selectedRaceEthnicity } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INFORMATIONS DEMOGRAPHIQUES</Text>
      <View style={styles.contenue}>
      <View style={styles.pickers}>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>GROUPE D'ÂGE</Text>
          <Dropdown
            style={styles.picker}
            data={ageGroups}
            labelField="label"
            valueField="value"
            placeholder="Sélectionner"
            value={selectedAgeGroup}
            onChange={item => setSelectedAgeGroup(item.value)}
          />
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>QUEL EST VOTRE RACE/ETHNIE</Text>
          <Dropdown
            style={styles.picker}
            data={raceEthnicities}
            labelField="label"
            valueField="value"
            placeholder="Sélectionner"
            value={selectedRaceEthnicity}
            onChange={item => setSelectedRaceEthnicity(item.value)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton 
          title="→" 
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
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 10,
    
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
    flexDirection:'column'
  },
  pickers: {
    marginTop: 40,
    background: Colors.textBackground,
  },
  pickerContainer: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.textcolor,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: Colors.bordercolor,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
    marginTop: 100,
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
    fontSize: 50,
    marginTop:-30,
  },
});

export default InformationDemo;
