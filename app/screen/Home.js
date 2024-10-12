import React from 'react';
import { View, Image, StyleSheet, Text,TouchableOpacity,Linking } from 'react-native';
import Colors from '../config/Colors';


function Home({navigation}) {

  const handlePress = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL: ", err));
  };

    return (
        <View style={styles.body}>
        <View style={styles.container}>
            <View style={styles.doctorContainer}>
                <Image source={require('../assets/doctor1.png')} style={styles.doctorImage} />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.infoText}>
                Au Maroc, 1 femme sur 8 développera un cancer du sein, et 1 femme sur 36 en mourra. Cela montre l'importance de la détection précoce et de la sensibilisation, des actions cruciales pour lutter contre cette maladie fréquente et améliorer la santé publique.                  <View style={styles.reference}>
                    <TouchableOpacity onPress={() => handlePress('https://www.ligue-cancer.net/questce-que-le-cancer/les-types-de-cancer/cancer-du-sein')}>
                      <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                        [1]
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('https://www.hck.ma/fr/info-sante/infosante-octobre-rose-a-lhopital-cheikh-khalifa-e/?page=1')}>
                      <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                        [2]
                      </Text>
                    </TouchableOpacity>
                </View>
                </Text>
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DemarrageDiag')}>
                    <Text style={styles.buttonText}>ESTIMER LE RISQUE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('Documentation')}>
                    <Text style={[styles.buttonText, styles.secondaryButtonText]}>SE DOCUMENTER SUR LE RISQUE</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
        body:{
            backgroundColor:Colors.background,
            height:800,
        },
        container:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.background,
        },
        doctorContainer: {
          position: 'relative',
          width: 200,
          height: 300,
          alignItems: 'center',
          marginLeft: 0,
        },
        doctorImage: {
          width: 390,
          height: 350,
          borderRadius: 30,
        },
        reference:{
          flexDirection: 'row',
          alignItems: 'center',
        },
        buttonContainer: {
          width: 370,
          alignItems: 'center',
          marginTop: 30,
          backgroundColor: Colors.background,
          marginBottom: 10,
          marginLeft: 0,
          padding: 10,
          borderRadius: 15,
        },
        infoText: {
          fontSize: 19,
          textAlign: 'center',
          color: Colors.textcolor,
          marginBottom: 10,
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
        },
        buttonText: {
          color: Colors.white,
          fontSize: 18,
          textTransform: 'uppercase',
          fontWeight: 'bold',
        },
        secondaryButtonText: {
          color: Colors.textcolor,
        },
      
})

export default Home;