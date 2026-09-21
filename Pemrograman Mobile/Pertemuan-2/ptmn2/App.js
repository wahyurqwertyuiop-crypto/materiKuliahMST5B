import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Nama: Wahyu Ramdhani </Text>
      <Text> NIM : 2488010037 </Text>
      <Text> Prodi : Teknik Informatika </Text>
      <Text> Asal Sekolah : MAN 2 Kota Cirebon </Text>
      <Text> Cita-Cita : Bangun Negara</Text>
      <Text> Cara Menggepai Cita-cita : Jadi Presiden mungkin cukup</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
