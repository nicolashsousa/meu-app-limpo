import { Text, View, StyleSheet, Image } from "react-native";

const url_hamburguer =
  "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ2VyfGVufDB8fDB8fHwy";

const url_pizza =
  "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDI%3D";

const url_refrigerante =
  "https://images.unsplash.com/photo-1648569883125-d01072540b4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jYS1jb2xhfGVufDB8fDB8fHwy";

function Acao({ link, texto, preco }) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <View style={styles.acaoContainer}>
      <Image source={{ uri: link }} style={styles.acaoIcone} />

      <View style={styles.acaoInfo}>
        <Text style={styles.acaoTexto}>{texto}</Text>
        <Text style={styles.acaoPreco}>{precoFormatado}</Text>
      </View>
    </View>
  );
}

function App() {
  return (
    <View style={styles.Container}>
      <Text style={styles.tituloContainer}>Cardápio</Text>
      <Acao link={url_hamburguer} texto="Hamburguer" preco={25.9} />
      <Acao link={url_pizza} texto="Pizza de calabresa" preco={45.0} />
      <Acao link={url_refrigerante} texto="Coca-cola" preco={6.5} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#a3a09d",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },

  tituloContainer: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2c241f",
    marginBottom: 20,
    textAlign: "center",
  },

  acaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  acaoIcone: {
    width: 100,
    height: 100,
    borderRadius: 14,
    marginRight: 14,
    resizeMode: "cover",
  },

  acaoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f1f1f",
    marginBottom: 6,
  },

  acaoPreco: {
    fontSize: 16,
    color: "#1a7f5a",
    fontWeight: "600",
  },

  acaoInfo: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
