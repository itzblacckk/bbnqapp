import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';
import { HoverEffect } from 'react-native-gesture-handler';

const HomePage = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const cards = [
    {
      id: 1,
      imageUri: 'https://img.freepik.com/free-vector/graphic-design-geometric-wallpaper_52683-34399.jpg?size=626&ext=jpg&ga=GA1.1.1311217063.1713921632&semt=sph',
      title: 'Card 1 Title',
      content: 'Content for Card 1...',
    },
    {
      id: 2,
      imageUri: 'https://img.freepik.com/free-vector/flat-design-polygonal-background_23-2148898663.jpg?w=1380&t=st=1716299695~exp=1716300295~hmac=e6d694d0658f8d880e304ff7887bf9bb448284614faf860f32172c39d6ed9110',
      title: 'Card 2 Title',
      content: 'Content for Card 2...',
    },
    {
      id: 3,
      imageUri: 'https://img.freepik.com/free-vector/flat-geometric-poster_1361-4216.jpg?w=1380&t=st=1716299744~exp=1716300344~hmac=2d63f00d0fdeb74e5e7ec32b43e7e3c1f0e1748087c2d0a41ea057073c4678f9',
      title: 'Card 3 Title',
      content: 'Content for Card 3...',
    },

  ];

  return (
    <View  style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar} style={{ display: 'flex', alignContent: 'center', height: 40, }}>
          <EvilIcons name="navicon" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('profile')}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://otakuusamagazine.com/wp-content/uploads/2023/02/eminenceseason2.jpg'}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {cards.map(card => (
          <View key={card.id} style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{ uri: card.imageUri }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text>{card.content}</Text>
              <Text style={styles.moreLink}>More</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {showSidebar && (
        <View style={styles.sidebar}>
          <Image
            style={styles.sidebarImage}
            source={{uri: 'https://otakuusamagazine.com/wp-content/uploads/2023/02/eminenceseason2.jpg'}}
          />
          <TouchableOpacity onPress={() => router.navigate('')}>
            <Text style={styles.sidebarItem}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('Home')}>
            <Text style={styles.sidebarItem}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('Home')}>
            <Text style={styles.sidebarItem}>Member Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('Home')}>
            <Text style={styles.sidebarItem}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('Home')}>
            <Text style={styles.sidebarItem}>Authentication</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('Home')}>
            <Text style={styles.sidebarItem}>Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('About')}>
            <Text style={styles.sidebarItem}>Components</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('Settings')}>
            <Text style={styles.sidebarItem}>Help</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    top:0,
    zIndex: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#5de65d',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sidebarButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green', 
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    height: '30%',
    shadowOffset: { width: 2.5, height: 2 },
    shadowColor: '#000',
    shadowRadius: 20,
    shadowOpacity: 30,
  },
  cardImage: {
    width: '100%',
    height: 120,
    marginRight: 10,
    borderRadius: 5,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreLink: {
    color: 'blue',
    marginTop: 5,
  },
  sidebar: {
    position: 'absolute',
    top: 60,
    bottom: 0,
    left: 0,
    width: '80%', 
    backgroundColor: '#5de65d', 
    zIndex: 150,
    padding: 20,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  sidebarItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333', 
    padding: 15,
    backgroundColor: 'lightgreen',
  },
  sidebarImage: {
    width: 150, 
    height: 150, 
    marginBottom: 20, 
    borderRadius: 75, 
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
});


export default HomePage;
