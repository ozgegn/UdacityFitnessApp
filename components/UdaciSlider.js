import React from "react";
import { Text, View, Slider } from "react-native";

export default function UdaciSlider({max, unit, step, value, onChange}) {
  return (
    <View>
      <Slider
        maximumValue={max}
        minimumValue={0}
        unit={unit}
        step={step}
        value={value}
        onValueChange={onChange}
      />
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  );
}
