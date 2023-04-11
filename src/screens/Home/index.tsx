import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = ['Gabriel', 'Rodrigo', 'Carlos', 'Ana', 'Bianca', 'Clara', 'Luana', 'Vinny',]
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");

  }
  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Segunda, 10 de Março de 2023.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant 
      key={item}
      name={item} 
      onRemove={() => handleParticipantRemove("gabriel")} />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou ou evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
      />
      
    </View>
  )
}