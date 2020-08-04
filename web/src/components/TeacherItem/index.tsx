import React from 'react'

import whatsapp from "../../assets/images/icons/whatsapp.svg";

import "./style.css"

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
        <img src="https://avatars1.githubusercontent.com/u/33969430?s=460&u=5ba7015754cacff77e821a2d87663693aa1b619e&v=4" alt=""/>
        <div>
            <strong>Anderson Pablo</strong>
            <span>OLaaa</span>
        </div>
    </header>
    <p>
        Lorem ipsum dolor sit amet, consectetur 
        <br/>
      adipisicing elit.
        Repellat maxime quasi ipsum fuga assumenda earum eligendi<br /><br />
        ut molestias nihil, natus libero, voluptatibus harum,
        expedita a minus! Iste molestias, quo autem?
    </p>
    <footer>
        <p>
           Preço/hora
         <strong>R$ 55,55</strong>  
        </p>
        <button>
            <img src={whatsapp} alt=""/>
            Entrar em contato
        </button>
    </footer>
</article>
  )
}

export default TeacherItem;