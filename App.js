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
    setFome((valor) => Math.max(0, valor - 1));
  };

  const darAtenção = () => {
    setTristeza((valor) => Math.max(0, valor - 1));
  };

  const passarTempo = () => {
    setFome((valor) => valor + 1);
    setTristeza((valor) => valor + 1);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: tristeza >= 3 ? img_triste : fome >= 3 ? img_fome : img_normal,
        }}
        style={styles.image}
      />
      <Text>Fome: {fome}</Text>
      <Button title="Alimentar" onPress={alimentar} />
      <Text>Tristeza: {tristeza}</Text>
      <Button title="Dar atenção" onPress={darAtenção} />
      <Button title="Deixar o tempo passar" onPress={passarTempo} />
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
