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
                            <p>Home</p>
                            <p>Features</p>
                            <p>About</p>
                            <p>Discover</p>
                            <p>Support</p>

                        </div>
                        <div className="headeraccountdiv cstm_flex flex_j-space-between flex_a-center gap_cstm">
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

