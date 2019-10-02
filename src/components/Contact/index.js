import React, { useEffect } from "react";
import { Form, Button, Container, Header, Icon } from "semantic-ui-react";
import useForm from "react-hook-form";
import { db } from '../../firebase';
import './index.scss'

const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" }
  ];


const ContactPage = () => {
    useEffect(() => {
      register({ name: "firstName" }, { required: true });
      register({ name: "lastName" }, { required: true });
      register({ name: "email" }, { required: true });
      register({ name: "message" }, { required: true });
      register({ name: "checkBox" }, { required: true });
    }, []);
  
    const {
      register,
      errors,
      handleSubmit,
      setValue,
      triggerValidation
    } = useForm();
    const onSubmit = (data, e) => {
      console.log("Submit event", e);
      console.log(JSON.stringify(data.firstName))
    
      db.doCreateMessageFS(data)
    alert(JSON.stringify(data));
    };
  
    console.log(errors);
  
    return (
        <Container style={{ margin: 20 }}>
         <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Contact Rajiv</Header.Content>
    </Header>
      <Form className="ContactForm" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group widths="equal">
          <Form.Input
            name="firstName"
            fluid
            label="First name"
            placeholder="First name"
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await triggerValidation({ name });
            }}
            error={errors.firstName ? true : false}
          />
          <Form.Input
            name="lastName"
            fluid
            label="Last name"
            placeholder="Last name"
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await triggerValidation({ name });
            }}
            error={errors.lastName ? true : false}
          />
        </Form.Group>
        <Form.Input
            name="email"
            fluid
            label="Email"
            placeholder="email"
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await triggerValidation({ name });
            }}
            error={errors.email ? true : false}
          />
       
        <Form.TextArea name="message" label='Message' placeholder='Input your message here...'
         onChange={async (e, { name, value }) => {
          setValue(name, value);
          await triggerValidation({ name });
        }}
        />
        <Form.Checkbox
          name="checkBox"
          label="I agree to the terms and conditions"
          onChange={async (e, { name, checked }) => {
            setValue(name, checked);
            await triggerValidation({ name });
          }}
          error={errors.checkBox ? true : false}
        />
        {/* <Form.Checkbox
          name="emailCheckBox"
          label="Subscribe to newsletter"
          onChange={async (e, { name, checked }) => {
            setValue(name, checked);
            await triggerValidation({ name });
          }}
          error={errors.emailCheckBox ? true : false}
        /> */}
        <Button type="submit">Submit</Button>
      </Form>
      </Container>
    );
  };

  export default ContactPage;