import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define a type for the user state
interface User {
  username: string;
  email: string;
  followers: number;
  profileImage: string;
  isFollowing: boolean;
  bio: string;
}

interface Post {
  id: string;
  image: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User>({
    username: 'Yash Mhatre',
    email: 'ymhatre625@gmail.com',
    followers: 1000,
    profileImage: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/The-Eminence-in-Shadow-trailer.jpg',
    isFollowing: false,
    bio: 'Travel enthusiast | Photographer | Food lover',
  });

  const [posts, setPosts] = useState<Post[]>([
    // Dummy data for posts
    { id: '1', image: 'https://via.placeholder.com/150' },
    { id: '2', image: 'https://via.placeholder.com/150' },
    { id: '3', image: 'https://via.placeholder.com/150' },
    // Add more post data as needed
  ]);

  const profileImageScale = useRef(new Animated.Value(0)).current;
  const followButtonColor = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(profileImageScale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }, []);

  const handleFollowToggle = () => {
    setUser(prevState => {
      const isFollowing = !prevState.isFollowing;

      Animated.timing(followButtonColor, {
        toValue: isFollowing ? 1 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();

      return {
        ...prevState,
        isFollowing,
        followers: isFollowing ? prevState.followers + 1 : prevState.followers - 1,
      };
    });
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile' as never);
  };

  const interpolatedButtonColor = followButtonColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#007bff', '#6c757d'],
  });

  const renderPost = ({ item }: { item: Post }) => (
    <Image style={styles.postImage} source={{ uri: item.image }} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Animated.Image
          style={[styles.profileImage, { transform: [{ scale: profileImageScale }] }]}
          source={{ uri: user.profileImage }}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.followers}>{user.followers} Followers</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          <TouchableOpacity
            style={[styles.followButton,]}
            onPress={handleFollowToggle}
          >
            <Text style={styles.buttonText}>{user.isFollowing ? 'Following' : 'Follow'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.editProfileSection}>
        <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        numColumns={3}
        style={styles.postsGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetails: {
    marginLeft: 20,
    flex: 1,
    top:29,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  followers: {
    fontSize: 16,
    color: '#888',
  },
  bio: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    marginBottom: 10,
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editProfileSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  editProfileButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postsGrid: {
    flex: 1,
  },
  postImage: {
    width: '33%',
    height: 150,
    margin: 1,
  },
});

export default ProfilePage;
