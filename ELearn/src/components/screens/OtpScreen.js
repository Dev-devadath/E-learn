import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from '@react-navigation/native';

const CELL_COUNT = 4;

const OtpScreen = ({route}) => {
  const {phoneNumber} = route.params;
  const [value, setValue] = useState('');
  const ref = useRef();

  const blurOnFulfill = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/images/otp-page.jpg')}
        style={styles.image}
      />
      <Text style={styles.heading}>Verify OTP</Text>
      <Text style={styles.subHeading}>
        Please enter the 4-digit verification code that is sent to you at:{' '}
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </Text>
      <CodeField
        ref={ref}
        value={value}
        onChangeText={setValue}
        cellCount={4}
        keyboardType="number-pad"
        rootStyle={styles.codeFieldRoot}
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              index !== 0 && {marginLeft: 20},
            ]}>
            <Text style={[styles.cellText, isFocused && styles.focusCellText]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = {
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 310,
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
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 25,
    color: '#A6A5A5',
  },
  phoneNumber: {
    color: '#726aec',
  },
  button: {
    backgroundColor: '#726aec',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    height: 50,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 70,
    height: 70,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 10,
  },
  cellText: {
    fontSize: 34,
    color: '#000',
    textAlign: 'center',
    lineHeight: 60,
  },
  focusCell: {
    borderColor: '#000',
  },
};
