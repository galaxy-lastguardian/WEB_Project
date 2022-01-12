import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"

class LastInfoPerson {
    constructor(na, ph, em) {
        this.na = na;
        this.ph = ph;
        this.em = em;
    }
}

export default function Signup() {

    const [disable, setDisable] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    function sendingForm() {
        console.log("TEEEEST");
        setTimeout(() => {setDisable(true);}, 400);
        setTimeout(() => {setChecked(false);}, 1000);
        setTimeout(() => {setDisable(false);}, 3000);
    }

    let dataE = localStorage.getItem('lastInfoPerson');
    let infoE = JSON.parse(dataE);
    let Ena;
    let Eph;
    let Eem;
    if (localStorage.getItem('lastInfoPerson') != null) {
        Ena = infoE.na;
        Eph = infoE.ph;
        Eem = infoE.em;
    }
    else {
        Ena = "";
        Eph = "";
        Eem = "";
    }

    const formik = useFormik({

        initialValues: {
            Mname: Ena,
            Mnumber: Eph,
            Memail: Eem,
            Mtext: ""
        },
        validationSchema: Yup.object({
            Mname: Yup.string().max(17, "Must be less than 17").required("Required"),
            Memail: Yup.string().email("Invalid email").required("Required"),
            Mnumber: Yup.string().min(8, "Must be at least 8").required("Required"),
            Mtext: Yup.string().min(5, "Need comments").required("Required")
        }),
        onSubmit: (values) => {

            console.log(values);

            fetch('https://formcarry.com/s/46WaOUCdYYl', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify({name: formik.values.Mname, number: formik.values.Mnumber, email: formik.values.Memail, text: formik.values.Mtext})
            })
                .then(response => {
                    console.log(response);
                    alert("Your message has been sent!");
                })
                .catch(error => {
                    console.log(error);
                    alert("ERROR! Your message has not been sent!")
                });

            // -------LOCALSTORAGE------- //

            let fNaE = formik.values.Mname;
            let fPhE = formik.values.Mnumber;
            let fEmE = formik.values.Memail;

            let lipE = new LastInfoPerson(fNaE, fPhE, fEmE);

            localStorage.setItem('lastInfoPerson', JSON.stringify(lipE));

            // -------____________------- //
        }
    })
    console.log(formik.errors);
    // console.log(formik.values);
    return (
        <form className = "MajaxForm" onSubmit={formik.handleSubmit}>
            <div className="Mform_input">
                <input
                    id="Mname"
                    name="Mname"
                    type="text"
                    placeholder="Ваше имя"
                    onChange={formik.handleChange}
                    value={formik.values.Mname}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.Mname && formik.errors.Mname ? <div className="popupFormValidation">{formik.errors.Mname}</div> : null}
            </div>
            <div className="Mform_input">
                <input
                    id="Mnumber"
                    name="Mnumber"
                    type="number"
                    placeholder="Телефон"
                    onChange={formik.handleChange}
                    value={formik.values.Mnumber}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.Mnumber && formik.errors.Mnumber ? <div className="popupFormValidation">{formik.errors.Mnumber}</div> : null}
            </div>
            <div className="Mform_input">
                <input
                    id="Memail"
                    name="Memail"
                    type="email"
                    placeholder="E-mail"
                    onChange={formik.handleChange}
                    value={formik.values.Memail}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.Memail && formik.errors.Memail ? <div className="popupFormValidation">{formik.errors.Memail}</div> : null}
            </div>
            <div className="Mform_textarea">
                <textarea
                    id="Mtext"
                    name="Mtext"
                    type="text"
                    placeholder="Ваш комментарий"
                    onChange={formik.handleChange}
                    value={formik.values.Mtext}
                    onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.Mtext && formik.errors.Mtext ? <div className="popupFormValidation">{formik.errors.Mtext}</div> : null}
            </div>
            <div className="Mcheckbox_form">
                <input
                    id="Mcheckbox"
                    name="Mcheckbox"
                    type="checkbox"
                    required
                />
                <label htmlFor="Mcheckbox" className="Mcheckbox_label">Отправляя заявку, я даю согласие <a href="https://drupal-coder.ru">на обработку своих персональных данных</a>.<span>*</span></label>
            </div>
            <button type="submit" className="Mform_button" disabled={disable} onClick={sendingForm}>СВЯЖИТЕСЬ С НАМИ</button>
        </form>
    )
}