import { useState } from 'react'
import { 
  Button,
  StyleSheet,
  TextInput, 
  Text, 
  View } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState([])
  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }
    const adicionarLembrete = () => {
      setLembretes(lembretes => {
        const aux = [lembrete, ... lembretes]
        setLembrete('')
        return aux
      })
    }
    
  return (
    <View style={styles.container}>
      <View>
        <TextInput 
        style={styles.lembreteTextInput}
        placeholder='Desejo Lembrar ..'
        onChangeText={capturarLembrete}
        value={lembrete}
        />
        <Button
          title="OK"
          onPress={adicionarLembrete} />
      </View>
      <View>
        {
        lembretes.map((l) => <View style={styles.itemNaLista}><Text>{l}</Text></View>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    borderColor: 'blue',
    borderWidth: 1,
    width: '100%'
  },
  lembreteTextInput:{
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    padding: 12,
    textAlign: 'center',
    outlineStyle: 'none',
    marginBottom: 4
  },
  itemNaLista:{
    padding: 12,
    borderColor: '#EEE',
    backgroundColor: '#DDD',
    marginBottom: 4,
    textAlign:'center',
    borderRadius: 4
  }
})

