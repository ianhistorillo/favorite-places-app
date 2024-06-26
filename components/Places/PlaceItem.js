import { Pressable, Image, Text, View, StyleSheet } from "react-native";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.image.uri }} />
      <View>
        <Text> {place.title} </Text>
        <Text> {place.address} </Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const style = StyleSheet.create({});
