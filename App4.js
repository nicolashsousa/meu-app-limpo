import { Image, StyleSheet, Text, View } from "react-native";

const linkImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEqeRsRqCN4bipocKavGBTE4KRMYKy_toktvPJJwS7g&s=10";

const linkIcone1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_zjnaYa7WiQ_DaNmoING8P1xvM3xxrU8nMQcQpuVdw&s=10";
const linkIcone2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoeB8tWQ-ZL_MpxRGZcSx99FratqxOSULsCzzHGxAvQ&s=10";
const linkIcone3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBhDX6M7eIPhB11vnWBNjts-Q pFwmu4Fq7wmz9IGFtQ&s=10";

function MeuApp() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: linkImg }} style={{ flex: 1 }} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>O Jogo da Imitação</Text>
          <Text style={styles.subtitulo}>
            Diretor: Morten Tyldum | Ano: 2014 | Duração: 1h 54min
          </Text>
        </View>
      </View>
      <View style={styles.acaoContainer}>
        <View style={styles.acaoButton}>
          <Image source={{ uri: linkIcone1 }} style={styles.icone} />
          <Text style={styles.acaoText}>Comentarios</Text>
        </View>
        <View style={styles.acaoButton}>
          <Image source={{ uri: linkIcone2 }} style={styles.icone} />
          <Text style={styles.acaoText}>Avaliar</Text>
        </View>
        <View style={styles.acaoButton}>
          <Image source={{ uri: linkIcone3 }} style={styles.icone} />
          <Text style={styles.acaoText}>Compartilhar</Text>
        </View>
      </View>
      <View style={styles.descricaoContainer}>
        <Text style={styles.texto}>
          Em 1939, a recém-criada agência de inteligência britânica MI6 recruta
          Alan Turing, um aluno da Universidade de Cambridge, para entender
          códigos nazistas, incluindo o "Enigma", que criptógrafos acreditavam
          ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as
          mensagens de "Enigma", enquanto ele constrói uma máquina para
          decifrá-las. Após desvendar as codificações, Turing se torna herói.
          Porém, em 1952, autoridades revelam sua homossexualidade, e a vida
          dele vira um pesadelo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 60,
    backgroundColor: "#010929",
  },

  imgContainer: {
    flex: 3,
    content: "center",
  },

  infoContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
  },

  tituloContainer: {
    flex: 1,
  },

  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },

  subtitulo: {
    fontSize: 14,
    color: "lightgray",
  },

  acaoContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  acaoButton: {
    flexDirection: "column",
    alignItems: "center",
  },

  icone: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },

  acaoText: {
    fontSize: 12,
    color: "yellow",
    fontWeight: "600",
  },

  descricaoContainer: {
    flex: 3,
    padding: 20,
  },

  texto: {
    fontSize: 14,
    lineHeight: 22,
    color: "white",
    textAlign: "justify",
  },
});

export default MeuApp;
