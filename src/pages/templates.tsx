import Link from "@docusaurus/Link";
import templates from "@site/docs/05-templates/templates.json";
import Layout from "@theme/Layout";
import React from "react";

export default function Templates(): JSX.Element {
  return (
    <Layout
      title="Templates"
      description="Easypanel comes in two editons: developer edition and business edition. The developer edition will always be free."
    >
      <section className="tw-pt-16 tw-pb-32 tw-px-4 lg:tw-px-8">
        <div className="tw-text-center">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mt-4 tw-font-extrabold">
            Easypanel Templates
          </h2>
          <p className="tw-text-xl tw-text-gray-400 tw-mb-4">
            1-Click Installers for Open-Source Applications
          </p>
        </div>
        <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 tw-grid tw-grid-cols-2 lg:tw-grid-cols-6 tw-pt-px tw-pl-px">
          {templates.map((template) => (
            <Link
              key={template.name}
              href={`/docs/templates/${template.name}`}
              className="tw-pt-6 tw-pb-4 tw-border tw-border-solid tw-border-gray-900 tw--ml-px tw--mt-px tw-text-gray-400 hover:tw-text-white hover:tw-border-gray-800 hover:tw-relative"
            >
              {template.logo ? (
                <img
                  src={
                    require(`@site/docs/05-templates/${template.name}/${template.logo}`)
                      .default
                  }
                  alt="Example banner"
                  className="tw-h-20 tw-w-20 tw-block tw-mx-auto tw-mb-4"
                />
              ) : (
                <div className="tw-h-20 tw-w-20 tw-block tw-mx-auto tw-mb-4 tw-rounded-full tw-bg-gray-900 tw-shadow-highlight" />
              )}
              <div className="tw-text-center tw-text-lg tw-font-medium">
                {template.label}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
