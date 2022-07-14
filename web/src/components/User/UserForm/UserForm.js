import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
  PasswordField,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { timeTag } from 'src/misc/utils';
import { Redirect, routes } from '@redwoodjs/router';

const convertTZ = ( date, tzString ) => {
  return new Date( ( typeof date === "string" ? new Date( date ) : date ).toLocaleString( "en-US", { timeZone: tzString } ) );
}


const UserForm = ( props ) => {
  const { isAuthenticated, signUp } = useAuth()

  const onNewSubmit = async ( data ) => {
    console.log({...data})
    const response = await signUp( { ...data } )

    if ( response.message ) {
      toast( response.message )
    } else if ( response.error ) {
      toast.error( response.error )
    } else {
      // user is signed in automatically
      toast.success( 'Welcome!' )
      return (
        <Redirect to={routes.users()}/>
      )
    }
  }

  const onSubmit = ( data ) => {
    console.log(JSON.stringify(data))
    props.onSave( data, props?.user?.id )
  }

  return (
    <div className="rw-form-wrapper">
      <Toaster
                toastOptions={{ className: 'rw-toast', duration: 6000 }}
              />
      <Form onSubmit={ props.new ? onNewSubmit : onSubmit } error={ props.error }>
        <FormError
          error={ props.error }
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={ props.user?.firstName }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="lastName"
          defaultValue={ props.user?.lastName }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="ProfileImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile image
        </Label>

        <TextField
          name="ProfileImage"
          defaultValue={ props.user?.ProfileImage }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="ProfileImage" className="rw-field-error" />

        <Label
          name="username"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="username"
          defaultValue={ props.user?.email }
          className="rw-input"
          placeholder="email"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: {
              value: true,
              value: /^[^@]+@[^.]+\..+$/,
              message: 'valid email is required',
            },
          }}
        />

        <FieldError name="username" className="rw-field-error" />

        {props.new && <>
          <Label
            name="password"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Password
          </Label>

          <PasswordField
            name="password"
            defaultValue={ "enter Password"}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
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
        </>}

        <Label
          name="updatedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated At
        </Label>

        <div className="rw-input">{ timeTag( props.user?.updatedAt ) }</div>
        <Label
          name="createdAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created At
        </Label>

        <div className="rw-input">{ timeTag( props.user?.createdAt ) }</div>

        <div className="rw-button-group">
          <Submit disabled={ props.loading } className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
