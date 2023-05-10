import React from "react";


function Sass() {
    return (
        
        <div className="mydiv">
       
            <div className="content">
            <span className="fa fa-facebook"></span>
            <span className="fa fa-whatsapp"></span>
            <span className="fa fa-instagram"></span>
            <h1>login here</h1>
            <form>
            <input type="text" name="email" placeholder="E-mail *"required/><br></br><br></br>
            <input type="password" name="pass" placeholder="password *" required/> <br/><br/><br/>    
            
            <input type="submit" className="btn" value="submit"></input>
            <br/><br/>
            <h3>Don't have an account ?<a href="">signup</a></h3>
            </form>
            </div>
            

            
        </div>
        

    )
};

export default Sass;