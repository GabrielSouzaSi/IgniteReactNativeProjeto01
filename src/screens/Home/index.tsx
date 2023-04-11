import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
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
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participants => (
      <Participant 
      key={participants}
      name={participants} 
      onRemove={() => handleParticipantRemove("gabriel")} />
        ))
      }
      </ScrollView>
    </View>
  )
}