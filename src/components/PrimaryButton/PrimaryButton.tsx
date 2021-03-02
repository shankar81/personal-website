import React from "react";
import "./PrimaryButton.scss";

interface Props {
  children?: JSX.Element;
  label: string;
  link?: string;
  onClick?: () => void;
}

export default function PrimaryButton(props: Props) {
  return (
    <a href={props.link} onClick={props.onClick} className="button--primary">
      {props.label}
    </a>
  );
}
