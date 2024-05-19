import * as React from "react";
import { Image } from "expo-image";
import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        contentFit="cover"
        source={require("../app/assets/undraw-adventure-map-hnin-21.png")}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.subtitleText}>
        Sign in to access your account
      </Text>
      <View style={styles.inputContainer}>
        <Image
          contentFit="cover"
          source={require("../app/assets/mail.png")}
          style={styles.icon}
        />
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          contentFit="cover"
          source={require("../app/assets/lock.png")}
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => router.navigate("(tabs)/home")}
      >
        <Text style={styles.buttonText}>Login</Text>
        <Image
          contentFit="cover"
          source={require("../app/assets/vector.png")}
          style={styles.buttonIcon}
        />
      </Pressable>
    
  
      <Text style={styles.forgetPasswordText}>
        Forget password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 260,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
  
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  rememberMeContainer: {
    marginTop: 20,
  },
  rememberMeText: {
    color: '#666',
  },
  registerContainer: {
    marginTop: 20,
  },
  registerText: {
    color: '#007BFF',
  },
  forgetPasswordText: {
    marginTop: 20,
    color: '#007BFF',
  },
});

export default Login;
