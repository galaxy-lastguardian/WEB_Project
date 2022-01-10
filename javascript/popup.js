"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Modal = function Modal(_ref) {
    var _ref$visible = _ref.visible,
        visible = _ref$visible === undefined ? false : _ref$visible,
        onClose = _ref.onClose;

    // создаем обработчик нажатия клавиши Esc
    var onKeydown = function onKeydown(_ref2) {
        var key = _ref2.key;

        switch (key) {
            case 'Escape':
                onClose();
                break;
        }
    };
    // c помощью useEffect цепляем обработчик к нажатию клавиш
    // https://ru.reactjs.org/docs/hooks-effect.html
    React.useEffect(function () {
        document.addEventListener('keydown', onKeydown);
        return function () {
            return document.removeEventListener('keydown', onKeydown);
        };
    });
    // если компонент невидим, то не отображаем его
    if (!visible) return null;
    // или возвращаем верстку модального окна
    return React.createElement(
        'div',
        { className: 'popup_form_overlay', onClick: onClose() },
        React.createElement(
            'div',
            { className: 'popup_form_wrapper', onClick: function onClick(e) {
                    return e.stopPropagination();
                } },
            React.createElement('img', { src: 'img/footer-pic1.svg', alt: 'drupal-coder', className: 'pic1' }),
            React.createElement('img', { src: 'img/footer-pic2.png', alt: 'drupal-coder', className: 'pic2' }),
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'feedback', id: 'feedback-form' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-6' },
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12 text-center text-md-start' },
                                    React.createElement(
                                        'h2',
                                        null,
                                        '\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0441\u0430\u0439\u0442\u0430'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    React.createElement(
                                        'p',
                                        null,
                                        '\u0421\u0440\u043E\u0447\u043D\u043E \u043D\u0443\u0436\u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0441\u0430\u0439\u0442\u0430? \u0412\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u0443\u0441\u043F\u0435\u0432\u0430\u0435\u0442 \u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A \u043D\u0435 \u0441\u043F\u0440\u0430\u0432\u0438\u043B\u0441\u044F \u0441 \u0440\u0430\u0431\u043E\u0442\u043E\u0439? \u0422\u043E\u0433\u0434\u0430 \u0432\u0430\u043C \u0442\u043E\u0447\u043D\u043E \u043A \u043D\u0430\u043C! \u041F\u0440\u043E\u0441\u0442\u043E \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F!'
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'elem' },
                                        React.createElement(
                                            'div',
                                            { className: 'number' },
                                            React.createElement(
                                                'h3',
                                                null,
                                                React.createElement('img', { src: 'img/feedback-icon1.png', alt: 'icon', className: 'icon' }),
                                                ' 8 800 222-26-73'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'email' },
                                            React.createElement('img', { src: 'img/feedback-icon2.png', alt: 'icon', className: 'icon' }),
                                            React.createElement(
                                                'a',
                                                { href: '' },
                                                'info@drupal-coder.ru'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-6' },
                            React.createElement(
                                'form',
                                { className: 'ajaxForm', action: 'https://formcarry.com/s/46WaOUCdYYl', method: 'POST', acceptCharset: 'UTF-8', id: 'form', name: 'form' },
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        React.createElement('input', { type: 'text', placeholder: '\u0412\u0430\u0448\u0435 \u0438\u043C\u044F', name: 'name', id: 'form-name', className: 'form_input', required: true })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        React.createElement('input', { type: 'text', placeholder: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D', name: 'phone', id: 'form-phone', className: 'form_input _number', required: true })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        React.createElement('input', { type: 'email', placeholder: 'E-mail', name: 'email', id: 'form-email', className: 'form_input _email', required: true })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        React.createElement('textarea', { name: 'comment', placeholder: '\u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', id: 'form-comment', className: 'form_input', required: true })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        React.createElement(
                                            'div',
                                            { className: 'checkbox' },
                                            React.createElement('input', { type: 'checkbox', name: 'checkbox', id: 'form-checkbox', className: 'checkbox_input', required: true }),
                                            React.createElement(
                                                'label',
                                                { htmlFor: 'form-checkbox', className: 'checkbox_label' },
                                                '\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443, \u044F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 ',
                                                React.createElement(
                                                    'a',
                                                    { href: '' },
                                                    '\u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445'
                                                ),
                                                '.',
                                                React.createElement(
                                                    'span',
                                                    null,
                                                    '*'
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        React.createElement(
                                            'button',
                                            { type: 'submit', className: 'form_button' },
                                            '\u0421\u0412\u042F\u0416\u0418\u0422\u0415\u0421\u042C \u0421 \u041D\u0410\u041C\u0418'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};
var App = function App() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isModal = _React$useState2[0],
        setModal = _React$useState2[1];

    var onClose = function onClose() {
        return setModal(false);
    };
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return setModal(true);
                } },
            '\u0421\u0412\u042F\u0417\u042C \u0421 \u041D\u0410\u041C\u0418!'
        ),
        React.createElement(Modal, {
            visible: isModal,
            onClose: onClose
        })
    );
};
ReactDOM.render(React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
), document.getElementById('root'));