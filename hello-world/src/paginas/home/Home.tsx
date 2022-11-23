import React from "react";
import './Home.css'

let nome ='liza'

function Home(){
     return(
        <div>
            <h1 className="fonte">ola mundo</h1>
            <h2>{nome}</h2>
            <p className="fonte"> trabalho hello wolrd</p>
        </div>
     );

}

export default Home;