import { useState } from "react";
import { Button, View, Image, StyleSheet } from "react-native";

const img_normal =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfldjSBHK_x20BzJEEZ1CwG3tiO1Z518rTBrlOu1DFA&s";

function MyApp() {
  const [fome, setFome] = useState(0);

  return (
    <View style={styles.container}>
      <Image source={{ uri: img_normal }} style={styles.image} />
      <Button title="Alimentar" onPress={() => setFome(fome - 1)} />
      <Button title="Gastar energia" onPress={() => setFome(fome + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 80,
  },
});

export default MyApp;
