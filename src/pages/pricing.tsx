import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React, { ReactNode, useEffect, useState } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout
      title="Pricing"
      description="Easypanel comes in two editons: developer edition and business edition. The developer edition will always be free."
    >
      <Pricing />
      <FAQs />
    </Layout>
  );
}

const bullet = (
  <svg
    className="tw-w-5 tw-h-5 tw-text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const Feature = ({
  children,
  soon,
  underline,
}: {
  children: ReactNode;
  soon?: boolean;
  underline?: boolean;
}) => (
  <li className="tw-flex tw-items-center">
    {bullet}
    <span
      className={[
        "tw-ml-2 tw-text-base tw-font-normal tw-text-white",
        underline &&
          "tw-border-0 tw-border-b-2 tw-border-solid tw-border-emerald-700",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}{" "}
      {soon && <span className="tw-text-sm tw-text-gray-400">(soon)</span>}
    </span>
  </li>
);

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="tw-py-12 tw-bg-black sm:tw-py-16 lg:tw-py-20 xl:tw-py-24">
      <div className="tw-px-4 tw-mx-auto tw-max-w-7xl">
        <div className="tw-max-w-3xl tw-mx-auto tw-text-center">
          <h2 className="tw-text-4xl tw-font-semibold tw-text-white sm:tw-text-4xl lg:tw-text-5xl xl:tw-text-6xl">
            Easy panel, <br className="sm:tw-hidden" />
            easy pricing
          </h2>
          <p className="tw-mt-4 tw-text-xl tw-font-normal tw-text-gray-400">
            Your time is expensive &ndash; save many hours by using Easypanel
          </p>
          <ParityDeals />
        </div>

        <div className="tw-flex tw-items-center tw-justify-center tw-mt-8 tw-space-x-6 sm:tw-mt-12">
          <button
            type="button"
            onClick={() => setAnnual(!annual)}
            className="tw-m-0 tw-p-0 tw-bg-transparent tw-border-none tw-flex tw-items-center tw-cursor-pointer"
          >
            <div
              className={[
                annual ? "tw-bg-emerald-600" : "tw-bg-gray-600",
                "tw-relative tw-inline-flex tw-h-6 tw-w-11 tw-flex-shrink-0 tw-rounded-full tw-border-2 tw-border-solid tw-border-transparent tw-transition-colors tw-duration-200 tw-ease-in-out focus:tw-outline-none",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className={[
                  annual
                    ? "tw-translate-x-5 tw-bg-white"
                    : "tw-translate-x-0 tw-bg-gray-300",
                  "tw-pointer-events-none tw-inline-block tw-h-5 tw-w-5 tw-transform tw-rounded-full tw-shadow tw-ring-0 tw-transition tw-duration-200 tw-ease-in-out",
                ]
                  .filter(Boolean)
                  .join(" ")}
              ></span>
            </div>
            <span className="tw-ml-3 tw-text-base">
              <span className="tw-text-base tw-font-medium tw-text-gray-300">
                Annual billing
              </span>
              <span className="tw-ml-2 tw-text-base tw-font-medium tw-text-emerald-500">
                (Save up to 33%)
              </span>
            </span>
          </button>
        </div>

        <div className="tw-grid tw-max-w-md tw-grid-cols-1 tw-gap-6 tw-mx-auto tw-mt-12 lg:tw-grid-cols-4 lg:tw-gap-4 sm:tw-mt-16 lg:tw-max-w-7xl">
          <div className="tw-flex tw-flex-col tw-p-6  tw-rounded-md">
            <div className="tw-flex-1">
              <h3 className="tw-text-lg tw-font-normal tw-text-white">Free</h3>

              <div className="tw-flex tw-items-end tw-mt-3">
                <p className="tw-text-5xl tw-font-normal tw-text-white">$0</p>
                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-500">
                  / month
                </p>
              </div>
              <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-400">
                Get started with our generous free plan &mdash; free forever
              </p>

              <hr className="tw-mt-8 tw-border-gray-900" />

              <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                <Feature>Up to 3 projects</Feature>
                <Feature>Unlimited services</Feature>
                <Feature>Unlimited deployments</Feature>
                <Feature>Basic Monitoring</Feature>
              </ul>
            </div>
          </div>

          <div className="tw-flex tw-flex-col tw-p-6 tw-bg-gray-900 tw-rounded-md">
            <div className="tw-flex-1">
              <h3 className="tw-text-lg tw-font-normal tw-text-white">Hobby</h3>

              <div className="tw-flex tw-items-end tw-mt-3">
                <p className="tw-text-5xl tw-font-normal tw-text-white">
                  ${annual ? 9.9 : 13.9}
                </p>
                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-500">
                  / month
                </p>
              </div>
              <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-400">
                Move to the next level with your one-person operation
              </p>

              <hr className="tw-mt-8 tw-border-gray-800" />

              <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                {/* <Feature underline>
                  <b>2</b> licenses
                </Feature> */}
                <Feature>Unlimited projects</Feature>
                <Feature>Unlimited services</Feature>
                <Feature>Unlimited deployments</Feature>
                <Feature>Basic Monitoring</Feature>
                <Feature underline>Advanced Monitoring</Feature>
                <Feature underline>Notifications</Feature>
                <Feature underline>Database Backups</Feature>
              </ul>
            </div>

            <Link
              href={
                annual
                  ? "https://easypanel.lemonsqueezy.com/checkout/buy/6c721071-ee30-4aa7-bfba-3cd4cceecd36"
                  : "https://easypanel.lemonsqueezy.com/checkout/buy/b60df6f0-8857-4140-9960-6affa366eb1e"
              }
            >
              <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                <div className="tw-absolute tw-transition-all tw-duration-200 tw-rounded-md tw--inset-px tw-bg-gradient-to-r tw-from-cyan-500 tw-to-emerald-500 group-hover:tw-shadow-lg group-hover:tw-shadow-cyan-500/50"></div>
                <div
                  className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-gray-900 tw-border tw-border-transparent tw-rounded-md"
                  role="button"
                >
                  Buy Your License
                </div>
              </div>
            </Link>
          </div>

          <div className="tw-relative tw-z-10 tw-flex tw-flex-col tw-p-6 tw-bg-gray-900 tw-rounded-md">
            <div className="tw-absolute tw-rounded-md tw-inset-0 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-emerald-500"></div>
            <div className="tw-absolute tw-inset-[3px] tw-bg-gray-900 tw-rounded-[4px]"></div>

            <div className="tw-relative tw-flex-1">
              <h3 className="tw-text-lg tw-font-normal tw-text-white">
                Growth
              </h3>

              <div className="tw-flex tw-items-end tw-mt-3">
                <p className="tw-text-5xl tw-font-normal tw-text-white">
                  ${annual ? 13.9 : 19.9}
                </p>
                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-500">
                  / month
                </p>
              </div>
              <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-400">
                Bring your whole team on board and work together
              </p>

              <hr className="tw-mt-8 tw-border-gray-800" />

              <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                {/* <Feature underline>
                  <b>5</b> licenses
                </Feature> */}
                <Feature>Unlimited projects</Feature>
                <Feature>Unlimited services</Feature>
                <Feature>Unlimited deployments</Feature>
                <Feature>Basic Monitoring</Feature>
                <Feature>Advanced Monitoring</Feature>
                <Feature>Notifications</Feature>
                <Feature>Database backups</Feature>
                <Feature underline>Multiple users</Feature>
                <Feature underline>Access control</Feature>
              </ul>
            </div>

            <Link
              href={
                annual
                  ? "https://easypanel.lemonsqueezy.com/checkout/buy/e8db0469-4d3d-4b94-8a15-307cfd7a2740"
                  : "https://easypanel.lemonsqueezy.com/checkout/buy/b2d97853-f338-49ae-9ed9-e2a29a33ab26"
              }
            >
              <div className="tw-relative tw-mt-8">
                <div className="tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-text-white tw-transition-all tw-duration-200 tw-rounded-md tw-bg-gradient-to-r tw-from-cyan-500 tw-to-emerald-500 hover:tw-contrast-150 tw-border-none">
                  Buy Your License
                </div>
              </div>
            </Link>
          </div>

          <div className="tw-flex tw-flex-col tw-p-6 tw-bg-gray-900 tw-rounded-md">
            <div className="tw-flex-1">
              <h3 className="tw-text-lg tw-font-normal tw-text-white">
                Business
              </h3>

              <div className="tw-flex tw-items-end tw-mt-3">
                <p className="tw-text-5xl tw-font-normal tw-text-white">
                  ${annual ? 23.9 : 31.9}
                </p>
                <p className="tw-ml-1 tw-text-base tw-font-normal tw-text-gray-500">
                  / month
                </p>
              </div>
              {/* <p className="tw-text-base tw-font-normal tw-text-gray-200">
                $65 billed anually
              </p> */}
              <p className="tw-mt-4 tw-text-base tw-font-normal tw-text-gray-400">
                Get dedicated support for your amazing company
              </p>

              <hr className="tw-mt-8 tw-border-gray-800" />

              <ul className="tw-p-0 tw-mt-8 tw-space-y-4">
                {/* <Feature underline>
                  <b>10</b> licenses
                </Feature> */}
                <Feature>Unlimited projects</Feature>
                <Feature>Unlimited services</Feature>
                <Feature>Unlimited deployments</Feature>
                <Feature>Basic Monitoring</Feature>
                <Feature>Advanced Monitoring</Feature>
                <Feature>Notifications</Feature>
                <Feature>Database backups</Feature>
                <Feature>Multiple users</Feature>
                <Feature>Access control</Feature>
                <Feature underline>White-labeling</Feature>
                <Feature underline>Priority support</Feature>
              </ul>
            </div>

            <Link
              href={
                annual
                  ? "https://easypanel.lemonsqueezy.com/checkout/buy/f80c4abc-fdb7-4710-abff-e42fb4a6969a"
                  : "https://easypanel.lemonsqueezy.com/checkout/buy/90c58596-7077-4426-9944-771b11967204"
              }
            >
              <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-mt-8 tw-group">
                <div className="tw-absolute tw-transition-all tw-duration-200 tw-rounded-md tw--inset-px tw-bg-gradient-to-r tw-from-cyan-500 tw-to-emerald-500 group-hover:tw-shadow-lg group-hover:tw-shadow-cyan-500/50"></div>
                <div
                  className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-text-white tw-bg-gray-900 group-hover:tw-bg-gray-800 tw-border tw-border-transparent tw-rounded-md"
                  role="button"
                >
                  Buy Your License
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: "What is a license?",
    answer:
      "One license is a right to use Easypanel on one server (node, vm, or instance).",
  },
  {
    question: "Do you have a refund policy?",
    answer:
      "Yes, we have a 30-day money-back guarantee. Send us an email at support@easypanel.io.",
  },
  {
    question: "Do you offer a trial?",
    answer:
      "Unfortunately not. Our free plan is very generous and you can get a very good feel of the product just by using that. If you want, just buy a premium plan without worrying since we have a 30-day money-back refund policy.",
  },
  {
    question: "What payment options do you have?",
    answer:
      "Our payments are processed by LemonSqueezy. They support cards (including Mastercard, Visa, Maestro, American Express, Discover, Diners Club, JCB, UnionPay, and Mada), PayPal, and others.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "Don't worry, Easypanel will continue to work on the free plan.",
  },
  // {
  //   question: "I need more than 10 licenses. What do I do?",
  //   answer:
  //     "Send us an email at support@easypanel.io and we'll tailor a plan for you.",
  // },
  {
    question: "What kind of support do I get for the business plan?",
    answer:
      "With our standard plans, support is facilitated through our Discord community. However, with our business plan, you can expect assistance directly from our team. We're commited to address your requests promptly and effectively. While our primary response time aligns with European working hours, we've gone the extra mile to assist our customers even on Saturday nights. Send us an email at support@easypanel.io.",
  },
];

export function FAQs() {
  return (
    <div className="tw-mx-auto tw-max-w-7xl tw-py-16 tw-px-6 sm:tw-py-24 lg:tw-px-8">
      <h2 className="tw-text-2xl tw-font-bold tw-leading-10 tw-tracking-tight tw-text-white">
        Frequently asked questions
      </h2>
      <p className="tw-mt-6 tw-max-w-2xl tw-text-base tw-leading-7 tw-text-gray-400">
        Have a different question and can’t find the answer you’re looking for?
        Reach out to our support team by{" "}
        <Link
          href="mailto:support@easypanel.io"
          className="tw-font-semibold tw-text-emerald-600 hover:tw-text-emerald-500"
        >
          sending us an email
        </Link>{" "}
        and we’ll get back to you as soon as we can.
      </p>
      <div className="tw-mt-20">
        <dl className="tw-space-y-16 sm:tw-grid sm:tw-grid-cols-2 sm:tw-gap-x-6 sm:tw-gap-y-16 sm:tw-space-y-0 lg:tw-gap-x-10">
          {faqItems.map((faq, index) => (
            <div key={index}>
              <dt className="tw-text-base tw-font-semibold tw-leading-7 tw-text-white">
                {faq.question}
              </dt>
              <dd className="tw-mt-2 tw-ml-0 tw-text-base tw-leading-7 tw-text-gray-400">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function ParityDeals() {
  const [bannerData, setBannerData] = useState<any>({});

  useEffect(() => {
    var request = new XMLHttpRequest();
    request.open(
      "GET",
      `https://api.paritydeals.com/api/v1/deals/discount/?url=${window.location.href}`,
      true
    );

    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        if (!data.bar) {
          return;
        }
        setBannerData(data);
      }
    };

    request.send();
  }, []);

  if (!bannerData.bar) {
    return null;
  }

  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: bannerData.bar.backgroundColor,
        color: bannerData.bar.fontColor,
        borderRadius: bannerData.bar.borderRadius,
        fontSize: bannerData.bar.fontSize,
        padding: "12px 20px",
      }}
      dangerouslySetInnerHTML={{ __html: bannerData.messageText }}
    ></div>
  );
}
