import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import QueueScreen from './QueueScreen';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebaseConfig';

export default function App() {
  const [isSearching, setIsSearching] = useState(false);

  const handleCallRide = () => {
    setIsSearching(true);
  };

  const handleCancel = () => {
    setIsSearching(false);
  };

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("index")
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={['#006397', '#73C2FB']}
        className="flex-1 w-full justify-center items-center"
      >
        {!isSearching ? (
          <>
            <View className="flex-row justify-between items-center w-full absolute top-0 p-8">
              <Text className="text-3xl text-gradientEnd font-pbold drop-shadow-2xl">TawagTric</Text>
              <Text className="text-3xl text-gradientEnd font-pbold">Home</Text>
            </View>

            <TouchableOpacity
              onPress={handleCallRide}
              style={{
                backgroundColor: '#C1EAFF',
                width: 275,
                height: 275,
                borderRadius: 400,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.25,
                shadowRadius: 8,
                elevation: 10,
              }}
            >
              <Text className="font-pblack text-3xl text-primary">Call A Ride</Text>
            </TouchableOpacity>

              <Text className="text-2xl text-gradientEnd font-pbold mt-10 mr-10 ml-10 text-center drop-shadow-lg">
                You're X in line, We'll be with you soon!
              </Text>

              <TouchableOpacity
              onPress={handleSignOut}
              style={{
                backgroundColor: '#C1EAFF',
                width: 50,
                height: 50,
                borderRadius: 400,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.25,
                shadowRadius: 8,
                elevation: 10,
              }}
            >
              <Text className="font-pblack text-[1vh] text-primary">Logout</Text>
            </TouchableOpacity>

          </>
        ) : (
          <QueueScreen onCancel={handleCancel} />
        )}
        <StatusBar style="light" backgroundColor="#006397" />
      </LinearGradient>
    </SafeAreaView>
  );
}
