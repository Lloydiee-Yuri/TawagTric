import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { images } from '../../constants';

export default function QueueScreen({ onCancel }) {
  return (
    <LinearGradient
      colors={['#006397', '#73C2FB']}
      className="flex-1 items-center justify-center"
    >

      <Text className="text-2xl text-gradientEnd font-pbold mb-5"> You are in queue! </Text>

      <Text className="text-lg text-gradientEnd font-psemibold mb-7">Please wait...</Text>

      <View className="w-[200px] h-[200px] rounded-full bg-outterCircle justify-center items-center">
        <View className="w-[150px] h-[150px] rounded-[75px] bg-gradientEnd justify-center items-center">
          <View className="w-[100px] h-[100px] rounded-[50px] bg-innerCircle justify-center items-center">
            <Image 
              source={images.tricycle}
              className="w-[50px] h-[50px]"
            />
          </View>
        </View>
      </View>

      <Text className="text-base text-gradientEnd font-psemibold mt-5 mb-5">Your driver will arrive in X mins</Text>

      <LinearGradient 
      colors={['#64CAFF', '#C1EAFF']}
      style={{ borderRadius: 100 }}
      >
            <TouchableOpacity className="w-[175px] h-[60px] justify-center items-center" onPress={onCancel}>
                <Text className="text-lg text-primary font-pbold">Cancel</Text>
            </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
}