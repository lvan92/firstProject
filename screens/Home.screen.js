import { useState } from "react";
import LoginComponent from "../component/Login.component";
import { View, Text } from "react-native";
import { Button } from "native-base";
import { WellCome } from "../component/WellCome.component";

export function Home () {
    const onGetLoginStatus = function (isLogin, username) {
        setLoginStatus(isLogin);
        setName(username);
    }
    const [isLogin,setLoginStatus] = useState(false);
    const [name,setName] = useState('A');
    return (
        <>
        {!isLogin ? 
        <LoginComponent
            onGetLoginStatus={(isLogin, name) => onGetLoginStatus(isLogin, name)}
        /> : 
        <WellCome
            userName={name}
        />
        }
        </>
    )
};

