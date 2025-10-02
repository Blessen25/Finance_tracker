import React from "react";
import './header.css';
import MainContainer from "../../component/main_container";
import { Button_Text, Button_Text_Icon } from "../../component/button_comp";
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
                            <a href="#">Home</a>
                            <a href="#">Features</a>
                            <a href="#">About</a>
                            <a href="#">Discover</a>
                            <a href="#">Support</a>

                        </div>
                        <div className="headeraccountdiv cstm_flex flex_j-space-between flex_a-center gap_cstm p-normal us-none">
                            <a href="#">Register</a>
                            <Button_Text_Icon text="Login" icon={<FaPlus/>}/>
                        </div>

                    </div>
                </>
            }
            />
        </>
    )
}

