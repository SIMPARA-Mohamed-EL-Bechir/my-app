import React, { useState, useMemo } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import RadioGroup from 'react-native-radio-buttons-group';
import Colors from '../config/Colors';
import AppButton from '../components/AppButton';

function FacteursPers({ navigation, userData, setUserData }) {
    const [statutMenopausique, setStatutMenopausique] = useState(userData.statutMenopausique || null);
    const [selectedDensity, setselectedDensity] = useState(userData.selectedDensity || null);
    
    const density = [
        {label:'Presque entièrement graisseux', value:'1'},
        {label:'Densités fibro-glandulaires dispersées', value:'2'},
        {label:'Densité hétérogène', value:'3'},
        {label:'Densité extrêmement élevée', value:'4'},
        {label:'Je ne sais pas', value:'9'},
    ]

    const radioButtonsStatutMenopausique = useMemo(() => ([
        { id: '1', label: 'Pré-ménopausée                                                         ', value: '0' },
        { id: '2', label: 'Post-ménopausée ou âge ≥ 55 ans                         ', value: '1' },
        { id: '3', label: 'Je ne sais pas                                                              ', value: '9' },
       
    ]), []);

    const handleNext = () => {
        const updatedUserData = {
            ...userData,
            selectedDensity,
            statutMenopausique,
        };
        setUserData(updatedUserData);
        navigation.navigate('IndiceMC', { userData: updatedUserData });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>FACTEURS PERSONNELS</Text>
            <View style={styles.contenue}>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Quel est votre type densité mammaire?</Text>
                    <Dropdown
                        style={styles.picker}
                        data={density}
                        labelField="label"
                        valueField="value"
                        placeholder="Sélectionner"
                        value={selectedDensity}
                        onChange={item => setselectedDensity(item.value)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Quel est votre statut menopausique ?</Text>
                    <RadioGroup
                        radioButtons={radioButtonsStatutMenopausique}
                        onPress={setStatutMenopausique}
                        selectedId={statutMenopausique}
                        layout='column'
                        
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
        marginTop:100,
    },
    contenue: {
      padding: 10,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      marginTop:60,
    },

    inputContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        color: Colors.bordercolor,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.bordercolor,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
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

export default FacteursPers;
