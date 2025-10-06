import React from "react";
import './header.css';
import MainContainer from "../../component/main_container";
import { Button_Text_Icon } from "../../component/button_comp";
import { FaPlus } from "react-icons/fa";

export const Header = () => {

    return(

        <>
            <MainContainer
            mainClass="headermaincontainer" 
            containerClass="headercontainer"
            children = {
                <>  
                    <div className="headerparent cstm_flex flex_j-space-between flex_a-center gap_cstm us-none">
                        <div className="logoimgdiv">
                            <h1>Logo</h1>
                        </div>
                        <div className="headerdetailsdiv cstm_flex flex_j-space-between flex_a-center gap_cstm fo-400 p-normal us-none">
                            <a href="#" className="p-normal">Home</a>
                            <a href="#" className="p-normal">Features</a>
                            <a href="#" className="p-normal">About</a>
                            <a href="#" className="p-normal">Discover</a>
                            <a href="#" className="p-normal">Support</a>

                        </div>
                        <div className="headeraccountdiv cstm_flex flex_j-space-between flex_a-center gap_cstm p-normal us-none">
                            <a href="/register" className="p-normal">Register</a>
                            <Button_Text_Icon text="Login" icon={<FaPlus/>} route="/login"/>
                        </div>

                    </div>
                </>
            }
            />
        </>
    )
}

