"use client";

import { ReactNode } from "react";

import styles from "./Page.module.scss";
import classNames from "classnames";

interface PageProps {
  children: ReactNode;
}

const pageClassNames = classNames(styles.page, "bg-white shadow mx-auto flex");

export default function Page(props: PageProps) {
  const { children } = props;
  return (
    <div className="container mx-auto">
      <div className={pageClassNames}>{children}</div>
    </div>
  );
}
