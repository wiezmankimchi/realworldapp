import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <Link to={ routes.register() } className="rw-link">Don't have an account?</Link>
              </p>

              <Form onSubmit={ onSubmit } className="rw-form-wrapper">
                <fieldset className="form-group">
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={ usernameRef }
                    validation={ {
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    } }
                  />

                  <FieldError name="username" className="rw-field-error" />
                </fieldset>
                <fieldset className="form-group">
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={ {
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    } }
                  />

                  <div className="rw-forgot-link">
                    <Link
                      to={ routes.forgotPassword() }
                      className="rw-forgot-link"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <FieldError name="password" className="rw-field-error" />
                </fieldset>
                <Submit className="btn btn-lg btn-primary pull-xs-right">Login</Submit>
              </Form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
