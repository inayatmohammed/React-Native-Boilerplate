/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/classnames-order */
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  const Navbar = () => {
    return (
      <>
        <StatusBar />
        <View className="h-[50px] bg-[#0C2A48] flex flex-row justify-between items-center px-7">
          <View className="flex flex-row gap-7 items-center">
            <FontAwesome name="th-list" color="white" size={25} />
            <Text className="font-bold text-2xl text-white">Home</Text>
          </View>
          <View className="flex flex-row gap-5 items-center">
            <TouchableOpacity className="bg-black flex flex-row px-3 py-1 rounded-lg items-center ">
              <Text className="text-white text-lg pr-2">Search</Text>
              <FontAwesome name="search" color="white" size={18} />
            </TouchableOpacity>
            <FontAwesome name="bell" color="white" size={25} />
          </View>
        </View>
      </>
    );
  };

  const Hero = () => {
    return (
      <ImageBackground
        source={require("../../assets/surgery-home.jpg")}
        resizeMode="cover"
      >
        <View className="h-[230px] flex flex-col justify-end p-5">
          <Text className="text-white text-3xl font-bold ">
            Surgery Sturnery
          </Text>
          <Text className="text-white text-lg ">
            Chest Sugery by dr rajiv shukla
          </Text>
        </View>
        <View className="flex  flex-row justify-center">
          <TouchableOpacity className="bg-pink-500 flex flex-row items-center rounded-full px-4 py-1 mb-3">
            <FontAwesome name="star" color="white" size={20} />
            <Text className="text-xl font-bold pl-2 text-white">Live</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  const Streams = () => {
    return (
      <View className="bg-black flex flex-col items-center pt-5">
        <View className="flex flex-row bg-[#34A9CF] rounded-full">
          <TouchableOpacity className="bg-white flex flex-row items-center rounded-full px-4 py-1">
            <FontAwesome name="star" color="black" size={20} />
            <Text className="text-xl font-bold pl-2 text-black">Streams</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center px-4 py-1">
            <Text className="text-xl font-bold pl-2 text-white">
              Top 10 Courses
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-5 flex flex-row justify-between w-full px-5">
          <View>
            <Image
              source={require("../../assets/images/live.jpeg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-white text-lg">Streams</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/abstract.jpeg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-lg text-white">Abstracts</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/doctor.jpeg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-lg text-white">Doctors</Text>
          </View>
        </View>
      </View>
    );
  };

  const FooterList = () => {
    return (
      <View className="bg-black">
        <Text className="text-white text-xl mt-5 px-5 font-bold">
          Trending Surgeries
        </Text>
        <View className="mt-5 flex flex-row justify-between w-full px-5">
          <View>
            <Image
              source={require("../../assets/images/teeth.jpeg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-white text-lg">Dental</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/heart.jpeg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-white text-lg">Cardiac</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/eye.jpeg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-white text-lg">Eye</Text>
          </View>
        </View>
      </View>
    );
  };
  const FooterList2 = () => {
    return (
      <View className="bg-black">
        <Text className="text-white text-xl mt-5 px-5 font-bold">
          Trending Doctors
        </Text>
        <View className="mt-5 flex flex-row justify-between w-full px-5">
          <View>
            <Image
              source={require("../../assets/surgery-home.jpg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-white text-lg">Dental</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/surgery-home.jpg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-white text-lg">Cardiac</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/eye.jpeg")}
              className="h-[100px] w-[90px] rounded-lg"
            />
            <Text className="text-white text-lg">Eye</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Navbar />
      <Hero />
      <Streams />
      <FooterList />
      <FooterList2 />
    </View>
  );
};

export default HomePage;
