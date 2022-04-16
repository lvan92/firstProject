import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";
import { Button } from "native-base";
import { stylesWellCome } from "./style";
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid';

export const WellCome = ({ userName, onBackLogin = () => {} }) => {
  const userArr = useSelector(state => state.user.listUser);
  const dispatch = useDispatch();
  const [array, setArray] = useState(()=>{
    return userArr;
  });
  const [name, setName] = useState(() => {
    return userName;
  });
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={stylesWellCome.itemContainer}
        onPress={() => alert(item.key)}
      >
        <Text>{item.name}</Text>
        <Text> {item.password}</Text>
      </TouchableOpacity>
    );
  };
  const backLogin = () => {
    setName("");
    Keyboard.dismiss();
    onBackLogin();
  };

  const [inputValue, setInput] = useState("");

  const inputAction = () => {
      Keyboard.dismiss();
    if (inputValue) {
      let key = array?.length ? array.length + 1 : 1;
      const arrayAfter = [...array, { key: key.toString(),  name: inputValue, password: '' }];
      setArray(arrayAfter);
      setInput("");
    }
  };
  return (
    <>
      <View style={stylesWellCome.container}>
        <View style={stylesWellCome.header}>
          <Text>WellCome</Text>
          <Text>{name}</Text>
          <View style={stylesWellCome.insertContainer}>
            <TextInput
              value={inputValue}
              style={stylesWellCome.input}
              numberOfLines={1}
              multiline={false}
              placeholder={"Input value"}
              onChangeText={(value) => {
                setInput(value);
              }}
            />
            <Button style={stylesWellCome.buttonInsert} onPress={inputAction}>
              <Text>Input</Text>
            </Button>
          </View>
        </View>
        <View style={stylesWellCome.body}>
          <FlatList
            data={array}
            style={stylesWellCome.list}
            renderItem={renderItem}
            key={(item, index) => index.toString()}
            scrollToOverflowEnabled={true}
            scrollEnabled={true}
            overScrollMode="always"
            pad
          />
        </View>
        <View style={stylesWellCome.footer}>
          <Button style={stylesWellCome.backButton} onPress={backLogin}>
            <Text>Back Login</Text>
          </Button>
        </View>
      </View>
    </>
  );
};
