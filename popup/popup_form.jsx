import React from 'react';
import "./styles/popup.css"

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick= {() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick = {e => e.stopPropagation()}>
                <img src="img/footer-pic1.svg" alt="drupal-coder" className="pic1"/>
                <img src="img/footer-pic2.png" alt="drupal-coder" className="pic2"/>
                <div className="container">
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
                                                <h3><img src="img/feedback-icon1.png" alt="icon" className="icon"/> 8 800 222-26-73</h3>
                                            </div>
                                            <div className="email">
                                                <img src="img/feedback-icon2.png" alt="icon" className="icon"/>
                                                <a href="">info@drupal-coder.ru</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <form className="ajaxForm" action="https://formcarry.com/s/46WaOUCdYYl" method="POST" acceptCharset="UTF-8" id="form" name="form">
                                    <div className="row">
                                        <div className="col-12">
                                            <input type="text" placeholder="Ваше имя" name = "name" id="form-name" className="form_input" required/>
                                        </div>
                                        <div className="col-12">
                                            <input type="text" placeholder="Телефон" name = "phone" id="form-phone" className="form_input _number" required/>
                                        </div>
                                        <div className="col-12">
                                            <input type="email" placeholder="E-mail" name = "email" id="form-email" className="form_input _email" required/>
                                        </div>
                                        <div className="col-12">
                                            <textarea name="comment" placeholder="Ваш комментарий" id="form-comment" className="form_input" required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <div className="checkbox">
                                                <input type="checkbox" name = "checkbox" id="form-checkbox" className="checkbox_input" required/>
                                                <label htmlFor="form-checkbox" className="checkbox_label">Отправляя заявку, я даю согласие <a href="">на обработку своих персональных данных</a>.<span>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="form_button">СВЯЖИТЕСЬ С НАМИ</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal