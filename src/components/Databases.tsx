import React from "react";

type Feature = {
  title: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const features: Feature[] = [
  {
    title: "In-Browser Client",
    icon: require("@site/static/icons/Approved-Window.svg").default,
    description: (
      <>
        When you need to quickly run some commands in your database, you can use
        the web console.
      </>
    ),
  },
  {
    title: "Private or Public Access",
    icon: require("@site/static/icons/Data-Cloud.svg").default,
    description: (
      <>
        By default, databases can be accessed from inside the server, but you
        can make them public if you want.
      </>
    ),
  },
  {
    title: "Automated Backups (soon)",
    icon: require("@site/static/icons/Data-Backup.svg").default,
    description: (
      <>
        Prevent data loss using periodic backups that are stored on local or
        remote, S3 compliant, disks.
      </>
    ),
  },
];

export default function Databases(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 lg:tw-items-center">
        <div className="tw-p-4">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold">
            Pick your favorite database
          </h2>
          <p className="tw-text-xl tw-text-gray-400">
            Databases are first-class citizens in Easypanel. It currently
            supports MySQL, PostgreSQL, MongoDB, and Redis. You can inspect the
            database logs or connect to the database CLI from the web interface.
          </p>
          <img
            src="/img/databases-logos.png"
            className="tw-block tw-max-h-12 tw-mt-6"
          />
        </div>
        <div className="tw-p-4">
          <img src="/img/databases-screenshot.png" className="tw-block" />
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
