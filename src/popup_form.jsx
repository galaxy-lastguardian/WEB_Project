import React from 'react';
import Signup from './javascript/Signup';
import "./popup.css"
// IMAGES ***************************
import feedbackIcon1 from "./img/feedback-icon1.png";
import feedbackIcon2 from "./img/feedback-icon2.png";
import footerPic1 from "./img/footer-pic1.svg";
import footerPic2 from "./img/footer-pic2.png";
// IMAGES ***************************

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "popup_form_overlay active" : "popup_form_overlay"} onClick= {() => setActive(false)}>
            <div className={active ? "popup_form_wrapper active" : "popup_form_wrapper"} onClick = {e => e.stopPropagation()}>
                <img src={footerPic1} alt="drupal-coder" className="pic1"/>
                <img src={footerPic2} alt="drupal-coder" className="pic2"/>
                <div className="container">
                    <span className="closeBtn" onClick= {() => setActive(false)}>&#10006;</span>
                    <div className="feedback" id="feedback-form">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="row">
                                    <div className="col-12 text-center text-md-start">
                                        <h2>Оставить заявку на поддержку сайта</h2>
                                    </div>
                                    <div className="col-12">
                                        <p>Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!</p>
                                        <div className="elem">
                                            <div className="number">
                                                <h3><img src={feedbackIcon1} alt="icon" className="icon"/> 8 800 222-26-73</h3>
                                            </div>
                                            <div className="email">
                                                <img src={feedbackIcon2} alt="icon" className="icon"/>
                                                <a href="https://drupal-coder.ru">info@drupal-coder.ru</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <Signup/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;