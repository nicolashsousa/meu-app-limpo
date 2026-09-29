import { StyleSheet, Text, View } from "react-native";

function calcularImposto(salarioBruto) {
  if (salarioBruto < 2000) {
    return 0.0;
  }

  return salarioBruto * 0.1;
}

function Funcionario() {
  const funcionario = { nome: "John Doe", salarioBruto: 3150.0 };
  let imposto = calcularImposto(funcionario.salarioBruto);
  let salarioLiquido = funcionario.salarioBruto - imposto;

  return (
    <View>
      <Text style={styles.textNome}> {funcionario.nome}</Text>
      <Text style={styles.textSalario}>
        {" "}
        Salario:
        <Text style={styles.aprovado}> R$ {funcionario.salarioBruto}</Text>
      </Text>
      <Text style={styles.textSalario}>
        {" "}
        Imposto:
        <Text style={styles.aprovado}> R$ {imposto}</Text>
      </Text>
      <Text style={styles.textSalario}>
        {" "}
        Salario liquido:
        <Text style={styles.aprovado}> R$ {salarioLiquido}</Text>
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloApp}>Contra cheque</Text>

      <View style={styles.card}>
        <Funcionario> </Funcionario>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  tituloApp: {
    fontSize: 24,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#e0e0e0",
  },
  textNome: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
  },
  textSalario: {
    fontSize: 16,
    color: "#666666",
  },
  aprovado: {
    color: "#2e7d32",
    fontWeight: "bold",
  },
});
