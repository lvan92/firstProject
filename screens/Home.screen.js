import { useState } from "react";
import LoginComponent from "../component/Login/Login.component";
import { WellCome } from "../component/WellCome/WellCome.component";
import { useSelector, useDispatch } from 'react-redux';

export function Home () {
    const loading = useSelector(state => state.loading);
    // const [loading,SetLoadingReducer] = useReducer(loadingReducer, loadingDefault);
    const dispatch = useDispatch();
    const onGetLoginStatus = function (isLogin, username) {
        setLoginStatus(isLogin);
        setName(username);
        setTimeout(()=>{
            dispatch({
                type: "LOADING",
                isLoading: false
            })
        },3000)
    };
   
    const [isLogin,setLoginStatus] = useState(false);
    const [name,setName] = useState('');

    const resetLogin = () => {
        setName('');
        setLoginStatus(false);
    }

    return (
        <>
        {!isLogin ? 
        <LoginComponent
            onGetLoginStatus={(isLogin, name) => onGetLoginStatus(isLogin, name)}
        /> : 
        <WellCome
            userName={name}
            onBackLogin={resetLogin}
        />
        }
        </>
    )
};

