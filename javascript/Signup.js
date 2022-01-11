import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"

export default function Signup() {

    const formik = useFormik({
        initialValues: {
            Mname: "",
            Mnumber: "",
            Memail: "",
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

        }
    })
    console.log(formik.errors);
    // console.log(formik.values);
    return (
        <form onSubmit={formik.handleSubmit}>
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
                {formik.touched.Mname && formik.errors.Mname ? <p>{formik.errors.Mname}</p> : null}
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
                {formik.touched.Mnumber && formik.errors.Mnumber ? <p>{formik.errors.Mnumber}</p> : null}
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
                {formik.touched.Memail && formik.errors.Memail ? <p>{formik.errors.Memail}</p> : null}
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
                {formik.touched.Mtext && formik.errors.Mtext ? <p>{formik.errors.Mtext}</p> : null}
            </div>
            <button type="submit" className="Mform_button" >СВЯЖИТЕСЬ С НАМИ</button>
        </form>
    )
}