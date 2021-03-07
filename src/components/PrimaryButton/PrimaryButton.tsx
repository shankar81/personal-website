import React from "react";
import "./PrimaryButton.scss";

interface Props {
  children?: JSX.Element;
  label: string;
  link?: string;
  onClick?: () => void;
  openInNewTab: boolean;
}

export default function PrimaryButton(props: Props) {
  return (
    <a
      href={props.link}
      target={props.openInNewTab ? "_blank" : ""}
      rel="noreferrer nofollow"
      onClick={props.onClick}
      className="button--primary"
    >
      {props.label}
    </a>
  );
}

PrimaryButton.defaultProps = {
  openInNewTab: false,
};
