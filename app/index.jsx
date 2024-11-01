import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height : '100%'}}>
        <View className="w-full justify-center items-center h-[80vh] px-4">

          <Image 
            source={images.TawagLogo}
            className="w-[300px] h-[400px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className=" text-3xl text-white font-extrabold text-center">TawagTric</Text>
            <Text className="text-white font-normal text-center">Ride local, ride smart</Text>

            <CustomButton 
              title="Login"
              handlePress={ () => router.push('/sign-in') }
              containerStyles="w-[300px] mt-7"
            />
            <CustomButton 
              title="Sign Up"
              handlePress={ () => router.push('/sign-up') }
              containerStyles="w-[300px] mt-7"
            />

          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#006397'
      style='light'
      />

    </SafeAreaView>
  );
}
