import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, TouchableOpacity, StyleSheet, Animated, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';


const Index = () => {
  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.title}>Welcome To Home</Text>
      <Image
        resizeMode="cover"
        source={require("../app/assets/group-35.png")}
        style={styles.image}
      />
      <Pressable style={styles.button} onPress={() => router.navigate("login")}>
        <Text style={styles.buttonText}>START</Text>
      </Pressable>
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
    backgroundColor: '#fff',
    padding:60
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
   

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,

  },
});


