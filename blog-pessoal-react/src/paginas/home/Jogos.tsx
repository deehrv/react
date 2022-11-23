import React from "react";
import './Jogos.css'

let menu1 ='para voce '
let menu2 = 'em alta'

function jogos(){
     return(
        <div>
            <h1 className="fonte">playstore</h1>
            <h2 className="fonte">{menu1}</h2>
            <p className="fonte">jogos </p>
            <p className="fonte">filme </p>
            <p className="fonte">livro </p>
            <br/>
            <h1 className="tipo">categoria</h1>
            <h2 className="tipo">{menu2}</h2>
            <p className="tipo">survive </p>
            <p className="tipo">aventure</p>
            <p className="tipo">simulacao</p>

        </div>
         
     );



}

export default jogos;
