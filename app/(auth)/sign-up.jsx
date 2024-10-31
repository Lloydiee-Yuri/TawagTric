import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import  CustomButton  from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    firstName:'',
    lastName:'',
    email:'',
    // plateNumber:'',
    // licenceNumber:'',
    password:''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="mt-10">
        <View className="w-full justify-center min-h-[85vh] px-4 my-8">
          <Image
            source={images.TawagLogoR}
            className="w-[300px] h-[125px]"
            resizeMode='contain'
            style={{ alignSelf: 'center'}}
          />

          <Text className=" text-center text-2xl text-white text-semibold font-black mt-5">
            Sign Up
          </Text>
          <Text className=" text-center text-white text-semibold font-black mt-3">
            Join TawagTric and start ridding with us today!
          </Text>

          <FormField 
            title="First Name"
            value={form.firstName}
            handleChangeText={(e) => setForm({ ...form, firstName: e })}
            otherStyles="mt-4"
            keyboardType="First Name"
          />

          <FormField 
            title="Last Name"
            value={form.lastName}
            handleChangeText={(e) => setForm({ ...form, lastName: e })}
            otherStyles="mt-4"
            keyboardType="Last Name"
          />

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="Email"
          />

          {/* <FormField 
            title="Plate Number"
            value={form.plateNumber}
            handleChangeText={(e) => setForm({ ...form, plateNumber: e })}
            otherStyles="mt-5"
            keyboardType="Plate Number"
          />

          <FormField 
            title="License Number"
            value={form.licenceNumber}
            handleChangeText={(e) => setForm({ ...form, licenceNumber: e })}
            otherStyles="mt-5"
            keyboardType="License Number"
          /> */}

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4"
            keyboardType="Username"
          />

          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-white font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" 
            className="text-lg text-secondary font-psemibold" 
            style={{ textDecorationLine: 'underline' }}>Login</Link>
          </View>

        </View>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default SignUp