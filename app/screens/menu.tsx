import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';

interface menu {
  id: number;
  imageUri: string;
  title: string;
  description: string;
}

const menu: React.FC = () => {
  const router = useRouter();

  const menu: menu[] = [
    {
      id: 1,
      imageUri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qu-z17y2ob_PwDhOWW3MYgHaEK%26pid%3DApi&f=1&ipt=f374ef73285ed6e1f612a9beafab0a4d7931577f1c3cf298654072aa0b5743a4&ipo=images',
      title: 'Menu Item 1',
      description: 'Description for menu item 1...',
    },
    {
      id: 2,
      imageUri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ioQI1NlT-ynIqZPjUzWZlQHaEo%26pid%3DApi&f=1&ipt=7897f4c26b228522228cd096f4d8baa8892adef2e33668393a9f73ce0460815d&ipo=images',
      title: 'Menu Item 2',
      description: 'Description for menu item 2...',
    },
    {
      id: 3,
      imageUri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sSQ6i6dsz2YQkpcEpej0HAHaDi%26pid%3DApi&f=1&ipt=ab8a30821ccf05a92f84a57855fc25ade12a6170de4c4fc4528b476d182b635d&ipo=images',
      title: 'Menu Item 3',
      description: 'Description for menu item 3...',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={{ display: 'flex', alignContent: 'center', height: 40 }}>
          <EvilIcons name="arrow-left" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
        <View style={{ width: 40 }} /> 
              </View>
      <ScrollView contentContainerStyle={styles.content}>
        {menu.map(item => (
          <View key={item.id} style={styles.menuItem}>
            <Image
              style={styles.menuItemImage}
              source={{ uri: item.imageUri }}
            />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    top: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#5de65d',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  menuItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
  },
  menuItemImage: {
    width: '100%',
    height: 120,
    marginRight: 10,
    borderRadius: 5,
  },
  menuItemContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default menu;
