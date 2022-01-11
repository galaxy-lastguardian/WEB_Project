import React from 'react';
import "./popup.css"
import Signup from "./javascript/Signup";

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "popup_form_overlay active" : "popup_form_overlay"} onClick= {() => setActive(false)}>
            <div className={active ? "popup_form_wrapper active" : "popup_form_wrapper"} onClick = {e => e.stopPropagation()}>
                <img src="/img/footer-pic1.svg" alt="drupal-coder" className="pic1"/>
                <img src="/img/footer-pic2.png" alt="drupal-coder" className="pic2"/>
                <div className="container">
                    <span onClick= {() => setActive(false)}>&#10006;</span>
                    <div className="feedback" id="feedback-form">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-12 text-center text-md-start">
                                        <h2>Оставить заявку на поддержку сайта</h2>
                                    </div>
                                    <div className="col-12">
                                        <p>Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!</p>
                                        <div className="elem">
                                            <div className="number">
                                                <h3><img src="/img/feedback-icon1.png" alt="icon" className="icon"/> 8 800 222-26-73</h3>
                                            </div>
                                            <div className="email">
                                                <img src="/img/feedback-icon2." alt="icon" className="icon"/>
                                                <a href="">info@drupal-coder.ru</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <Signup/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal