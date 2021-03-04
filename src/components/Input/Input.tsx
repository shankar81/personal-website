import React, { ChangeEvent } from "react";
import "./Input.scss";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange?: (e: ChangeEvent) => void;
  multiline?: boolean;
}

export default function Input(props: Props) {
  return (
    <div className="input__container">
      <label className="input__label">{props.label}</label>
      {props.multiline ? (
        <textarea
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          rows={6}
          className="input__input"
        />
      ) : (
        <input
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          type="text"
          className="input__input"
        />
      )}
    </div>
  );
}
