import React from "react";
import styled from "@emotion/styled";
import { Color } from "../constants";
import { Container } from "./containers";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-weight: 600;
  font-size: 0.825rem;

  > label {
    margin-top: 1rem;
  }

  > input:not([type="reset"]),
  textarea {
    width: 100%;
    background-color: ${Color.DARK_GRAY};
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.5rem;

    :focus {
      border: 1px solid white;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
      outline: 0 none;
    }
  }

  .form-button {
    background-color: white;
    color: ${Color.DARK_GRAY};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid white;
    font-weight: 700;
    font-size: 0.825rem;
    text-transform: uppercase;
  }

  input.form-button {
    background-color: ${Color.DARK_GRAY};
    color: white;
    border: 1px solid white;
  }
`;

export const ContactForm = () => (
  <Form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" />
    <label htmlFor="name">Имя</label>
    <input type="text" name="name" id="name" />

    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" />

    <label htmlFor="subject">Тема</label>
    <input type="text" name="subject" id="subject" />

    <label htmlFor="message">Сообщение</label>
    <textarea name="message" id="message" rows={5} />

    <Container padding="1rem 0" justifyContent="space-between" width="100%">
      <button className="form-button" type="submit">
        Отправить
      </button>
      <input className="form-button" type="reset" value="Сбросить" />
    </Container>
  </Form>
);
