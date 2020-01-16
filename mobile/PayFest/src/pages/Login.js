import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import api from "../services/api";

// import { Container } from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("Console");
      }
    });
  }, []);
  async function handleSubmit() {
    //email
    const response = await api.post("/sessions", {
      email
    });
    const { _id } = response.data.user;
    await AsyncStorage.setItem("user", _id);

    navigation.navigate("Console");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PayFest</Text>

      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#7c7c7c"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.buttom}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    fontWeight: "bold",
    color: "#0080c0",
    fontSize: 40
  },
  label: {
    fontWeight: "bold",
    color: "#7c7c7c",
    marginBottom: 7,
    fontSize: 10
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#7c7c7c",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  buttom: {
    height: 42,
    backgroundColor: "#0080c0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
