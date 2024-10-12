import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './app/config/Colors';
import Acceuil from './app/screen/Acceuil';
import Home from './app/screen/Home';
import Documentation from './app/screen/Documentation';
import DemarrageDiag from './app/screen/DemarrageDiag';
import InformationDemo from './app/screen/InformationDemo';
import AntecedentMed from './app/screen/AntecedentMed';
import FacteursPers from './app/screen/FacteursPers';
import IndiceMC from './app/screen/IndiceMC';
import Confidentialite from './app/screen/Confidentialite';
import Summary from './app/screen/Summary';


const Stack = createStackNavigator();

export default function App() {
  const [userData, setUserData] = useState({});

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Acceuil">
          <Stack.Screen name="Acceuil">
            {(props) => <Acceuil {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen name="Confidentialite">
            {(props) => <Confidentialite {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Home"
            //options={{ headerLeft: null }}
            >
            {(props) => <Home {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="DemarrageDiag"
            options={{ 
              headerShown: null,

             }}
          >
            {(props) => <DemarrageDiag {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="InformationDemo"
            options={
              {
                headerShown: null
              }
            }
          >
            {(props) => <InformationDemo {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen 
          name="AntecedentMed"
          options={
            {
              headerShown: null
            }
          }
          >
            {(props) => <AntecedentMed {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen 
          name="FacteursPers"
          options={
            {
              headerShown: null
            }
          }
          >
            {(props) => <FacteursPers {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen 
          name="IndiceMC"
          options={
            {
              headerShown: null
            }
          }
          >
            {(props) => <IndiceMC {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Summary"
            options={
              {
                headerShown: null
              }
          }
          >
            {(props) => <Summary {...props} userData={userData} />}
          </Stack.Screen>
          <Stack.Screen name="Documentation" component={Documentation} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
