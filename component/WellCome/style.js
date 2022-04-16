import { StyleSheet } from "react-native";

export const stylesWellCome = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        width: '100%'
    },
    body: {
        flex: 3,
        width: '90%',
        alignItems: 'center',
        borderRadius: 15,
        color: 'black',
        padding: 10
    },
    list: {
        width: '100%',
        borderWidth: 1,
        paddingHorizontal: 5
    },
    footer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    itemContainer: {
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 0.8,
        marginVertical:5
    },
    backButton: {
        width: '40%',
        justifyContent: 'center',
        borderRadius: 10,
    },
    insertContainer: {
        display: 'flex',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '65%',
        borderRadius: 10,
        paddingLeft: 20
    },
    buttonInsert: {
        width: '20%',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5,
        height: 30
    }
})