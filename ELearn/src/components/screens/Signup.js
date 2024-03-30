import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import DropDown from '../../Assets/images/drop-down.svg';
import PhoneIcon from '../../Assets/images/phone.svg';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCreate = () => {
    if (phoneNumber.trim() !== '') {
      navigation.navigate('OTP', {phoneNumber});
    } else {
      alert('Please enter your phone number.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/images/login-page.jpg')}
        style={styles.image}
      />
      <Text style={styles.heading}>Create an account</Text>
      <Text style={styles.subHeading}>Signup with your phone number</Text>
      <View style={styles.inputWrapper}>
        <Image
          source={require('../../Assets/images/flag.png')}
          style={styles.flagIcon}
        />
        <TouchableOpacity>
          <DropDown width={13} height={15} style={styles.dropDown} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <PhoneIcon width={25} height={25} />
          <TextInput
            style={styles.input}
            defaultValue="+91"
            keyboardType="phone-pad"
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.createAccContainer}>
        <Text style={styles.createAcc}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.createAccountText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = {
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'DMSans_18pt-Regular',
    marginBottom: 15,
    color: '#212236',
  },
  subHeading: {
    fontSize: 16,
    fontFamily: 'DMSans_18pt-Regular',
    color: '#999',
    marginBottom: 25,
  },
  inputWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#726aec',
    width: '70%',
  },
  dropDown: {
    marginRight: 10,
    marginLeft: -15,
  },
  flagIcon: {
    width: 80,
    height: 50,
  },
  inputText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    fontFamily: 'Quantico-Regular',
  },
  input: {
    fontFamily: 'Quantico-Regular',
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#726aec',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createAccContainer: {
    flexDirection: 'row',
  },
  createAcc: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  createAccountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#756ded',
  },
};
