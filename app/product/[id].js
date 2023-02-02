import { useRouter, useSearchParams } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Product() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto: {searchParams?.id || 0}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
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
