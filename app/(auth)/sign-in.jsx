import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation, CommonActions } from '@react-navigation/native';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  // Auth state change effect
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("(tabs)");
      }
    });

    return unsubscribe;
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setIsSubmitting(false);

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "(tabs)" }]
          })
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
            source={images.TawagLogoS}
            className="w-[150px] h-[200px]"
            resizeMode='contain'
            style={{ alignSelf: 'center' }}
          />

          <Text className="text-center text-2xl text-white font-black mt-10">
            Welcome Back!
          </Text>
          <Text className="text-center text-white font-black mt-3">
            Login to your account
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-5"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry // Hide password input
          />

          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-white font-regular">
              Don't have an account?
            </Text>
            <Link href="/sign-up"
              className="text-lg text-secondary font-semibold"
              style={{ textDecorationLine: 'underline' }}>
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;