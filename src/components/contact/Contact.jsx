import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import icon1 from '../../assets/contact_tel.svg';
import icon2 from '../../assets/icon_message.svg';
import css from './Contact.module.css';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const Contact = () => {
  return (
    <div className={css.container}>
          <h2 className={css.title}>Contact Us</h2>
          <ul className={css.list}>
              <li className={css.listItem}>
                  <img src={icon1} alt="phone" className={css.icon} />
                  <a href='+3579056759' className={css.text}>+357 9056759</a>
              </li>
              <li className={css.listItem}>
                  <img src={icon2} alt="message" className={css.icon} />
                  <a href='contact@pamrelocation.com' className={css.text}>contact@pamrelocation.com</a>
              </li>
          </ul>

          <div className={css.card}>
              <h4 className={css.cardTitle}>send inquiry</h4>
              <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              subject: '',
              message: '',
              terms: false
          }}
             
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Name is required'),
              email: Yup.string().email('Invalid email').required('Email is required'),
              phone: Yup.string().required('Phone is required'),
              subject: Yup.string().required('Subject is required'),
              message: Yup.string().required('Message is required'),
              terms: Yup.boolean().oneOf([true], 'You must accept terms and conditions')
            })}
                  
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
                <Form className={css.form}>
                <div className={css.inputContainer}>
                  <Field type="text" name="name" placeholder="Name" className={css.input} />
                  <ErrorMessage name="name" component="div" className={css.error} />
                             
                  <Field type="email" name="email" placeholder="Email" className={css.input} />
                  <ErrorMessage name="email" component="div" className={css.error} />
      
                  <Field type="text" name="phone" placeholder="Phone" className={css.input} />
                  <ErrorMessage name="phone" component="div" className={css.error} />
                            
                   <Field type="text" name="subject" placeholder="Subject" className={css.input} />
                  <ErrorMessage name="subject" component="div" className={css.error} />
                </div>
    
                <Field as="textarea" name="message" placeholder="Message" className={css.textarea} />
                <ErrorMessage name="message" component="div" className={css.error} />
    
                 <div className={css.privacy} id="checkboxWrapper">
                <FormControlLabel
                control={<Checkbox  />}
                label="By clicking “Submit button” you accept our Terms & Conditions and have read our Privacy Policy and Disclaimer"
                className={css.label} 
          />
        </div>
    
                <button type="submit" disabled={isSubmitting} className={css.btn}>
                  {isSubmitting ? 'Submitting' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
         </div>
    </div>
  )
}


