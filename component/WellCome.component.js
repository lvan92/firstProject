import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

export const WellCome = (userName) =>  {
    const [array, setArray] = useState(() => {
        const array = [
            {
                key: '1',
                name: 'A'
            },
            {
                key: '2',
                name: 'B'
            },
            {
                key: '3',
                name: 'C'
            },
            {
                key: '4',
                name: 'D'
            },
            {
                key: '5',
                name: 'E'
            },
            {
                key: '6',
                name: 'F'
            },
        ];
        return array;
    });
    const [name, setName] = useState(()=> {
        const {userName: uName} = userName;
        return uName;
    });
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => console.log(name)} >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <>
            <View style={styles.container} > 
                <View style={styles.header} >
                    <Text>WellCome</Text>
                    <Text>{name}</Text>
                </View> 
                <View style={styles.body} >
                    <FlatList
                        data={array}
                        style={styles.list}
                        renderItem={renderItem}
                        // numColumns={1}
                        key={(item, index) => index.key}
                    />
                </View>
                <View style={styles.footer} >
                    <Text>WellCome</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 3,
        width: '90%',
        alignItems: 'center',
        borderRadius: 15,
        // backgroundColor: 'green',
        color: 'black'
    },
    list: {
        width: '100%',
        // justifyContent: 'center'
    },
    footer: {
        flex: 1
    },
    itemContainer: {
        width: '100%',
        height: 50,
        alignItems: "center"
    }
})