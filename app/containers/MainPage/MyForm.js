import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
  padding: 20px;
  width: 60%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  height: 400px;
`;

const Heading = styled.h2`
  margin: 5px 5px 40px;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormInput = styled.div`
  width: 60%;
  padding: 0;
  margin: 5px 5px 20px;
`;
const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border: 1px solid lightgrey;
  margin-bottom: 5px;
`;
const Error = styled.span`
  color: red;
`;
const Button = styled.button`
  padding: 5px;
  margin: 10px;
  width: 60%;
  background-color: lightgreen;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: none;
`;
const renderInput = ({ input, meta }) => (
  <FormInput>
    <Input {...input} type="text" />
    {meta.touched && meta.error && (
      <Error className="error">{meta.error}</Error>
    )}
  </FormInput>
);
renderInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};

const onSubmit = values => {
  alert(JSON.stringify(values));
};
const required = data => {
  if (!data || data === '') return 'This field is required';
  return undefined;
};
const MyForm = ({ handleSubmit, valid }) => (
  <Container>
    <Heading>Redux Form</Heading>
    <Form onSubmit={handleSubmit}>
      {/* <label htmlFor="name">Name</label> */}
      <Field
        name="name-input"
        component={renderInput}
        validate={required}
        placeholder="Name"
      />
      <Button type="submit" disabled={!valid}>
        Submit
      </Button>
    </Form>
  </Container>
);
MyForm.propTypes = {
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
};
export default reduxForm({
  form: 'test-form',
  onSubmit,
})(MyForm);
