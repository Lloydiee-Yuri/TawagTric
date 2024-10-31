import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../../constants';

const History = () => {
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
      colors={['#006397', '#73C2FB']}
      className="flex-1 w-full justify-center items-center"
      >
        <View className="flex-1 flex-row justify-between items-center w-full absolute top-0 p-8">
              <Text className="text-3xl text-gradientEnd font-pbold drop-shadow-2xl">TawagTric</Text>
              <Text className="text-3xl text-gradientEnd font-pbold">History</Text>
        </View>

        <View className="items-start align-top w-full mb-[23vh] ml-14">
        <Text className="text-3xl text-gradientEnd font-pbold text-[3vh] mb-10">Jhon Lioyd A. Loreto</Text>
          <Image 
            source={images.JLB}
            resizeMode='cover'
            className="w-[25vh] h-[25vh] rounded-full mb-10"
          />
          <Text className="text-3xl text-gradientEnd font-pbold text-[2.5vh]">091 234 4567</Text>
          <Text className="text-3xl text-gradientEnd font-pbold text-[2.5vh]">Joined: <Text className="text-3xl text-primary font-pbold text-[2.5vh]">January 01 2025</Text></Text>
          <Text className="text-3xl text-gradientEnd font-pbold text-[2.5vh]">Total Rides: <Text className="text-3xl text-primary font-pbold text-[2.5vh]">50</Text></Text>
        </View>

      </LinearGradient>
    </SafeAreaView>
  )
}

export default History