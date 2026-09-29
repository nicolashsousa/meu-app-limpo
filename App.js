import { FlatList, Text, View } from "react-native";

const carros = [
  { nome: "Gol"},
  { nome: "Fusca"},
  { nome: "S10"},
  { nome: "Onix"},
];

function ExibirCarro({nome}) {
  return (
    <View>
      <Text>{nome}</Text>
    </View>
  );
}

function App() {
  return (
    <View>
      <FlatList
        data={carros}
        renderItem={(param) => (
          <ExibirCarro nome={param.item.nome} />
        )}
        keyExtractor={(item) => item.nome}
      />
    </View>
  );
}

export default App;