import "@/global.css";
import { View, Text } from "react-native";

export const GoalCard = ({day} : {day: string}) => {
  return (
    <View className="flex-1 flex-col bg-[#609bff] justify-center items-center">
      <Text className="text-white text-[50px]">DAY</Text>
      <Text className="text-white text-[50px]">{day}</Text>
    </View>
  );
}