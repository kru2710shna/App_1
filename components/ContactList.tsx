// components/ContactList.js

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      id: '1',
      name: 'John Smith',
      phoneNumber: '111-222-3333',
    },
    {
      id: '2',
      name: 'Harry Smith',
      phoneNumber: '999-819-8172',
    },
    // Add more contacts as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {contacts.map(({ id, name, phoneNumber }) => (
          <View key={id} style={styles.userCard}>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.phoneText}>{phoneNumber}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    paddingLeft: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textContainer: {
    flexDirection: 'column',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  phoneText: {
    fontSize: 16,
    color: '#666',
  },
});
