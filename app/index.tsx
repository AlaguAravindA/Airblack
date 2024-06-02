import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Modal, FlatList
} from "react-native";
import DropdownComponent from "./Dropdown";
import { LinearGradient } from "expo-linear-gradient";
import DropDown from "react-native-element-dropdown";

const App = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [goal, setGoal] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Profession:", profession);
    console.log("Goal:", goal);
    console.log("City:", city);
  };
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const base = "./images";

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 bg-black mt-5">
        <View className="bg-black items-center mt-5">
          <Image source={require(`${base}/header.png`)} className="mb-5" />
          <Image source={require(`${base}/professtional.png`)} />
        </View>
        <View className="p-5 bg-black">
          <View style={{ backgroundColor: "#E84D84" }} className="p-2 rounded ">
            <Text className="text-sm font-bold text-white text-center">
              FILL THE FORM BELOW TO ENQUIRE
            </Text>
          </View>
          <View className="p-5 bg-white  rounded">
            <Text className="font-bold mb-4">*Enter the Name</Text>
            <TextInput
              className="bg-white p-2 mb-3 rounded border border-gray-300"
              placeholder="Eg. Aneesha Mehra"
              onChangeText={setName}
              value={name}
            />
            <Text style={{ alignSelf: "flex-start" }} className="font-bold">
              *Enter the Whatsapp Number
            </Text>
            <View className="flex-row items-center bg-white p-2 mb-3 rounded justify-between">
              <View className="flex-row items-center">
                <Text className="text-lg mr-2">+91</Text>
                <TextInput
                  className="flex-1 bg-white p-2 mb-3 rounded border border-gray-300"
                  placeholder="Eg. 0000000000"
                  onChangeText={setPhoneNumber}
                  value={phoneNumber}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            <Text className="mb-2 font-bold">*Select Your Profession</Text>
            <DropdownComponent label={"Profession"}></DropdownComponent>
            

            <Text className="mb-4 font-bold">*Select Your Goal</Text>
            <DropdownComponent label={"Goal"}></DropdownComponent>
            <Text className="mb-4 font-bold">*Select Your City</Text>
            <DropdownComponent label={"City"}></DropdownComponent>
            <TouchableOpacity className="" onPress={handleSubmit}>
              <LinearGradient
                colors={["#F56563", "#E54988"]}
                className="py-2 px-28 mt-0 rounded items-center"
              >
                <Text className="text-sm font-bold text-white">Sumbit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View className="relative p-5 bg-black items-center">
          <Image
            source={require(`${base}/background.png`)}
            className="w-full h-64"
          />
          <Image
            source={require(`${base}/why should you use airblack.png`)}
            className="absolute top-16 w-4/5 h-14 pr-4"
          />
          <Image
            source={require(`${base}/camera.png`)}
            className="absolute top-36 ml-4"
          />
          <TouchableOpacity
            onPress={() => console.log("Apply Now button pressed")}
          >
            <LinearGradient
              colors={["#F56563", "#E54988"]}
              className="py-2 px-28 mt-0 rounded items-center"
            >
              <Text className="text-sm font-bold text-white">Apply Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View className="p-5 bg-black items-center">
          <Image source={require(`${base}/writting.png`)} className="mb-5" />
          <Image
            source={require(`${base}/certificate.png`)}
            className="mb-10"
          />
          <View className="items-center">
            <ImageBackground
              source={require("./images/Image (1).png")}
              className="w-full h-52 items-center justify-center"
            >
              <Text className="text-center mt-3 h-36">
                <Image
                  source={require("./images/Join our growing community of 35,000+ alumni.png")}
                />
              </Text>
              <TouchableOpacity
                onPress={() => console.log("Apply Now button pressed")}
              >
                <LinearGradient
                  colors={["#F56563", "#E54988"]}
                  className="py-2 px-28 rounded items-center ml-6 "
                >
                  <Text className="text-sm font-bold text-white">
                    Apply Now
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <View className="p-2 py-2  flex-row justify-around mb-8 ">
                <TouchableOpacity
                  className="h-12 m-1  rounded-full items-center justify-center"
                  onPress={() => console.log("Instagram button pressed")}
                >
                  <Image
                    source={require(`${base}/Instagram.png`)}
                    className="w-8 h-8"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-12 m-1 rounded-full items-center justify-center"
                  onPress={() => console.log("Facebook button pressed")}
                >
                  <Image
                    source={require(`${base}/facebook.png`)}
                    className="w-8 h-8"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-12 m-1 rounded-full items-center justify-center"
                  onPress={() => console.log("LinkedIn button pressed")}
                >
                  <Image
                    source={require(`${base}/linedin.png`)}
                    className="w-8 h-8"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-12 m-1 rounded-full items-center justify-center"
                  onPress={() => console.log("Twitter button pressed")}
                >
                  <Image
                    source={require(`${base}/x.png`)}
                    className="w-8 h-8"
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
