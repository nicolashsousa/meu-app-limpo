import { FlatList, Text, View, Image, StyleSheet } from "react-native";

const url_hamburguer =
  "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ2VyfGVufDB8fDB8fHwy";

const url_pizza =
  "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDI%3D";

const url_refrigerante =
  "https://images.unsplash.com/photo-1648569883125-d01072540b4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jYS1jb2xhfGVufDB8fDB8fHwy";

const cardapio = [
  { image: url_pizza, titulo: "Pizza de Calabreza", preco: 25.9 },
  { image: url_hamburguer, titulo: "Hamburguer Artesanal", preco: 45.0 },
  { image: url_refrigerante, titulo: "Refrigerante", preco: 6.5 },
];

function ExibirCardapio({ image, titulo, preco }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={styles.imagem} />

      <View style={styles.detalhes}>
        <Text style={styles.nome}>{titulo}</Text>
        <Text style={styles.preco}>
          {preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </View>
    </View>
  );
}

function App() {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Cardápio</Text>

      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.titulo}
        contentContainerStyle={styles.lista}
        renderItem={(param) => (
          <ExibirCardapio
            image={param.item.image}
            titulo={param.item.titulo}
            preco={param.item.preco}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F3F5F7",
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  titulo: {
    color: "#17212B",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
    alignSelf: "center",
  },
  lista: {
    paddingBottom: 24,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E1E6EA",
    alignSelf: "center",
    width: "100%",
    maxWidth: 420,
  },
  imagem: {
    width: 88,
    height: 88,
    borderRadius: 8,
    backgroundColor: "#E1E6EA",
  },
  detalhes: {
    flex: 1,
    marginLeft: 14,
  },
  nome: {
    color: "#26333D",
    fontSize: 16,
    fontWeight: "600",
  },
  preco: {
    color: "#168A75",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 6,
  },
});

export default App;
