import { View, Text, ScrollView, Image,Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation = useNavigation();


  const submit = () => {
    setIsSubmitting(true);
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setIsSubmitting(false);

      Alert.alert(
        'Sign Up Successful',
        'You have successfully signed up!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('sign-in');
            }
          }
        ]
      );
    })

      .catch((error) => {
        alert(error.message);
        setIsSubmitting(false);
      });
  };
  

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="mt-10">
        <View className="w-full justify-center min-h-[85vh] px-4 my-8">
          <Image
            source={images.TawagLogoR}
            className="w-[300px] h-[125px]"
            resizeMode="contain"
            style={{ alignSelf: 'center' }}
          />

          <Text className=" text-center text-2xl text-white text-semibold font-black mt-5">
            Sign Up
          </Text>
          <Text className=" text-center text-white text-semibold font-black mt-3">
            Join TawagTric and start riding with us today!
          </Text>

          <FormField
            title="First Name"
            value={form.firstName}
            handleChangeText={e => setForm({ ...form, firstName: e })}
            otherStyles="mt-4"
            keyboardType="First Name"
          />

          <FormField
            title="Last Name"
            value={form.lastName}
            handleChangeText={e => setForm({ ...form, lastName: e })}
            otherStyles="mt-4"
            keyboardType="Last Name"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={e => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="Email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={e => setForm({ ...form, password: e })}
            otherStyles="mt-4"
            keyboardType="Username"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-white font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg text-secondary font-psemibold"
              style={{ textDecorationLine: 'underline' }}
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
