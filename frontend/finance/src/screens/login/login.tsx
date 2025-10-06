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
            containerClass="cstm_flex flex_j-center "
            children = {

                <>

                <div className="loginparent cstm_flex  flex_d-col gap_cstm w-500px">
                        <h1 className="h1-big">Login</h1>
                        <form action={"#"} className="cstm_flex gap_cstm flex_d-col">
                            <label className="p-normal">Email id or Username<span className="color-danger"> *</span></label>
                            <input type="text" className="inputcstm" />
                        </form>
                    </div>
                </>
            }
            />
        </>
    )
}

export default Login;