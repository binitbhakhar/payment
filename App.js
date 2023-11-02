import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';
import RazorpayCheckout from 'react-native-razorpay';
const App = () => {
  let razorpaykeyId = RAZORPAY_KEY_ID;
  let razorpaykeySecret = RAZORPAY_KEY_SECRET;

  const amount = 100;
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: razorpaykeyId,
      amount: amount * 100,
      name: 'Test App',
      order_id: '', //
      prefill: {
        email: 'xyz@gmail.com',
        contact: '9191919191',
        name: 'Gaurav Kumar',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View>
      <Text>App</Text>

      <Text
        onPress={handlePayment}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: 10,
          margin: 10,
        }}>
        Pay
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
