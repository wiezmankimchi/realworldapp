import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  TextField,
  Submit,
  HiddenField,
} from '@redwoodjs/forms'

import UserlistsCell from 'src/components/UserlistsCell'

const UserRoleForm = ( props ) => {
  const onSubmit = ( data ) => {
    props.onSave( data, props?.userRole?.id )
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="userRole-name-0"
            name="name"
            defaultValue="admin"
            defaultChecked={ props.userRole?.name?.includes( 'admin' ) }
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Admin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="userRole-name-1"
            name="name"
            defaultValue="employee"
            defaultChecked={ props.userRole?.name?.includes( 'employee' ) }
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Employee</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="userRole-name-2"
            name="name"
            defaultValue="external"
            defaultChecked={ props.userRole?.name?.includes( 'external' ) }
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>External</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="userRole-name-3"
            name="name"
            defaultValue="public"
            defaultChecked={ props.userRole?.name?.includes( 'public' ) }
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Public</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="userRole-name-4"
            name="name"
            defaultValue="editor"
            defaultChecked={ props.userRole?.name?.includes( 'editor' ) }
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Editor</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="userRole-name-5"
            name="name"
            defaultValue="publisher"
            defaultChecked={ props.userRole?.name?.includes( 'publisher' ) }
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Publisher</div>
        </div>

        <FieldError name="name" className="rw-field-error" />

        { !props.new &&

          <>
            <HiddenField
              disabled
              name="userId"
              defaultValue={ props.userRole?.user.id }
              className="rw-input-disabled"
              errorClassName="rw-input rw-input-error"
            />
          </> }

        { props.new &&
          <>
            <Label
              name="userId"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              User id
            </Label>
            <TextField
              disabled
              name="userId"
              defaultValue={ props.userRole?.user.firstName + " " + props.userRole?.user.lastName }
              className="rw-input-disabled"
              errorClassName="rw-input rw-input-error"
            />
            <div>
              <span><UserlistsCell id={props.id}/></span>
            </div>
          </>
        }
        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={ props.loading } className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserRoleForm
