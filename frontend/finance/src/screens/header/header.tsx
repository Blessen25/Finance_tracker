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
                    <div className="headerparent cstm_flex flex_j-space-between flex_a-center gap_cstm us-none">
                        <div className="logoimgdiv">
                            <h1>Logo</h1>
                        </div>
                        <div className="headerdetailsdiv cstm_flex flex_j-space-between flex_a-center gap_cstm fo-400 p-normal us-none">
                            <p>Home</p>
                            <p>Features</p>
                            <p>About</p>
                            <p>Discover</p>
                            <p>Support</p>

                        </div>
                        <div className="headeraccountdiv cstm_flex flex_j-space-between flex_a-center gap_cstm p-normal us-none">
                            <p>Register</p>
                            <a href="#">Login</a>
                        </div>

                    </div>
                </>
            }
            />
        </>
    )
}

