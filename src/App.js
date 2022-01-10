import React from 'react';
import {useState} from 'react';
import Modal from "./popup_form";
import './javascript/sliderCollegues';
import './javascript/sliderReviews';
import './javascript/form';
import './App.css';
import './styleSlider.css';
// IMAGES ***************************

import cableman_ru from "./img/cableman_ru.png"
import cases from "./img/cases.jpg"
import checkboxIcon from "./img/checkbox-icon.png"
import company1 from "./img/company-1.png"
import company2 from "./img/company-2.png"
import company3 from "./img/company-3.png"
import company4 from "./img/company-4.png"
import company5 from "./img/company-5.png"
import company6 from "./img/company-6.png"
import company7 from "./img/company-7.png"
import company8 from "./img/company-8.png"
import company9 from "./img/company-9.png"
import company10 from "./img/company-10.png"
import company11 from "./img/company-11.png"
import company12 from "./img/company-12.png"
import company13 from "./img/company-13.png"
import company14 from "./img/company-14.png"
import company15 from "./img/company-15.png"
import company16 from "./img/company-16.png"
import competency1 from "./img/competency-1.svg"
import competency2 from "./img/competency-2.svg"
import competency3 from "./img/competency-3.svg"
import competency4 from "./img/competency-4.svg"
import competency5 from "./img/competency-5.svg"
import competency6 from "./img/competency-6.svg"
import competency7 from "./img/competency-7.svg"
import competency8 from "./img/competency-8.svg"
// import competency20 from "./img/competency-20.svg"
// import competency21 from "./img/competency-21.svg"
// import competency22 from "./img/competency-22.svg"
import competensionsIconBG from "./img/competensions-icon-bg.svg"
import cup from "./img/cup.png"
// import drupalCoder from "./img/drupal-coder.svg"
import facebook from "./img/facebook.png"
import farbors_ru from "./img/farbors_ru.jpg"
import feedbackIcon1 from "./img/feedback-icon1.png"
import feedbackIcon2 from "./img/feedback-icon2.png"
import footerPic1 from "./img/footer-pic1.svg"
import footerPic2 from "./img/footer-pic2.png"
import sinitca from "./img/IMG_2472_0.jpg"
import man1 from "./img/IMG_2474_1.jpg"
import man2 from "./img/IMG_2539_0.jpg"
import girl1 from "./img/IMG_2522_0.jpg"
import girl2 from "./img/IMG_9971_16.jpg"
import intoductBG from "./img/itroduct-bg.png"
import laptop from "./img/laptop.png"
import logo from "./img/logo.png"
import logo0 from "./img/logo_0.png"
import logo2 from "./img/logo_2.png"
import logoEstee from "./img/logo-estee.png"
import lpcmaRusV4 from "./img/lpcma_rus_v4.jpg"
import nashagazetaCH from "./img/nashagazeta_ch.png"
import navLogo from "./img/nav-logo.png"
import opt from "./img/opt.png"
import reviewsBG from "./img/reviews-bg.svg"
import support1 from "./img/support1.svg"
import support2 from "./img/support2.svg"
import support3 from "./img/support3.svg"
// import support4 from "./img/support4.svg"
import support5 from "./img/support5.svg"
import support6 from "./img/support6.svg"
import support7 from "./img/support7.svg"
import support8 from "./img/support8.svg"
import supportBG from "./img/support-bg.jpg"
import supportBgMobile from "./img/support-bg-mobile.jpeg"
import tarifsBG from "./img/tarifs-bg.png"
import tarifsGalka from "./img/tarifs-galka.png"
import telegram from "./img/telegram.png"
import video from "./img/video.mp4"
import vk from "./img/vk.png"
import youtube from "./img/youtube.png"

// IMAGES ***************************
const App = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className='app'>
            <div className="mobile-menu">
            <div className="logo">
                <a href="" className="menu-logo-link">
                    <img src={navLogo} alt="logo" className="menu-logo-pic"/>
                </a>
            </div>
            <input type="checkbox" id="toggle"/>
            <label htmlFor="toggle">
                <img src={opt} alt="opt" className="opt"/>
            </label>

            <div className="dropdown-div">
                <a href="#" className="nav-link">поддержка drupal</a>
                <a href="#" className="nav-link dropdown-toggle">администрирование</a>
                <a href="#" className="nav-link m">миграция</a>
                <a href="#" className="nav-link m">бэкапы</a>
                <a href = "#" className = "nav-link m">аудит безопасности</a>
                <a href = "#" className = "nav-link m">оптимизация скорости</a>
                <a href = "#" className = "nav-link m">переезд на https</a>
                <a href="#" className="nav-link">продвижение</a>
                <a href="#" className="nav-link">реклама</a>
                <a href="#" className="nav-link dropdown-toggle">о нас</a>
                <a href = "#" className = "nav-link m">команда</a>
                <a href = "#" className = "nav-link m">drupalgive</a>
                <a href = "#" className = "nav-link m">блог</a>
                <a href = "#" className = "nav-link m">курсы drupal</a>
                <a href = "#" className = "nav-link m">вакансии</a>
                <a href="#" className="nav-link">проекты</a>
                <a href="#" className="nav-link">контакты</a>
            </div>

        </div>
        
        <div className="wrapper-nav-introduct">
            <div className="video">
                <video className="video_media" src={video} autoPlay muted loop></video>
            </div>
            <div className="wrapper-nav">
                <div className="container">
                    <div className="navbar">
                        <div className="navbar-logo">
                            <a href="" className="nav-logo-link">
                                <img src={navLogo} className="nav-logo-pic"/>
                            </a>
                        </div>
                        <nav>
                            <div className="content" id ="info-nav">
                                <ul className="nav-list">
                                    <li className = "nav-item">
                                        <a href="#" className="nav-link">поддержка drupal</a>
                                    </li>
                                    <li className = "nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" id="dropdownMenu1Link" data-bs-toggle="dropdown" aria-expanded="false">администрирование</a>
                                        <ul className = "dropdown-menu" aria-labelledby="dropdownMenu1Link">
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">миграция</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">бэкапы</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">аудит безопасности</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">оптимизация скорости</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">переезд на https</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className = "nav-item">
                                        <a href="#" className="nav-link">продвижение</a>
                                    </li>
                                    <li className = "nav-item">
                                        <a href="#" className="nav-link">реклама</a>
                                    </li>
                                    <li className = "nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" id="dropdownMenu2Link" data-bs-toggle="dropdown" aria-expanded="false">о наc</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2Link">
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">команда</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">drupalgive</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">блог</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">курсы drupal</a>
                                            </li>
                                            <li className = "dropdown-item">
                                                <a href = "#" className = "nav-link">вакансии</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className = "nav-item">
                                        <a href="#" className="nav-link">проекты</a>
                                    </li>
                                    <li className = "nav-item">
                                        <a href="#" className="nav-link">контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="wrapper-introduct">
                <div className="container">
                    <div className="introduct">
                        <div className="row my-5">
                            <div className="col-12 col-lg-6">
                                <div className="row text-center text-md-start item1">
                                    <h2>Поддержка <br/> сайтов на Drupal</h2>
                                </div>
                                <div className="row text-center text-md-start item2">
                                    <p>
                                        Сопровождение и поддержка сайтов <br/> на CMS Drupal любых версий и запущенности
                                    </p>
                                </div>
                                <div className="row text-center text-md-start item3">
                                    <div className="tarifs-but">
                                        <button>
                                            ТАРИФЫ
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 mt-5">
                                <div className="row block gy-5">
                                    <div className="col-6 col-md-4 item">
                                        <div className = "cup-block">
                                            <span className = "img-cup-header">#1</span>
                                            <img src={cup} alt="cup" className="img-cup"/>
                                        </div>
                                        <h3 className = "h3-to-hide">  
                                            {/* <!-- этот заголовок необходим чтобы сохранить форматирование как в след. примерах, но спрятать, т.к. основной блок - предыдущий -->
                                            ... */}
                                        </h3>
                                        <p>Drupal-разработчик <br/> в России по версии <br/> Рейтинга Рунета</p>
                                    </div>
                                    <div className="col-6 col-md-4 item">
                                        <h3>3+</h3>
                                        <p>средний опыт <br/> специалистов более <br/> 3 лет</p>
                                    </div>
                                    <div className="col-6 col-md-4 item">
                                        <h3>14</h3>
                                        <p>лет опыта в сфере <br/> Drupal</p>
                                    </div>
                                    <div className="col-6 col-md-4 item">
                                        <h3>50+</h3>
                                        <p>модулей и тем <br/> в формате DrupalGive</p>
                                    </div>
                                    <div className="col-6 col-md-4 item">
                                        <h3>90 000+</h3>
                                        <p>часов поддержки <br/> сайтов на Drupal</p>    
                                    </div>
                                    <div className="col-6 col-md-4 item">
                                        <h3>300+</h3>
                                        <p>Проектов <br/> на поддержке</p>    
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper-main">
            <div className="container">
                <div className="competensions">
                    <h2>13 лет совершенствуем <br/> компетенции в Друпал <br/> поддержке!</h2>
                    <p>Разрабатываем и оптимизируем модули, расширяем <br/> функциональность сайтов, обновляем дизайн</p>
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="competension">
                                <img src={competency1} alt="competension"/>
                            </div>
                            <p>
                                Добавление <br/> информации на сайт, <br/> создание новых <br/> разделов
                            </p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="competension">
                                <img src={competency2} alt="competension"/>
                            </div>
                            <p>
                                Разработка <br/> и оптимизация <br/> модулей сайта
                            </p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="competension">
                                <img src={competency3} alt="competension"/>
                            </div>
                            <p>
                                Интеграция с CRM, <br/> 1C, платежными <br/> системами, любыми <br/> веб-сервисами
                            </p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="competension">
                                <img src={competency4} alt="competension"/>
                            </div>
                            <p>
                                Любые доработки <br/> функционала <br/> и дизайна
                            </p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="competension">
                                <img src={competency5} alt="competension"/>
                            </div>
                            <p>
                                Аудит и мониторинг <br/> безопасности Drupal <br/> сайтов
                            </p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="competension">
                                <img src={competency6} alt="competension"/>
                            </div>
                            <p>
                                Миграция, импорт <br/> контента и апрегйд <br/> Drupal
                            </p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="competension">
                                <img src={competency7} alt="competension"/>
                            </div>
                            <p>
                                Оптимизация <br/> и ускорение <br/> Drupal-сайтов 
                            </p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="competension">
                                <img src={competency8} alt="competension"/>
                            </div>
                            <p>
                                Веб-маркетинг, <br/> консультации <br/> и работы по SEO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper-support"> 
            <div className="container">
                <div className="support">
                    <div className="row text-center">
                        <h2>Поддержка <br/> от Drupal-coder</h2>
                    </div>
                    <div className="row block1">
                        <div className="col-12 col-md-6 col-lg-3 p-0">
                            <div className="elem">
                                <p className="digit">01.</p>
                                <h3>Постановка задачи по Email</h3>
                                <p>Удобная и привычная модель постановки задачи, при которой задачи фиксируются и никогда не теряются.</p>
                                <div className="support-pic">
                                    <img src={support1} alt="pic"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-0">
                            <div className = "elem">
                                <p className="digit">02.</p>
                                <h3>Система Helpdesk - отчетность, прозрачность</h3>
                                <p>Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.</p>
                                <div className="support-pic">
                                    <img src={support2} alt="pic"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-0">
                            <div className = "elem">
                                <p className="digit">03.</p>
                                <h3>Расширенная техническая поддержка</h3>
                                <p>Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных</p>
                                <div className="support-pic">
                                    <img src={support3} alt="pic"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-0">
                            <div className = "elem">
                                <p className="digit">04.</p>
                                <h3>Персональный менеджер проекта</h3>
                                <p>Ваш менеджер всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.</p>
                                <div className="support-pic">
                                    <img src="" alt="pic"/>
                                    {/* support4 */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-0">
                            <div className = "elem">
                                <p className="digit">05.</p>
                                <h3>Удобные способы оплаты</h3>
                                <p>Безналичный расчет по договору или электронные деньги: Webmoney, Яндекс.Деньги, Paypal.</p>
                                <div className="support-pic">
                                    <img src={support5} alt="pic"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-0">
                            <div className = "elem">
                                <p className="digit">06.</p>
                                <h3>Работаем с SLA и NDA</h3>
                                <p>Работа в рамках соглашений о конфиденциальности и об уровне качества работ.</p>
                                <div className="support-pic">
                                    <img src={support6} alt="pic"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-0">
                            <div className = "elem">
                                <p className="digit">07.</p>
                                <h3>Штатные специалисты</h3>
                                <p>Надежные штатные специалисты, никаких фрилансеров.</p>
                                <div className="support-pic">
                                    <img src={support7} alt="pic"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-0">
                            <div className = "elem">
                                <p className="digit">08.</p>
                                <h3>Удобные каналы связи</h3>
                                <p>Консультации по телефону, скайпу, в мессенджерах.</p>
                                <div className="support-pic">
                                    <img src={support8} alt="pic"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ekspertiza">
                        <div className="col-12 col-lg-6  order-lg-1">
                            <h2>Экспертиза в Drupal, <br/> опыт 14 лет!</h2>
                            <div className="row block2">
                                <div className="col-12 col-md-6 item">
                                    <p>
                                        Только системный подход - <br/> контроль версий, <br/> резервирование и <br/> тестирование!
                                    </p>    
                                </div>
                                <div className="col-12 col-md-6 item">
                                    <p>
                                        Только Drupal сайты, не <br/> берем поддержку сайтов <br/> на других CMS!
                                    </p>    
                                </div>
                                <div className="col-12 col-md-6 item">
                                    <p>
                                        Учавствуем в разработке <br/> ядра Drupal и модулей на <br/> Drupal.org, разрабатываем <br/> <span>свои модули Drupal</span>
                                    </p>    
                                </div>
                                <div className="col-12 col-md-6 item">
                                    <p>
                                        Поддерживаем сайты на <br/> Drupal 5, 6, 7 и 8
                                    </p>    
                                </div>
                            </div>
                        </div>
                        <div className="empty-space">...</div>
                        <div className="col-12 col-lg-6 laptop-div">
                            <img src={laptop} alt="laptop" className="laptop"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper-tarifs">
            <div className="container">
                <div className="tarifs" id="tarifs">
                    <div id = "popupPlace"></div>
                    <div className="row text-center">
                        <h2>Тарифы</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4 t1">
                            <div className = "tarif1">
                                <h2 className="orange">Стартовый</h2>
                                <hr/><br/>
                                <ul>
                                    <li>Консультации и работы по SEO</li>
                                    <li>Услуги дизайнера</li>
                                    <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
                                    <li>Предоплата от 6000 рублей в месяц</li>
                                </ul>
                                <div className="col-12 text-center">
                                    <button className="contact-button" onClick={()=>setModalActive(true)}>
                                        СВЯЖИТЕСЬ С НАМИ!
                                    </button>     
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className = "tarif2">
                                <h2 className="orange">Бизнес</h2>
                                <hr/><br/>
                                <ul>
                                    <li>Консультации и работы по SEO</li>
                                    <li>Услуги дизайнера</li>
                                    <li>Высокое время реакции - до 2 рабочих дней</li>
                                    <li>Неиспользованные оплаченные часы не переносятся</li>
                                    <li>Предоплата от 30000 рублей в месяц</li>
                                </ul>
                                <div className="col-12 text-center">
                                    <button className="contact-button" onClick={()=>setModalActive(true)}>
                                        СВЯЖИТЕСЬ С НАМИ!
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className = "tarif3">
                                <h2 className="orange">VIP</h2>
                                <hr/><br/>
                                <ul>
                                    <li>Консультации и работы по SEO</li>
                                    <li>Услуги дизайнера</li>
                                    <li>Максимальное время реакции - в день обращения</li>
                                    <li>Неиспользованные оплаченные часы не переносятся</li>
                                    <li>Предоплата от 270000 в месяц</li>
                                </ul>
                                <div className="col-12 text-center">
                                    <button className="contact-button" onClick={()=>setModalActive(true)}>
                                        СВЯЖИТЕСЬ С НАМИ!
                                    </button>     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p>Вам не подходят наши тарифы? Оставьте заявку и мы <br/> предложим вам индивидуальные условия!</p>
                        <a href="#">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper-main">
            <div className="container">
                <div className="task-time">
                    <h2>Наши профессиональные разработчики <br/> выполняют быстро любые задачи</h2>
                    <div className="row">
                        <div className="col-12 col-md-4 centered">
                            <div className="pic">
                                <img src="" alt="pic"/>
                                {/* competency20 */}
                            </div>
                            <h1>oт 1ч</h1>
                            <p className="text">Настройка события GA <br/> в интернет-магазине</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="pic">
                                <img src="" alt="pic"/>
                                {/* competency21 */}
                            </div>
                            <h1>oт 20ч</h1>
                            <p>Разработка мобильной <br/> версии сайта</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="pic">
                                <img src="" alt="pic"/>
                                {/* competency22 */}
                            </div>
                            <h1>oт 8ч</h1>
                            <p>Интеграции <br/> модуля оплаты</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper-main">
            <div className="container">
                <div className="team">
                    <div className="row text-center">
                        <h2>Команда</h2>
                    </div>
                    <div className="row">
                        <div className="col-6 col-lg-4 item">
                            <img src={sinitca} alt="pic" className="pic"/>
                            <h3>Сергей Синица</h3>
                            <p>Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора</p>
                        </div>
                        <div className="col-6 col-lg-4 item">
                            <img src={man2} alt="pic" className="pic"/>
                            <h3>Роман Агабеков</h3>
                            <p>Руководитель отдела DevOPS, директор</p>
                        </div>
                        <div className="col-6 col-lg-4 item">
                            <img src={man1} alt="pic" className="pic"/>
                            <h3>Алексей Синица</h3>
                            <p>Руководитель отдела поддержки сайтов</p>
                        </div>
                        <div className="col-6 col-lg-4 item">
                            <img src={girl1} alt="pic" className="pic"/>
                            <h3>Дарья Бочкарёва</h3>
                            <p>Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов</p>
                        </div>
                        <div className="col-6 col-lg-4 item">
                            <img src={girl2} alt="pic" className="pic"/>
                            <h3>Ирина Торкунова</h3>
                            <p>Менеджер по работе с клиентами</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button>ВСЯ КОМАНДА</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper-main">
            <div className="container">
                <div className="cases">
                    <div className="row text-center">
                        <h2>Последние кейсы</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="item">
                                <div className="pic"></div>
                                <div className="p">
                                    <h4>Настройка кэширования данных. Апрегйд Сервера. Ускорение работы сайта в 30 раз!</h4>
                                    <p className="data">04.05.2020</p>
                                    <p>Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-8 mb-4">
                            <div className="elem">
                                <div className="content">
                                    <h4>Использование отчетов <br/> Ecommerce в Яндекс.Метрике</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="elem">
                                <div className="content">
                                    <h4>Повышение конверсии страницы с формой заявки с применением AB-тестирования</h4>
                                    <p className="data">24.01.2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="elem">
                                <div className="content">
                                    <h4>Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%</h4>
                                    <p className="data">23.09.2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="item">
                                <div className="pic"></div>
                                <div className="p">
                                    <h4>Обмен товарами и заказами интернет-магазинов на Drupal 7 c 1C:Предприятие, МойСклад, Класс365</h4>
                                    <p className="data">22.08.2019</p>
                                    <p className="text">Опубликован <a href="#">релиз модуля...</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper-reviews">
            <div className="container">
                <div className="row text-center">
                    <h2>Отзывы</h2>
                </div>
                <div className="rev-content">
                    <div className="reviews my-5">
                        <div className="row">
                            <div className="col-12 col-lg-8 px-md-5">
                                <div className="reviews-slider">
                                    <div className="slide">
                                        <div className="company-logo">
                                            <img src={logo0} alt="ciel_parfum" loading="lazy" className="img-reviews"/>
                                        </div>
                                        <p className="slide-review">Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!</p>
                                        <p>С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний "Си Эль парфюм" <a href="http://www.cielparfum.com/" tabIndex="0">http://www.cielparfum.com/</a></p>
                                    </div>
                                    <div className="slide">
                                        <div className="company-logo">
                                            <img src={logo} alt="personal_writer" loading="lazy" className="img-reviews"/>
                                        </div>
                                        <p className="slide-review">Сергей — профессиональный, высококвалифицированый программист с огромным опытом в ИТ. Я долгое время общался с топ-фрилансерами (вся первая двадцатка) на веблансере и могу сказать, что С СЕРГЕЕМ ОНИ И РЯДОМ НЕ ВАЛЯЛИСЬ. Работаем с Сергеем до сих пор. С ним приятно работать, я доволен. </p>
                                        <p>Сергей Чепурко, руководитель проекта <a href="http://www.personal-writer.com/" tabIndex="0">www.personal-writer.com</a>/<a href="http://www.writers-united.org/" tabIndex="0">www.writers-united.org</a></p>
                                    </div>
                                    <div className="slide">
                                        <div className="company-logo">
                                            <img src={farbors_ru} alt="farbors" loading="lazy" className="img-reviews"/>
                                        </div>
                                        <p className="slide-review">Выражаю глубочайшую благодарность команде специалистов компании "Инитлаб" и лично Дмитрию Купянскому и Алексею Синице. Сайт был первоклассно перевёрстан из старой табличной модели в новую на базе Drupal с дополнительной функциональностью. Всё было сделано с высочайшим качеством и точно в сроки. Всем кому хочется без нервов и лишних вопросов разработать сайт рекомендую обращаться именно к этой команде профессионалов.</p>
                                        <p>Леонид Александрович Ледовский</p>
                                    </div>
                                    <div className="slide">
                                        <div className="company-logo">
                                            <img src={nashagazetaCH} alt="nashagazeta" loading="lazy" className="img-reviews"/>
                                        </div>
                                        <p className="slide-review">Моя электронная газета www.nashagazeta.ch существует в Швейцарии уже 10 лет. За это время мы сменили 7 специалистов по техподдержке, и только сейчас, в последние несколько месяцев, с начала сотрудничества с Алексеем Синицей и его командой, я впервые почувствовала, что у меня есть надежный технический тыл. Без громких слов и обещаний, ребята просто спокойно и качественно делают работу, быстро реагируют, находят решения, предлагают конкретные варианты улучшения функционирования сайта и сами их оперативно осуществляют. Сотрудничество с ними – одно удовольствие!</p>
                                        <p>Надежда Сикорская, Женева, Швейцария</p>
                                    </div>
                                    <div className="slide">
                                        <div className="company-logo">
                                            <img src={logoEstee} alt="estee" loading="lazy" className="img-reviews"/>
                                        </div>
                                        <p className="slide-review">Наша компания Estee Design занимается дизайном интерьеров. Сайт сверстан на Drupal. Искали программистов под выполнение ряда небольших изменений и корректировок по сайту.
                                            Пообщавшись с Алексеем Синицей, приняли решение о начале работ с компанией Initlab/drupal-coder. Сотрудничеством довольны на 100%. Четкая и понятная система коммуникации, достаточно оперативное решение по задачам. Дали рекомендации по улучшению програмной части сайта, исправили ряд скрытых ошибок.
                                            Никогда не пишу отзывы (нет времени), но в данном случае, по просьбе Алексея, не могу не рекомендовать Initlab другим людям - действительно компания профессионалов.
                                        </p>
                                        <p>Кузин Вадим, руководитель строительного направления Дизайн-бюро интерьеров Estee <a href="http://estee-design.ru" tabIndex="0">estee-design.ru</a></p>
                                    </div>
                                    <div className="slide">
                                        <div className="company-logo">
                                            <img src={cableman_ru} alt="cableman" loading="lazy" className="img-reviews"/>
                                        </div>
                                        <p className="slide-review">Наша компания за несколько лет сменила несколько команд программистов и специалистов техподдержки, и почти отчаялась найти на российском рынке адекватное профессиональное предложение по разумной цене. Пока мы не начали работать с командой "Инитлаб", воплощающей в себе все наши представления о нормальной системе взаимодействия в сочетании с профессиональным неравнодушием. Впервые в моей деловой практике я чувствую надежно прикрытыми важнейшие задачи в жизни электронного СМИ, при том, что мои коллеги работают за сотни километров от нас и мы никогда не встречались лично.</p>
                                        <p>Константин Бельский, зам. генерального директора портала <a href="http://www.cableman.ru/" tabIndex="0">Кабельщик.ру</a></p>
                                    </div>
                                    <div className="slide">
                                        <div className="company-logo">
                                            <img src={logo2} alt="serebro" loading="lazy" className="img-reviews"/>
                                        </div>
                                        <p className="slide-review">За довольно продолжительный срок (2014 - 2016 годы) весьма плотной работы (интернет-магазин на безумно замороченном Drupal 6: устраняли косяки разработчиков, ускоряли сайт, сделали множество новых функций и т.п.) - только самые добрые эмоции от работы с командой Initlab / Drupal-coder: всегда можно рассчитывать на быструю и толковую помощь, поддержку, совет. Даже сейчас, не смотря на то, что мы почти год не работали на постоянной основе (банально закончились задачи), случайно возникшая проблема с сайтом была решена мгновенно! В общем, только самые искренние благодарности и рекомендации! 
                                            Спасибо! )</p>
                                            <p>С уважением, Владислав, <a href="http://serebro.ag" tabIndex="0">Serebro.Ag</a></p>
                                    </div>
                                    <div className="slide">
                                        <div className="company-logo">
                                            <img src={lpcmaRusV4} alt="lab" loading="lazy" className="img-reviews"/>
                                        </div>
                                        <p className="slide-review">Хотел поблагодарить за работу над нашими сайтами.
                                            За 4 месяца работы привели сайт в порядок, а самое главное получили инструмент, с помощью мы теперь можем быстро и красиво выставлять контент для образования и работы с предприятиями
                                            http://lpcma.tsu.ru/ru/post/reference_material
                                            Ну и многому научись благодаря работе с вами. Мы очень рады, что удалось найти настолько компетентных ребят )</p>
                                            <p>Дмитрий Новиков, <a href="http://lpcma.tsu.ru" tabIndex="0">lpcma.tsu.ru</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 d-flex justify-content-center nav-reviews-border p-3 ">
                                <div className="nav-reviews d-lg-flex align-items-lg-center">
                                    <nav className="slick__arrow">
                                        <div className="slick__arrow-wrapper d-lg-flex align-items-lg-center">
                                            <button type="button" aria-label="Previous" className="slick-prev slick-arrow" id="PrevSlide">Previous</button>
                                            <span className="slick-slide-number">
                                                <span className="current-slide">01 </span><span className="amount-of-slides">/ 08</span>
                                            </span>
                                            <button type="button" aria-label="Next" className="slick-next slick-arrow" id="NextSlide">Next</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/* <!--        <div className="wrapper-main">--> */}
{/* <!--            <div className="container-fluid">--> */}
                <div className="collegues">
                    <div className="row">
                        <h2>С нами работают</h2>
                        <div className="collegues-head">Десятки компаний доверяют нам самое ценное, что у них есть в интернете - свои <br/> сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</div>
                    </div>
                    <div className="collegues-slider-main">
                        <div className="slide">
                            <img src={company1} alt="ic1"/>
                        </div>
                        <div className="slide">
                            <img src={company2} alt="ic2"/>
                        </div>
                        <div className="slide">
                            <img src={company3} alt="ic3"/>
                        </div>
                        <div className="slide">
                            <img src={company4} alt="ic4"/>
                        </div>
                        <div className="slide">
                            <img src={company5} alt="ic5"/>
                        </div>
                        <div className="slide">
                            <img src={company6} alt="ic6"/>
                        </div>
                        <div className="slide">
                            <img src={company7} alt="ic6"/>
                        </div>
                        <div className="slide">
                            <img src={company8} alt="ic6" />
                        </div>
                    </div>
                    <div className="collegues-slider-attach">
                        <div className="slide">
                            <img src={company9} alt="ica2"/>
                        </div>
                        <div className="slide">
                            <img src={company10} alt="ica6"/>
                        </div>
                        <div className="slide">
                            <img src={company11} alt="ica4"/>
                        </div>
                        <div className="slide">
                            <img src={company12} alt="ica1"/>
                        </div>
                        <div className="slide">
                            <img src={company13} alt="ica5"/>
                        </div>
                        <div className="slide">
                            <img src={company14} alt="ica3"/>
                        </div>
                        <div className="slide">
                            <img src={company15} alt="ic6"/>
                        </div>
                        <div className="slide">
                            <img src={company16} alt="ic6"/>
                        </div>
                    </div>
                </div>
{/* <!--            </div>--> */}
{/* <!--        </div>--> */}
        <div className="wrapper-main">
            <div className="container">
                <div className="faq">
                    <div className="row text-center">
                        <h2>FAQ</h2>
                    </div>
                    <div className="orange">
                        <h4>Кто непосредственно занимается поддержкой?</h4>
                        <p>Сайты поддерживают штатные сотрудники ООО "Инитлаб", г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2 специалиста по SEO, 4 системных администратора.</p>
                    </div>
                    <ol>
                        <li value="2">
                            <h4>Как организована работа поддержки?</h4>
                        </li>
                        <li>
                            <h4>Что происходит, когда отработаны все предполаченные часы за месяц?</h4>
                        </li>
                        <li>
                            <h4>Что происходит, когда не отработаны все предоплаченные часы за месяц?</h4>
                        </li>
                        <li>
                            <h4>Как происходит оценка и согласование планируемого времени на выполнение заявок?</h4>
                        </li>
                        <li>
                            <h4>Сколько программистов выделяется на проект?</h4>
                        </li>
                        <li>
                            <h4>Как подать заявку на внесение изменений на сайте?</h4>
                        </li>
                        <li>
                            <h4>Как подать заявку на добавление пользователя, изменение настроект веб-сервера и других задач по администрированию?</h4>
                        </li>
                        <li>
                            <h4>В течение какого времени начинается работа по заявке?</h4>
                        </li>
                        <li>
                            <h4>В какое время работает поддержка?</h4>
                        </li>
                        <li>
                            <h4>Подходят ли услуги поддержки, если необходимо произвести обновление ядра Drupal или модулей?</h4>
                        </li>
                        <li>
                            <h4>Можно ли пообщаться со специалистом голосом или в мессенджере?</h4>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="wrapper-form">
            <img src={footerPic1} alt="drupal-coder" className="pic1"/>
            <img src={footerPic2} alt="drupal-coder" className="pic2"/>
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
                                            <h3><img src={feedbackIcon1} alt="icon" className="icon"/> 8 800 222-26-73</h3>
                                        </div>
                                        <div className="email">
                                            <img src={feedbackIcon2} alt="icon" className="icon"/>
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
            <hr/>
            <div className="container">
                <footer>
                    <div className="links">
                        <div className="link">
                            <a href="#" className="f">
                                <img src={facebook} alt="pic" className="pic"/>
                            </a>
                        </div>
                        <div className="link">
                            <a href="#" className="vk">
                                <img src={vk} alt="pic" className="pic"/>
                            </a>
                        </div>
                        <div className="link">
                            <a href="#" className="tel">
                                <img src={telegram} alt="pic" className="pic"/>
                            </a>
                        </div>
                        <div className="link">
                            <a href="#" className="y">
                                <img src={youtube} alt="pic" className="pic"/>
                            </a>
                        </div>
                    </div>
                    <p>Проект ООО "Инитлаб", Краснодар, Россия.<br/> Drupal является зарегистрированной торговой маркой Dries Buytaert.</p>
                </footer>
            </div>
        </div>
        <Modal active = {modalActive} setActive = {setModalActive}/>
        </div>
    );
}


export default App;
