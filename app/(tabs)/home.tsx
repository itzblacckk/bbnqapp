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
      imageUri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qu-z17y2ob_PwDhOWW3MYgHaEK%26pid%3DApi&f=1&ipt=f374ef73285ed6e1f612a9beafab0a4d7931577f1c3cf298654072aa0b5743a4&ipo=images',
      title: 'Card 1 Title',
      content: 'Content for Card 1...',
    },
    {
      id: 2,
      imageUri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ioQI1NlT-ynIqZPjUzWZlQHaEo%26pid%3DApi&f=1&ipt=7897f4c26b228522228cd096f4d8baa8892adef2e33668393a9f73ce0460815d&ipo=images',
      title: 'Card 2 Title',
      content: 'Content for Card 2...',
    },
    {
      id: 3,
      imageUri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sSQ6i6dsz2YQkpcEpej0HAHaDi%26pid%3DApi&f=1&ipt=ab8a30821ccf05a92f84a57855fc25ade12a6170de4c4fc4528b476d182b635d&ipo=images',
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
    backgroundColor: 'black',
  
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    top:20,
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
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
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
    top: 0,
    bottom: 0,
    left: 0,
    width: '80%', 
    backgroundColor: '#5de65d', 
    zIndex: 1,
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
