import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

interface AnimatedTypingProps {
  text: string;
  speed?: number;
}

export const AnimatedTyping: React.FC<AnimatedTypingProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("")
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <View className="flex items-center justify-center">
      <Text className="text-lg font-bold text-black">{displayedText}</Text>
    </View>
  );
};
