import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import image from "../assets/background.png";
import { AntDesign } from "@expo/vector-icons";

export default RegistrationScreen = () => {
  const [focusOn, setFocusOn] = useState(null);
  const [isSecured, setIsSecured] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <View style={styles.avatar}>
            <Pressable
              onPress={() => console.log("avatar click")}
              style={styles.avatarBtn}
            >
              {({ pressed }) => (
                <AntDesign
                  name="pluscircleo"
                  size={25}
                  color={pressed ? "#ff9100" : "#FF6C00"}
                />
              )}
            </Pressable>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            onFocus={() => setFocusOn("login")}
            onBlur={() => setFocusOn(null)}
            style={[
              styles.input,
              styles.commonText,
              focusOn === "login" && styles.focus,
            ]}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
          />
          <TextInput
            onFocus={() => setFocusOn("email")}
            onBlur={() => setFocusOn(null)}
            style={[
              styles.input,
              styles.commonText,
              focusOn === "email" && styles.focus,
            ]}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
          />
          <View style={{ position: "relative" }}>
            <TextInput
              onFocus={() => setFocusOn("password")}
              onBlur={() => setFocusOn(null)}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={isSecured}
              style={[
                styles.input,
                styles.commonText,
                { marginBottom: 43 },
                focusOn === "password" && styles.focus,
              ]}
            />
            <Pressable
              onPress={() => setIsSecured(!isSecured)}
              style={({ pressed }) => [
                styles.inputBtn,
                pressed && { color: "#ff9100" },
              ]}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.commonText,
                    { color: "#1B4371" },
                    pressed && { color: "#ff9100" },
                  ]}
                >
                  {isSecured ? "Показати" : "Приховати"}
                </Text>
              )}
            </Pressable>
          </View>
          <Pressable
            title="Зареєстуватися"
            onPress={() => console.log("click")}
            style={({ pressed }) => [
              styles.submitBtn,
              pressed && { backgroundColor: "#ff9100" },
            ]}
          >
            <Text style={[styles.submitText, styles.commonText]}>
              Зареєстуватися
            </Text>
          </Pressable>
          <Text style={[styles.commonText, { color: "#1B4371" }]}>
            Вже є акаунт? Увійти
          </Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "auto",
  },
  form: {
    position: "relative",
    alignItems: "center",
    paddingTop: 92,
    paddingHorizontal: 16,
    // paddingBottom: 45,
    minHeight: 549,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatarBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  title: {
    marginBottom: 33,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.3,
    color: "#212121",
  },
  commonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    // lineHeight: 16 * 1.2,
  },
  input: {
    // padding: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: 343,
    height: 50,

    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  focus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFF",
  },
  inputBtn: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  submitBtn: {
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: 343,
    // elevation: 3,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  submitText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
