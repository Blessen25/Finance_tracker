import React from "react";
import './login.css';
import { Header } from "../header/header";
import MainContainer from "../../component/main_container";

const Login = () => {

    return (

        <>
            <Header />
            <MainContainer 
            mainClass="loginmaincontainer"
            children = {

                <>

                    <div className="loginparent cstm_flex flex_j-center  gap_cstm">
                        <h1>asdsad</h1>
                    </div>
                </>
            }
            />
        </>
    )
}

export default Login;