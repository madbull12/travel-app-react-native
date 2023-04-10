import React, { useLayoutEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [count,setCount] = useState(0);
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          className="min-h-screen flex-1 cover w-full"
          resizeMode="cover"
          source={require("../assets/cover.jpg")}
        >
          <View  className="py-16 px-4 flex-col flex-1 ">
            <Animatable.Text easing="ease-in-out" animation="fadeInLeftBig" className="text-2xl">It's a Big World </Animatable.Text>
            <Animatable.View className="mt-4" animation="fadeInRightBig" >
              <Text className="text-6xl font-bold">Out There,</Text>
              <Text className="text-6xl font-bold">Go Explore</Text>
              {/* <Button
                onPress={()=>console.log("fdsfsfs")}
                style={styles.btn}
                title="Learn More"
                color="#20B08D"
                accessibilityLabel="Learn more about this purple button"
              /> */}
            </Animatable.View>
            <Animatable.View easing="ease-in-out" animation="fadeInUpBig" className="absolute bottom-2 right-0 left-0 mx-8 flex-col gap-y-4">
              <TouchableOpacity onPress={()=>setCount(count+1)} className="bg-[#20B08D] rounded-full p-4  ">
                <Text className="font-semibold text-white text-center text-xl">
                  Get Started
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-white text-center font-semibold">Privacy Policy</Text>
              </TouchableOpacity>
            </Animatable.View>
            {/* <TouchableOpacity className="bg-[#20B08D] rounded-full p-4 mx-8 absolute bottom-2 right-0 left-0">
              <Text className="font-semibold text-white text-center text-xl">
                Get Started
              </Text>
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
  },
});

export default HomeScreen;
