//RteForm.js 
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

const validate = values => {
  const errors = {}
  if (values.comment && values.comment.length < 20) {
    errors.comment = 'Minimum be 20 characters or more';
  } else if (!values.comment) {
    errors.comment = 'Required';
  } else {
    errors.comment = false;
  }
  return errors
}

const renderRTEField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <RichTextEditorComponent htmlAttributes={{ name: "comment" }} value={input.value}
        change={param => input.onChange(param.value)} focus={param => input.onFocus()} blur={param => input.onBlur()} id="defaultRTE">
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let RteForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field name="comment" component={renderRTEField} label="Comment" />
      </div>
      <div className="form-group">
        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}
RteForm = reduxForm({
  form: 'contact',
  validate,
})(RteForm);

export default RteForm;