import React from 'react';
import { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../config/Colors';
import { Dropdown } from 'react-native-element-dropdown';
import AppButton from '../components/AppButton';

function AntecedentMed({ navigation, userData, setUserData }) {
    

    const [selectedAgeFirst, setSelectedAgeFirst] = useState(userData.selectedAgeFirst || null);
    const [selectedNrelbc, setSelectedNrelbc] = useState(userData.selectedNrelbc || null);
    const [selectedHrt, setSelectedHrt] = useState(userData.setSelectedHrt || null);

    const ageFirst = [
        { label: '0-29', value: '0' },
        { label: '30+', value: '1' },
        { label: 'Nullipare', value: '2' },
        { label: 'Je ne sais pas', value: '9' },// ne sais pas
    ];

    const nrelbc = [
        { label: 'Zero', value: '0' },
        { label: 'Un', value: '1' },
        { label: '2+', value: '2' },
        { label: 'Je ne sais pas', value: '9' },
    ]

    const hrt = [
        { label: 'Non', value: '0' },
        { label: 'Oui', value: '1' },
        { label: 'Je ne sais pas', value: '9' },
    ]
    const handleNext = () => {
        setUserData({ ...userData, selectedAgeFirst, selectedNrelbc, selectedHrt });
        navigation.navigate('FacteursPers', { userData: { ...userData, selectedAgeFirst, selectedNrelbc, selectedHrt } });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ANTÉCÉDENTS MEDICAUX</Text>
            <View style={styles.contenue}>
                <View style={styles.questionContainer}>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Quel âge aviez-vous pour votre premier enfant ?</Text>
                        <Dropdown
                        style={styles.picker}
                        data={ageFirst}
                        labelField="label"
                        valueField="value"
                        placeholder="Sélectionner"
                        value={selectedAgeFirst}
                        onChange={item => setSelectedAgeFirst(item.value)}
                        />
                    </View>

                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Combien de membres de votre famille de 1er degré ont eu le cancer ?</Text>
                        <Dropdown
                            style={styles.picker}
                            data={nrelbc}
                            labelField="label"
                            valueField="value"
                            placeholder="Sélectionner"
                            value={selectedNrelbc}
                            onChange={item => setSelectedNrelbc(item.value)}
                        />
                    </View>

                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Suivez-vous actuellement un traitement hormonal substitutif (THS) ?</Text>
                        <Dropdown
                            style={styles.picker}
                            data={hrt}
                            labelField="label"
                            valueField="value"
                            placeholder="Sélectionner"
                            value={selectedHrt}
                            onChange={item => setSelectedHrt(item.value)}
                        />
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
        marginTop: 60,
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

export default AntecedentMed;
