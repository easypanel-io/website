import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Features from "@site/src/components/Features";
import Hero from "@site/src/components/Hero";
import Pricing from "@site/src/components/Pricing";
import Layout from "@theme/Layout";
import React from "react";

function HomepageHeader() {
  return (
    <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="tracking-tight font-bold text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Manage your server</span>{" "}
          <span className="block">without fighting the terminal</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
          Server control panel based on Docker.
        </p>
        <div className="mt-12">
          <Link className="button button--lg button--primary" to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--lg button--secondary margin-left--md"
            to="/docs/intro"
          >
            Book Demo
          </Link>
        </div>
        <div className="mt-12">
          <Link className="button button--primary" to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--secondary margin-left--md"
            to="/docs/intro"
          >
            Book Demo
          </Link>
        </div>
        <div className="mt-12">
          <Link className="button button--sm button--primary" to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--sm button--secondary margin-left--md"
            to="/docs/intro"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <Features />
      <Pricing />
    </Layout>
  );
}
