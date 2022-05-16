import { Box, Button, Stack, TextField, Alert } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../store/actions/userAction'
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showAlert, setshowAlert] = React.useState(false)
  const [isLoading, setisLoading] = React.useState(false)
  const formik = useFormik({
    initialValues: {
      email: 'bharatbhople2@gmail.com',
      password: '123'
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required'),
    }),
    onSubmit: async ({ email, password }, { resetForm }) => {
      setisLoading(true)
      dispatch(userLoginAction(email,password))
      const { data } = await axios.get("http://localhost:5000/register")
      console.log(data);
      const result = data.find(item => item.email === email && item.password === password)
      if (result) {
        setshowAlert(true)
        localStorage.setItem("login", JSON.stringify(result))
        navigate("/profile")
      }
      resetForm()
      setisLoading(false)
    }
  })
  return (
    <Box sx={{ maxWidth: "100%", margin: "10% 25%" }}>
      {
        showAlert && <Alert severity="success">You have Login successfully</Alert>
      }
      {
        isLoading && <h1>Connecting Securely</h1>
      }
      {JSON.stringify(formik.values)}
      {JSON.stringify(formik.errors)}
      <Stack spacing={3}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            error={formik?.errors?.email}
            helperText={formik?.errors?.email}
            value={formik.values.email}
            name='email'
            onChange={formik.handleChange}
            fullWidth
            label='Email'
            id='fullWidth' />
          <br />
          <TextField
            error={formik?.errors?.password}
            helperText={formik?.errors?.password}
            value={formik.values.password}
            name='password'
            onChange={formik.handleChange}
            fullWidth
            label='Password'
            id='fullWidth' />
          <Button fullWidth variant='contained' type='submit' color='success'>Login</Button>
        </form>
      </Stack>
    </Box>
  )
}