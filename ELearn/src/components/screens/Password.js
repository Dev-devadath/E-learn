import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import EyeIcon from '../../Assets/images/dont-view.svg';
import PasswordLock from '../../Assets/images/password-lock.svg';

const Password = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
  });

  const Requirement = ({text, isValid}) => (
    <View style={styles.requirement}>
      <View style={[styles.checkBox, isValid && styles.checkedBox]}>
        {isValid && <View style={styles.innerCircle} />}
      </View>
      <Text style={[styles.requirementText, isValid && styles.validText]}>
        {text}
      </Text>
    </View>
  );

  const checkPasswordValidity = password => {
    const isValid = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[$@#%!]/.test(password),
    };
    setIsPasswordValid(isValid);
  };

  const handlePasswordChange = value => {
    setPassword(value);
    checkPasswordValidity(value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/images/password-page.jpg')}
        style={styles.image}
      />
      <Text style={styles.heading}>Set a Strong Password</Text>
      <Text style={styles.subHeading}>
        Set a strong password for your account.
      </Text>
      <View style={styles.passwordInputContainer}>
        <PasswordLock name="lock" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <EyeIcon
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {!Object.values(isPasswordValid).every(v => v) && (
        <Text style={styles.errorText}>
          Password does not meet requirements.
        </Text>
      )}
      <View style={styles.requirementsContainer}>
        <Requirement
          text="Minimum 8 characters"
          isValid={isPasswordValid.length}
        />
        <Requirement
          text="At least one lowercase letter (a-z)"
          isValid={isPasswordValid.lowercase}
        />
        <Requirement
          text="At least one uppercase letter (A-Z)"
          isValid={isPasswordValid.uppercase}
        />
        <Requirement
          text="At least one number (0-9)"
          isValid={isPasswordValid.number}
        />
        <Requirement
          text="At least one symbol ($@#%!)"
          isValid={isPasswordValid.symbol}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, Object.values(isPasswordValid).every(v => v)]}
        onPress={handleSubmit}
        disabled={!Object.values(isPasswordValid).every(v => v)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Password;

const styles = {
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    color: '#212236',
  },
  subHeading: {
    fontSize: 16,
    color: '#676767',
    marginBottom: 20,
    textAlign: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999',
    width: '100%',
    height: 60,
  },
  icon: {
    marginRight: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  requirementsContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: -50,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'start',
    marginBottom: 5,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#726aec',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    borderColor: '#726aec',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#726aec',
  },
  validText: {
    color: '#726aec',
  },
  requirementText: {
    fontSize: 18,
    color: '#676767',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#726aec',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: '#DE3730',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 30,
  },
};
