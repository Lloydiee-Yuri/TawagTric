import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import  CustomButton  from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState({
    email:'',
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
            source={images.TawagLogoS}
            className="w-[150px] h-[200px]"
            resizeMode='contain'
            style={{ alignSelf: 'center'}}
          />

          <Text className=" text-center text-2xl text-white text-semibold font-black mt-10">
            Welcome Back!
          </Text>
          <Text className=" text-center text-white text-semibold font-black mt-3">
            Login to your account
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            // value={email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-5"
            keyboardType="Email"
          />

          <FormField 
            title="Password"
            value={form.password}
            // value={password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
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
              Don't have an account?
            </Text>
            <Link href="/sign-up" 
            className="text-lg text-secondary font-psemibold" 
            style={{ textDecorationLine: 'underline' }}>Sign Up</Link>
          </View>

        </View>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default SignIn