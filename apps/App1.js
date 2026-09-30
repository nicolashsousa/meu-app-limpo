import { ScrollView, Text, View } from "react-native";

function Questao1() {
  let nome = "Nicolas Henrique";
  let salario_base = 2800;
  let imposto = salario_base * 0.2;

  return (
    <View>
      <Text> Funcionario </Text>
      <Text> Nome: {nome} </Text>
      <Text> Salario Base: R$ {salario_base} </Text> 
      <Text> Imposto: R$ {imposto} </Text>
    </View>
  );
}

function Questao2(){
  let nome = "Nicolas Henrique";
  let salario_base = 7000;
  let imposto = salario_base * 0.2;
  let salario_liquido = salario_base - imposto;

  return (
    <View>
      <Text> Funcionario </Text>
      <Text> Nome: {nome} </Text>
      <Text> Salario Base: R$ {salario_base} </Text> 
      <Text> Imposto: R$ {imposto} </Text>
      <Text> Salario liquido: R$ {salario_liquido} </Text>
    </View>
  );
}

function Questao3(){
  let celsius = 100;
  let Kelvin = celsius + 273.15;
  let Fahrenheit = ((celsius*9)/5) + 32;

  return (
    <View>
      <Text> Celsius = {celsius} </Text>
      <Text> Kelvin = {Kelvin}</Text>
      <Text> Fahrenheit = {Fahrenheit}</Text>
    </View>
  )
}

function Questao4(){
  let nome = "Nicolas";
  let salario = 700;
  let msg = "";

  if (salario > 1000.50){
    msg = "deve pagar imposto";
  } else {
    msg = "não deve pagar imposto";
  }

  return (
    <View>
      <Text> {nome} {msg} </Text>
    </View>
  )
}

function Questao5(){
  let nome = "Nicolas";
  let salario = 20500;
  let msg = "";

  if (2000 >= salario && salario > 1000){
    msg = "deve pagar um imposto de "+salario*0.1+" R$";
  } else if (salario > 2000){
    msg = "deve pagar um imposto de "+salario*0.15+ "R$";
  } else {
    msg = "não deve pagar imposto"
  }

  return (
    <View>
      <Text> {nome} {msg} </Text>
    </View>
  )
}

function Questao6A(){
  const listaDeNumeros = [];

  for (let i = 0; i <= 100; i++) {
    listaDeNumeros.push(
      <Text key={i} style={{ fontSize: 14, marginVertical: 2 }}>
        {i}
      </Text>
    );
  }

  return (
    <View>
      {listaDeNumeros}
    </View>
  );
}

function Questao6B(){
  const listaDeNumeros = [];

  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      listaDeNumeros.push(
      <Text key={i} style={{ fontSize: 14, marginVertical: 2 }}>
        {i}
      </Text>
      );
    }
  }

  return (
    <View>
      {listaDeNumeros}
    </View>
  );
}

function Questao7(){
  let listaDeTemperaturas = [10, 20, 40, 80, 160];
  let media = 0;
  let soma = 0;

  let maior = listaDeTemperaturas[0];
  let menor = listaDeTemperaturas[0];

  for (let i = 0; i < listaDeTemperaturas.length; i++) {
    soma = soma + listaDeTemperaturas[i]; 
    
    if (listaDeTemperaturas[i] > maior) {
      maior = listaDeTemperaturas[i];
    }
    
    if (listaDeTemperaturas[i] < menor) {
      menor = listaDeTemperaturas[i];
    }
  }

  media = soma/listaDeTemperaturas.length;

  return (
    <View>
      <Text> Media = {media}</Text>
      <Text> Maior Temperatura = {maior}</Text>
      <Text> Menor Temperatura = {menor}</Text>
    </View>
  );
}

function Questao8(){
  let funcionario = {
  nome: "Nicolas Henrique",
  salario: 2000
  };

  return (
    <View>
      <Text> Nome: {funcionario.nome}</Text>
      <Text> Salario: {funcionario.salario} R$</Text>
    </View>
  );
}

export default function App(){
  return(
    <ScrollView style={{ padding: 40 }}>
      
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}> Atividade 01 </Text>
      
      <Text>Questao 1</Text>
      <Questao1 />
      <Text> </Text>

      <Text>Questao 2</Text>
      <Questao2 />
      <Text> </Text>

      <Text>Questao 3</Text>
      <Questao3 />
      <Text> </Text>

      <Text>Questao 4</Text>
      <Questao4 />
      <Text> </Text>

      <Text>Questao 5</Text>
      <Questao5 />
      <Text> </Text>

      <Text>Questao 6A</Text>
      <Questao6A />
      <Text> </Text>
      
      <Text>Questao 6B</Text>
      <Questao6B />
      <Text> </Text>

      <Text>Questao 7</Text>
      <Questao7 />
      <Text> </Text>

      <Text>Questao 8</Text>
      <Questao8 />
    </ScrollView>
  )
}