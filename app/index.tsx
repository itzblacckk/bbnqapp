import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import './global.css';
import { LinearGradient } from 'expo-linear-gradient';


const Index = () => {
  
  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={['#c1f6ed', '#2eaf7d']}

          style={styles.inner}
        >
          <View style={styles.main}>
            <View style={styles.circle}>
              <Image
                resizeMode="cover"
                source={require("../app/assets/logo.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>Welcome To BBN Global</Text>
              <Text style={styles.paragraph}>
                We are delighted to have you join our dynamic community dedicated to empowering Brahman's
              </Text>
            </View>
          </View>
          <Pressable style={styles.button} onPress={()=>{ router.navigate('/login') }}>
            <Text style={styles.buttonText}>START</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '',
    padding: 0,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    // paddingVertical: 20,
    // paddingBottom: 40,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    marginBottom: 20,
    width: 160,
    height: 160,
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#02353c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  circle: {
    width: 160,
    height: 160,
    // backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
});


