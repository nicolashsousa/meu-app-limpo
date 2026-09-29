import { View, Text, ScrollView } from "react-native";

//Questao1
function calcularMedia(n1,n2,n3){ 
  let a = (n1 + n2 + n3 )/3 
  return a 
} 
 
function Media(){ 
  let nota1 = 9.0 
  let nota2 = 7.0 
  let nota3 = 8.0 
  let media = calcularMedia(nota1,nota2,nota3) 
  return( 
    <View> 
      <Text> Media: {media}</Text> 
    </View> 
  ) 
}

//Questao2
function calcularImposto(s) {
  return s*0.1
}

function Imposto() {
  let nome = "Nicolas"
  let salario = 1550
  let imposto = calcularImposto(salario)

  return (
    <View>
      <Text> Nome: {nome} </Text>
      <Text> Salário: R$ {salario} </Text>
      <Text> Imposto: R$ {imposto} </Text> 
    </View>
  )
}
 
//Questao3
function temperaturaK(c) {
  return c + 273.15
}

function temperaturaF(k) {
  return ((k*9)/5) + 32
}

function Temperatura() {
  let celsius = 100
  let kelvin = temperaturaK(celsius)
  let fahrenheit = temperaturaF(kelvin)

  return (
  <View>
    <Text> Celsius = {celsius} </Text>
    <Text> Kelvin = {kelvin}</Text>
    <Text> Fahrenheit = {fahrenheit}</Text>
  </View>
  )
}

//Questao4
function Cabecalho(){
  return (
    <View>
      <Text> IFPI Company SA </Text>
      <Text> Departamento de Desenvolvimento </Text>
    </View>
  )
}

function Empresa(){
  let funcionario = "Levi"
  let aluno = "11000"
  return (
    <View>
      <Cabecalho></Cabecalho>
      <Text> Funcionario: {funcionario} </Text>
      <Text> Aluno: {aluno} </Text>
    </View>
  )
}

//Questao5
function Aluno1(){
  let nome = "Jose"
  let media = 7

  return (
    <View>
      <Text> Aluno: {nome} </Text>
      <Text> Media: {media} </Text>
    </View>
  )
}

function Aluno2(){
  let nome = "Maria"
  let media = 9

  return (
    <View>
      <Text> Aluno: {nome} </Text>
      <Text> Media: {media} </Text>
    </View>
  )
}

function Alunos(){
  return (
    <View>
      <Aluno1></Aluno1>
      <Text> </Text>
      <Aluno2></Aluno2>
    </View>
  )
}

//Questao6
const calculoMedia = (n1, n2, n3) => (n1 + n2 + n3 )/3

function Media1(){ 
  let nota1 = 7.0 
  let nota2 = 7.5 
  let nota3 = 8.6 
  let media = calculoMedia(nota1,nota2,nota3) 
  return( 
    <View> 
      <Text> Media: {media}</Text> 
    </View> 
  ) 
}

//Questao7
const calculoImposto = (s) => s*0.1

function Imposto1(){ 
  let nome = "Nicolas"
  let salario = 1750
  let imposto = calculoImposto(salario)

  return (
    <View>
      <Text> Nome: {nome} </Text>
      <Text> Salário: R$ {salario} </Text>
      <Text> Imposto: R$ {imposto} </Text> 
    </View>
  )
}

//Questao8
const App = () => {
  let nome = "Erwin"
  let salario = 3050

  return(
  <View>
    <Cabecalho></Cabecalho>
    <Text> Funcionário: {nome}</Text>
    <Text> Salário: R$ {salario}</Text>
    </View>
    )
}

export default function MinhaAtividade(){
  return(
    <ScrollView>
      <Text style={{  
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        textAlign: 'center' 
        }}> Lista de Exercícios
      </Text>

      <Text>Questao1</Text>
      <Media></Media>
      <Text> </Text>

      <Text>Questao2</Text>
      <Imposto></Imposto>
      <Text> </Text>

      <Text>Questao3</Text>
      <Temperatura></Temperatura>
      <Text> </Text>

      <Text>Questao4</Text>
      <Empresa></Empresa>
      <Text> </Text>

      <Text>Questao5</Text>
      <Alunos></Alunos>
      <Text> </Text>

      <Text>Questao6</Text>
      <Media1></Media1>
      <Text> </Text>

      <Text>Questao7</Text>
      <Imposto1></Imposto1>
      <Text> </Text>

      <Text>Questao8</Text>
      <App></App>

    </ScrollView>
  )
}