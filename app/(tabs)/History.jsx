import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../../constants';

const { width } = Dimensions.get('window');

const History = () => {

  const rideHistory = [
    { id: '1', date: '2023-10-01', destination: 'SM Lipa' },
    { id: '2', date: '2023-10-02', destination: 'Fish Market' },
    { id: '3', date: '2023-10-03', destination: 'De Lasalle Lipa' },
    { id: '4', date: '2023-10-04', destination: 'LTC' },
    { id: '5', date: '2023-10-05', destination: 'Others' },
    { id: '6', date: '2023-10-01', destination: 'SM Lipa' },
    { id: '7', date: '2023-10-02', destination: 'Fish Market' },
    { id: '8', date: '2023-10-03', destination: 'De Lasalle Lipa' },
    { id: '9', date: '2023-10-04', destination: 'LTC' },
    { id: '10', date: '2023-10-05', destination: 'Others' },
    { id: '11', date: '2023-10-05', destination: 'Others' },
    { id: '12', date: '2023-10-01', destination: 'SM Lipa' },
    { id: '13', date: '2023-10-02', destination: 'Fish Market' },
    { id: '14', date: '2023-10-03', destination: 'De Lasalle Lipa' },
    { id: '15', date: '2023-10-04', destination: 'LTC' },
    { id: '16', date: '2023-10-05', destination: 'Others' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.destinationText}>{item.destination}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={['#006397', '#73C2FB']}
        className="flex-1 w-full justify-center items-center"
      >
        <View className="flex-row justify-between items-center w-full p-8">
          <Text className="text-3xl text-gradientEnd font-pbold">TawagTric</Text>
          <Text className="text-3xl text-gradientEnd font-pbold">History</Text>
        </View>

        <FlatList
          data={rideHistory}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      </LinearGradient>
    </SafeAreaView>
  )
}

export default History;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: (width / 2) - 35,
    margin: 10,
    padding: 20,
    backgroundColor: '#C1EAFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 14,
    color: '#006397',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  destinationText: {
    fontSize: 12,
    color: '#333',
  },
});
