import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import image from "../assets/background.png";
import { AntDesign } from "@expo/vector-icons";

export default RegistrationScreen = () => {
  const [focusOn, setFocusOn] = useState(null);
  const [isSecured, setIsSecured] = useState(true);

  const login = useRef("");
  const email = useRef("");
  const password = useRef("");

  const submit = () => {
    const formValues = {
      login: login.current,
      email: email.current,
      password: password.current,
    };

    console.log(formValues);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-180}
        style={styles.container}
      >
        <StatusBar style="auto" />
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
              onChangeText={(text) => (login.current = text)}
              onFocus={() => setFocusOn("login")}
              onBlur={() => setFocusOn(null)}
              autoComplete="name"
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              cursorColor="#FF6C00"
              style={[
                styles.input,
                styles.commonText,
                focusOn === "login" && styles.focus,
              ]}
            />
            <TextInput
              onChangeText={(text) => (email.current = text)}
              onFocus={() => setFocusOn("email")}
              onBlur={() => setFocusOn(null)}
              autoComplete="email"
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              cursorColor="#FF6C00"
              style={[
                styles.input,
                styles.commonText,
                focusOn === "email" && styles.focus,
              ]}
            />
            <View style={{ position: "relative", width: "100%" }}>
              <TextInput
                onChangeText={(text) => (password.current = text)}
                onFocus={() => setFocusOn("password")}
                onBlur={() => setFocusOn(null)}
                secureTextEntry={isSecured}
                autoComplete="password"
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                cursorColor="#FF6C00"
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
              onPress={submit}
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    paddingBottom: 79,
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
    width: "100%",
    // width: 343,
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
    width: "100%",
    // elevation: 3,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  submitText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
