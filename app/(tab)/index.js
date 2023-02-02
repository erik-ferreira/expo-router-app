import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home() {
  const router = useRouter();

  function handleOpenProfile() {
    router.push("/profile");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link href="/profile">Ir para o perfil</Link>
      <Button title="Ir para o perfil" onPress={handleOpenProfile} />

      <Link href="/product/6515">Ver produto</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
});
