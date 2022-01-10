import React from 'react';
import "../styles/main.css";
import Modal from "../popup/popup_form";

const App = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <div className='app'>
            <main>
                <button className="contact-button">СВЯЗЬ С НАМИ!</button>
            </main>
            <Modal active = {modalActive} setActive = {setModalActive}/>
        </div>
    );
}

export default App;