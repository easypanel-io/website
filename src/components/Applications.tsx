import React from "react";

type Feature = {
  title: string;

  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const features: Feature[] = [
  {
    title: "Push to deploy",
    icon: require("@site/static/icons/Upload-toCloud.svg").default,
    description: (
      <>
        Push to Github and voilà - Easypanel will get your code, build it, and
        deploy it.
      </>
    ),
  },
  {
    title: "Free SSL Certificates",
    icon: require("@site/static/icons/Cloud-Secure.svg").default,
    description: (
      <>
        With a simple checkbox you get auto-renewable Let's Encrypt
        certificates.
      </>
    ),
  },
  {
    title: "One-Click Apps",
    icon: require("@site/static/icons/Cursor-Click2.svg").default,
    description: (
      <>
        Create a website in seconds. We've even got wordpress!
      </>
    ),
  },
  {
    title: "Zero Downtime Deployments",
    icon: require("@site/static/icons/Error-404Window.svg").default,
    description: (
      <>You can deploy seamlessly without any interruptions for your users.</>
    ),
  },
  {
    title: "In-Browser Terminal",
    icon: require("@site/static/icons/Approved-Window.svg").default,
    description: (
      <>Check logs or run shell commands without leaving your browser.</>
    ),
  },
  {
    title: "Dockerfile not required",
    icon: require("@site/static/icons/Factory2.svg").default,
    description: (
      <>
        Transform your code into Docker images with the magic of Cloud Native
        Buildpacks.
      </>
    ),
  },
];

export default function Applications(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 lg:tw-items-center">
        <div className="tw-p-4">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold">
            Deploy any type of application
          </h2>
          <p className="tw-text-xl tw-text-gray-400">
            Easypanel, unlike many other panels, can run any application. It
            creates Docker images for Node.js, Ruby, Python, PHP, Go, and Java
            apps using Heroku Buildpacks. You can bring your own Dockerfile if
            you require greater control.
          </p>
          <img
            src="/img/applications-logos.png"
            className="tw-block tw-max-h-12 tw-mt-6"
          />
        </div>
        <div className="tw-p-4">
          <img src="/img/applications-screenshot.png" className="tw-block" />
        </div>
      </div>
      <div className="tw-max-w-7xl tw-mx-auto tw-mt-10 tw-grid lg:tw-grid-cols-3 tw-gap-x-20">
        {features.map((feature, index) => (
          <div key={index} className="tw-p-4">
            <feature.icon className="tw-fill-emerald-500 tw-w-12 tw-h-12" />
            <h3 className="tw-mt-4 tw-mb-2 tw-text-xl">{feature.title}</h3>
            <p className="tw-text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
