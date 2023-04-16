import React from "react";
import { Form } from "../Form";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <div>
      <span className="contacts-title">Контакты</span>
      <div className="contacts-info">
        <div className="contacts-connection">
          <div className="contacts-phone">
            Телефон: <span>+7 (499) 445-67-12</span>
          </div>
          <div className="contacts-email">
            Почта: <span>mail@conditioner.ru</span>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
};
