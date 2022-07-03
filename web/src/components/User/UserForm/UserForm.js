import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import { formatDatetime } from 'src/utils/formatDateTime';

const convertTZ = ( date, tzString ) => {
  return new Date( ( typeof date === "string" ? new Date( date ) : date ).toLocaleString( "en-US", { timeZone: tzString } ) );
}


const UserForm = ( props ) => {
  const onSubmit = ( data ) => {
    props.onSave( data, props?.user?.id )
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={ onSubmit } error={ props.error }>
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
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={ props.user?.email }
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={ { required: true } }
        />

        <FieldError name="email" className="rw-field-error" />


        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>

        <div className="rw-label">{ formatDatetime( props.user?.resetTokenExpiresAt ) }</div>
        <Label
          name="updatedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated At
        </Label>

        <div className="rw-input">{ formatDatetime( props.user?.updatedAt ) }</div>
        <Label
          name="createdAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created At
        </Label>

        <div className="rw-input">{ formatDatetime( props.user?.createdAt ) }</div>

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

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
