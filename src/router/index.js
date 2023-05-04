import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Beranda from '../pages/Beranda';
import ActionBarImage from '../components/ActionBarImage';
import Splashscreen from '../pages/Splashscreen';

const Stackhome = createNativeStackNavigator();

function Home() {
  return (
    <Stackhome.Navigator
    initialRouteName="Beranda"
    screenOptions={{
      title: 'Tugas Kelompok',
      headerBackTitleVisible: true,
        headerTintColor: '#112754',
      headerLeft: () => <ActionBarImage />}}
    >
      <Stackhome.Screen name="Beranda"component={Beranda}/>
    </Stackhome.Navigator>
  )
}

const Stackrouter = createNativeStackNavigator();

const Router = () => {
  return (
    <Stackrouter.Navigator
    screenOptions={{ headerShown: false }}
    >
      <Stackrouter.Screen name="Splashscreen" component={Splashscreen} />
      <Stackrouter.Screen name="Home" component={Home}/>
    </Stackrouter.Navigator>
  );
};

export default Router;
