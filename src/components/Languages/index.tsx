import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";

type Item = {
  name: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
};

const items: Item[] = [
  {
    name: "Node.js",
    link: "/docs/languages/nodejs",
    icon: require("@site/static/languages/nodejs.svg").default,
  },
  {
    name: "Ruby",
    link: "/docs/languages/ruby",
    icon: require("@site/static/languages/ruby.svg").default,
  },
  {
    name: "PHP",
    link: "/docs/languages/php",
    icon: require("@site/static/languages/php.svg").default,
  },
  {
    name: "Python",
    link: "/docs/languages/python",
    icon: require("@site/static/languages/python.svg").default,
  },
  {
    name: "Java",
    link: "/docs/languages/java",
    icon: require("@site/static/languages/java.svg").default,
  },
  {
    name: "Go",
    link: "/docs/languages/go",
    icon: require("@site/static/languages/go.svg").default,
  },
];

function Language({ name, link, icon: Svg }: Item) {
  return (
    <Link className={styles.language} to={link}>
      <Svg className={styles.languageIcon} role="img" />
      <h3 className={styles.languageName}>{name}</h3>
    </Link>
  );
}

export default function Languages(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.heading}>Supported Languages</h2>
        <div className={styles.languages}>
          {items.map((props, idx) => (
            <Language key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
