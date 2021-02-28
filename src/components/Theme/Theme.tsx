import React from "react";

interface Props {
  children: JSX.Element;
  theme: string;
}

export default function Theme(props: Props) {
  return <div className={`theme-${props.theme}`}>{props.children}</div>;
}
