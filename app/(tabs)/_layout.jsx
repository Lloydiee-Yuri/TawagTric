import { Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-1">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color : '#004264' }}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#004264',
            tabBarInactiveTintColor: '#81D1FA',
            tabBarStyle: {
                position: 'absolute',
                bottom: 20,
                left: 60,
                right: 60,
                height: 100,
                borderRadius: 100,
                elevation: 5, // For shadow on Android
                shadowColor: '#000', // Shadow for iOS
                shadowOpacity: 0.1,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 4 },
            }

        }}
    >
        <Tabs.Screen
            name="History"
            options={{
                title: 'History',
                headerShown: false,
                tabBarIcon: ({color, focused }) => (
                    <TabIcon
                        icon={icons.history}
                        color={color}
                        name="History"
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name="Home"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({color, focused }) => (
                    <TabIcon
                        icon={icons.home}
                        color={color}
                        name="Home"
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'profile',
                headerShown: false,
                tabBarIcon: ({color, focused }) => (
                    <TabIcon
                        icon={icons.profile}
                        color={color}
                        name="Profile"
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name="QueueScreen"
            options={{
                title: 'QueueScreen',
                headerShown: false,
                tabBarButton: () => null,
            }}
        />
    </Tabs>
    </>
  )
}

export default TabsLayout