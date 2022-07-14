import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    console.log(data)
    const response = await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <a>Have an account?</a>
              </p>

              <Toaster
                toastOptions={{ className: 'rw-toast', duration: 6000 }}
              />

              <Form onSubmit={onSubmit} className="rw-form-wrapper">
                <fieldset className="form-group">
                  <TextField
                    name="firstName"
                    className="rw-input"
                    type="text"
                    ref={usernameRef}
                    placeholder="First Name"
                  />
                  <TextField
                    name="lastName"
                    className="rw-input"
                    type="text"
                    placeholder="Last Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    placeholder="email"
                    validation={{
                      required: {
                        value: true,
                        value: /^[^@]+@[^.]+\..+$/,
                        message: 'valid email is required',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />
                </fieldset>
                <fieldset className="form-group">
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
                        message:
                          'Password is required. Minimum five characters, at least one letter and one number',
                      },
                    }}
                  />

                  <FieldError name="password" className="rw-field-error" />
                </fieldset>
                <Submit className="btn btn-lg btn-primary pull-xs-right">
                  Sign Up
                </Submit>
                <div className="rw-login-link">
                  <span>Already have an account?</span>{' '}
                  <Link to={routes.login()} className="rw-link">
                    Log in!
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage
