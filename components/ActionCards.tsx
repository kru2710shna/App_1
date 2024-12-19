// components/ActionCards.js

import React from 'react';
import { StyleSheet, Text, View, Linking, ScrollView, TouchableOpacity, Image } from 'react-native';

// Reusable ActionCard Component
const ActionCard = ({ title, description, imageUri, websiteLink }: any) => {
  const openWebsite = () => {
    Linking.canOpenURL(websiteLink)
      .then((supported) => {
        if (supported) {
          Linking.openURL(websiteLink);
        } else {
          console.log("Don't know how to open URI: " + websiteLink);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <TouchableOpacity style={[styles.card, styles.elevated]} onPress={openWebsite} activeOpacity={0.8}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <TouchableOpacity onPress={openWebsite} style={styles.button}>
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const ActionCards = () => {
  // Sample data for the cards
  const blogData = [
    {
      id: 1,
      title: "What's Up!",
      description: "Stay updated with the latest trends and news.",
      imageUri: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
      websiteLink: 'https://example.com/blog1',
    },
    {
      id: 2,
      title: "Tech Insights",
      description: "Dive deep into the world of technology.",
      imageUri: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
      websiteLink: 'https://example.com/blog2',
    },
    {
      id: 3,
      title: "Health & Wellness",
      description: "Tips and advice for a healthier lifestyle.",
      imageUri: 'https://images.pexels.com/photos/4056726/pexels-photo-4056726.jpeg',
      websiteLink: 'https://example.com/blog3',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Cards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {blogData.map((blog) => (
          <ActionCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            imageUri={blog.imageUri}
            websiteLink={blog.websiteLink}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  card: {
    width: 250,
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
  },
  elevated: {
    backgroundColor: '#fff',
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android Elevation
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ActionCards;
