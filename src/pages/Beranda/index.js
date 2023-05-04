import React, { useState, useEffect, } from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Myconfig } from '../../Myconfig';
import { ref, update, onValue } from "firebase/database";
import { Card, Title, Paragraph } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';

const Beranda = () => {
  const [lampu_led, setLampu] = useState();
  const [showAlertOff, setShowAlertOff] = useState(false);
  const [showAlertOn, setShowAlertOn] = useState(false);
  const [kecerahan, setKecerahan] = useState();

  useEffect(() => {
    const dbRef = ref(Myconfig, 'kecerahan');
    onValue(dbRef, (snapshot) => {
      const value = snapshot.val();
      setKecerahan(value);
    });
  }, []);

  const data = [{ x: 'Kecerahan', y: kecerahan }];

  useEffect(() => {
    return () => {
      setShowAlertOff(false);
      setShowAlertOn(false);
    };
  }, []);

  const hideAlert = () => {
    setShowAlertOff(false);
    setShowAlertOn(false);
  };

  const handleOnConfirmPressed = () => {
    hideAlert();
  };

  const ControlLampu = (lampu_led) => {
    update(ref(Myconfig), {
      relayState: lampu_led
    });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#cf0d73" />

      <Card style={styles.boxContainer}
        mode='elevated'>
        <Title style={styles.label}>
          LDR Sensor
        </Title>
        <Paragraph style={styles.Parag}>
          {/* Kecerahan: */}
          {kecerahan}</Paragraph>
      </Card>

      <Card style={styles.boxContainer}
        mode='elevated'
      >
        <Title style={styles.label}>
          Switch Lampu
        </Title>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, lampu_led === 0 && styles.activeButton]}
            onPress={() => {
              ControlLampu(0);
              setShowAlertOff(true);
            }}
          >
            <Text
              style={[styles.buttonText, lampu_led === 0 && styles.activeButtonText]}>
              OFF</Text>
          </TouchableOpacity>
          <AwesomeAlert
            show={showAlertOff}
            showProgress={true}
            title="Success!"
            message="Lampu berhasil dimatikan"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="OK"
            confirmButtonColor="#3a9f9f"
            onConfirmPressed={handleOnConfirmPressed}
            onCancelPressed={hideAlert}
          />
          <TouchableOpacity
            style={[styles.button, lampu_led === 1 && styles.activeButton]}
            onPress={() => {
              ControlLampu(1);
              setShowAlertOn(true);
            }}
          >
            <Text
              style={[styles.buttonText, lampu_led === 1 && styles.activeButtonText]}>
              ON</Text>
          </TouchableOpacity>
          <AwesomeAlert
            show={showAlertOn}
            showProgress={true}
            title="Success!"
            message="Lampu berhasil dinyalakan"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="OK"
            confirmButtonColor="#3a9f9f"
            onConfirmPressed={handleOnConfirmPressed}
            onCancelPressed={hideAlert}
          />
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 50,
    backgroundColor: '#f8f3f9',
  },
  boxContainer: {
    margin: 10,
    height: 160,
    backgroundColor: 'white',
  },
  label: {
    marginBottom: 5,
    marginTop: 15,
    textAlign: 'center',
    color: '#112754',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#3a9f9f',
    borderRadius: 25,
    margin: 20,
    flex: 1,
  },
  activeButton: {
    backgroundColor: '#1a237e',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  activeButtonText: {
    color: 'white',
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Parag: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 40,
    padding:20,
    fontWeight:'bold',
    color:'#112754',
  }
});

export default Beranda;
