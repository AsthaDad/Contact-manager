import React from "react";

const Header = () =>{
    return(
        //<div className="ui fixed menu">
            <div className="ui container center"
             style={{border:"2px solid lightblue" ,
              height:"70px" , 
              textAlign:"center",
              boxShadow:"3px 3px lightgray"
              }}>
                <h2 style={{padding:"20px" , fontSize:"30px"}}>Contact Manager</h2>

            </div>
        //</div>
    );
}

export default Header;