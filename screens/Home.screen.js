
import { Button } from "native-base";
import { Text, View, StyleSheet, TextInput } from "react-native";

export  function Home () {
    return (
        <>
            <View style={styles.container} >
                <View style={styles.Header}></View>
                <View style={styles.Content}>
                    <Text>Username</Text>
                    <TextInput
                        numberOfLines={2}
                        style={styles.inputStyle}
                        multiline={false}
                        placeholder={"Please input username"}

                    />
                    <Text>Password</Text>
                    <TextInput
                        numberOfLines={2}
                        style={styles.inputStyle}
                        multiline={false}
                        placeholder={"Please input password"}
                        secureTextEntry={true}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} onPress={()=> console.log("login")} >
                            <Text>Login</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.Footer} ></View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    Header: {
        flex: 1
    },
    Content: {
        flex: 2,
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 20,
        padding:20,
        justifyContent: 'center',
    },
    Footer: {
        flex: 1
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
         
    },
    button: {
        width: '100%',
        borderRadius: 5,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        backgroundColor: 'transparent',
        width: '100%',
        paddingLeft: 20
    }
  });