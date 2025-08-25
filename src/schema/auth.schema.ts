import * as yup from "yup"
export const loginSchema = yup.object({
    email:yup.string().required('email is required.').email('invalid email format'),
    password:yup.string().required('password is required.')
})

export const signupSchema = yup.object({
      email:yup.string().required('email is required.').email('invalid email format'),
      password:yup.string().required('password is required.'),
      confirm_password:yup.string().required('password is required'),
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      gender: yup.string(),
      phone: yup.string()
})