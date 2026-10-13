import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const img_normal =
  "https://play-lh.googleusercontent.com/tzBwQ9l18TBjObuRh_oSEKZgN38yBReXFuwPX77HGSqhBTvh8I70QqqT3Iyqme-O1ywjeHm5wsSGuVkzaV3eSA=w240-h480-rw";
const img_fome =
  "https://static.wikia.nocookie.net/pou/images/8/8d/Pou-fome.png/revision/latest?cb=20240212104744&path-prefix=pt-br";

const img_triste =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLC7SzlQy1HjCGiLkd7hp8s55FI1FUi4YjdiyL7rqmw&s=10";

function MyApp() {
  const [fome, setFome] = useState(0);
  const [tristeza, setTristeza] = useState(0);

  const alimentar = () => {
    setFome(fome - 1);
  };

  const darAtenção = () => {
    setTristeza(tristeza - 1);
  };

  setTimeout(() => setFome(fome + 1), 10000);
  setTimeout(() => setTristeza(tristeza + 1), 10000);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: tristeza >= 3 ? img_triste : fome >= 3 ? img_fome : img_normal }}
        style={styles.image}
      />
      <Text>Fome: {fome}</Text>
      <Button title="Alimentar" onPress={alimentar} />
      <Text>Tristeza: {tristeza}</Text>
      <Button title="Dar Atenção" onPress={darAtenção} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});

export default MyApp;
