import "@/global.css";
import { Text, TextInput, View } from "react-native";

export const UsageForm = () => {
  return (
    <View className="flex-1 items-center bg-[#fff9c7]">
      <View className="flex-1 flex-col gap-2 ">
        <Text className="text-[#609bff] text-center text-[25px]">AIR CONDITIONER</Text>
        <View className="flex-1 flex-col">
          <Text className="text-center text-[18px]">HOURS OF USAGE</Text>
          <View className="flex-row items-center">
            <TextInput className="w-20 h-14 bg-white border-2 rounded-lg" />
            <Text>hr(s)</Text>
          </View>
        </View>
        <View className="flex-1 flex-col">
          <Text className="text-center text-[18px]">KILOWATTS USAGE</Text>
          <View className="flex-row items-center">
            <TextInput className="w-20 h-14 bg-white border-2 rounded-lg" />
            <Text>kW</Text>
          </View>
        </View>
        <View className="flex-1 flex-col">
          <Text className="text-center text-[18px]">TOTAL KWH</Text>
          <View className="flex-row items-center">
            <TextInput className="w-20 h-14 bg-white border-2 rounded-lg" />
            <Text>kWh</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
