import React from "react";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: JSX.Element;
};

const testimonials: Testimonial[] = [
  {
    name: "Ponkhy",
    role: "Sysadmin / Full-Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/43121732",
    text: (
      <>
        I've worked with many management panels over the years and Easypanel is
        so far the best one I've found. It's easy to set up and still gives you
        the option to configure apps manually if needed. The templates are all
        easy to use and the option to easily set up databases is wonderful!
      </>
    ),
  },
  {
    name: "Brandon Taylor",
    role: "Applications Support Manager",
    avatar:
      "https://pbs.twimg.com/profile_images/1111711277200621573/TY255KfE_400x400.png",
    text: (
      <>
        The aptly named Easypanel is in fact, super easy but more importantly,
        very effective. The use case potential for Easypanel is endless and
        greatly saves time and effort when spinning up new services or
        containers.
      </>
    ),
  },
  {
    name: "Chris Brocklesby",
    role: "Techie 👨‍💻🚀",
    avatar:
      "https://pbs.twimg.com/profile_images/1244539207890034688/SX7ZG3nt_400x400.jpg",
    text: (
      <>
        Easypanel makes quick container deployments a breeze, I am able to
        concentrate on the development and push out new projects quicker - I am
        recommending Easypanel to everyone I meet in the dev world... Love this
        product!
      </>
    ),
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <section className="tw-pt-16 tw-pb-32 tw-px-4 lg:tw-px-8">
      <div className="tw-text-center">
        <div className="tw-text-sm lg:tw-text-base tw-text-emerald-500 tw-uppercase tw-font-bold tw-tracking-wider">
          Testimonials
        </div>
        <h2 className="tw-text-4xl lg:tw-text-5xl tw-mt-4 tw-font-extrabold">
          People love Easypanel
        </h2>
        <p className="tw-text-xl tw-text-gray-400 tw-mb-4">
          Don't just take our word for it
        </p>
      </div>
      <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 tw-grid lg:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="tw-p-6 tw-bg-gray-800 tw-rounded-xl tw-shadow-highlight">
              <div className="tw-flex tw-items-center">
                <img
                  src={testimonial.avatar}
                  className="tw-w-14 tw-h-14 tw-rounded-full tw-shadow"
                />
                <div className="tw-ml-3">
                  <div className="tw-font-semibold">{testimonial.name}</div>
                  <div className="tw-text-sm tw-text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="tw-text-gray-300 tw-mt-6 tw-text-base tw-mb-0">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
