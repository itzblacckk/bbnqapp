import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';

const HomePage = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const colorScheme = useColorScheme();
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const cards = [
    {
      id: 1,
      imageUri: 'https://raw.githubusercontent.com/itzblacckk/myimgs/47499b8e2d4d80163761bf8bccc83e47e1f965a1/Rectangle%2016(1).svg',
      title: 'Card 1 Title',
      content: 'Content for Card 1...',
    },
    {
      id: 2,
      imageUri: 'https://raw.githubusercontent.com/itzblacckk/myimgs/47499b8e2d4d80163761bf8bccc83e47e1f965a1/Rectangle%2018.svg',
      title: 'Card 2 Title',
      content: 'Content for Card 2...',
    },
    {
      id: 3,
      imageUri: 'https://raw.githubusercontent.com/itzblacckk/myimgs/00b28916d0474da7ff34bb01a7cb9201601c523d/Rectangle.svg',
      title: 'Card 3 Title',
      content: 'Content for Card 3...',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar} style={{ display: 'flex', alignContent: 'center', height: 40 }}>
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
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
            <EvilIcons name="close" size={40} color="black" />
          </TouchableOpacity>
          <Image
            style={styles.sidebarImage}
            source={{ uri: 'https://otakuusamagazine.com/wp-content/uploads/2023/02/eminenceseason2.jpg' }}
          />
          <ScrollView>
            <TouchableOpacity onPress={() => router.navigate('(tabs)/home')}>
              <Text style={styles.sidebarItem}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('../screens/Menu')}>
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
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    top: 20,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height:2 },
    shadowOpacity: 3,
    shadowRadius: 8,
    // backgroundColor: '#fff'
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
    height: '30%'
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
    top: 35,
    bottom: 0,
    left: 0,
    zIndex: 100,
    width: '80%',
    backgroundColor: '#2eaf7d',
    padding: 20,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    fontSize: 20,
  },
  sidebarItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
    padding: 15,
    backgroundColor: '#02353c',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    borderRadius: 15,
  },
  sidebarImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  scrollbars: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default HomePage;
