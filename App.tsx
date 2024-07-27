/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import RazorpayCheckout from 'react-native-razorpay';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Button
          title="Open modal"
          onPress={() => {
            let options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_test_1DP5mmOlF5G5ag', // Your api key
              amount: '5000',
              name: 'Garu',
              prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
              },
              theme: {color: '#`3399FF`'},
            };
            RazorpayCheckout.open(options)
              .then((data: {razorpay_payment_id: any}) => {
                // handle success
                console.log(
                  'data.razorpay_payment_id',
                  data.razorpay_payment_id,
                );
              })
              .catch((error: any) => {
                // handle failure
                console.log('error', error);
              });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
