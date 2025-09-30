import React from "react";
import './header.css';
import MainContainer from "../../component/main_container";

export const Header = () => {

    return(

        <>
            <MainContainer
            mainClass="headermaincontainer" 
            containerClass="headercontainer"
            children = {
                <>  
                    <div className="headerparent cstm_flex flex_j-space-between flex_a-center gap_cstm">
                        <div className="logoimgdiv">
                            <h1>Logo</h1>
                        </div>
                        <div className="headerdetailsdiv cstm_flex flex_j-space-between flex_a-center gap_cstm">

                        </div>
                        <div className="headeraccountdiv cstm_flex flex_j-space-between flex_a-center gap_cstm">
                            <h1>Register</h1>
                            <a href="#">Login</a>
                        </div>

                    </div>
                </>
            }
            />
        </>
    )
}

