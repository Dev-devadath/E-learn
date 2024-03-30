import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Avatar from '../../Assets/images/profile.svg';
import {globalData} from './globals';

const Detail = ({navigation}) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    globalData.userName = name;
    navigation.navigate('PasswordScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/images/name-page.jpg')}
        style={styles.image}
      />
      <Text style={styles.heading}>Enter Your Name</Text>
      <Text style={styles.subHeading}>
        Enter your full name for your account.
      </Text>
      <View style={styles.inputContainer}>
        <Avatar width={30} height={30} />
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;

const styles = {
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    color: '#212236',
  },
  subHeading: {
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999',
    width: '100%',
    height: 60,
    marginBottom: 100,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingLeft: 10,
  },
  button: {
    marginTop: 120,
    backgroundColor: '#726aec',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    height: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 30,
  },
};
