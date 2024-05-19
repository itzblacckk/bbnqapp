import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const ProfilePage = () => {
  // Sample user data (replace with actual user data)
  const user = {
    username: 'Yash Mhatre',
    email: 'ymhatre625@gmail.com',
    followers: 1000,
    profileImage: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/The-Eminence-in-Shadow-trailer.jpg' // Replace with actual profile image URI
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profileImage} source={{ uri: user.profileImage }} />
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.followers}>{user.followers} Followers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  profile: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 10,
  },
  followers: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProfilePage;
