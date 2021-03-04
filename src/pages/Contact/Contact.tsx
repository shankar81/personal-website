import React from "react";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact__container">
      <h1 className="contact__heading">Contact Us</h1>
      <h4 className="contact__para">
        Any questions or remark? Just write me a message
      </h4>
      <form className="contact__form">
        <div className="contact__form--group">
          <div className="contact__control--half">
            <Input label="First Name" value="" placeholder="" />
          </div>
          <div className="contact__control--half">
            <Input label="Last Name" value="" placeholder="" />
          </div>
        </div>
        <div className="contact__form--group">
          <div className="contact__control--half">
            <Input label="Email" value="" placeholder="" />
          </div>
          <div className="contact__control--half">
            <Input label="Mobile Number" value="" placeholder="" />
          </div>
        </div>
        <div className="contact__control--full">
          <Input label="Message" value="" placeholder="" multiline />
        </div>
        <PrimaryButton link="" label="Send" />
      </form>
    </div>
  );
}
