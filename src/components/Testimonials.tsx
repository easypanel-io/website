import React from "react";

type Testimonial = {
  name: string;
  role: string;
  link: string;
  avatar: string;
  text: JSX.Element;
};

const testimonials: Testimonial[] = [
  {
    name: "Ponkhy",
    role: "Sysadmin / Full-Stack Developer",
    link: "https://github.com/Ponkhy",
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
    name: "Marian Pop",
    role: "PHP/Laravel Developer",
    link: "https://twitter.com/mvpopuk",
    avatar:
      "https://pbs.twimg.com/profile_images/1522658401666351105/V3wqrktE_400x400.jpg",
    text: (
      <>
        Easypanel comes as a breath of fresh air. I love that is simple to use
        yet powerful and the support is second to none.
      </>
    ),
  },
  {
    name: "Brandon Taylor",
    role: "Applications Support Manager",
    link: "https://twitter.com/iammrbt",
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
    name: "Mehmet (productdevbook)",
    role: "Full-stack developer",
    link: "https://twitter.com/productdevbook",
    avatar: "https://avatars.githubusercontent.com/u/38668796?v=4",
    text: (
      <>
        I used many server management platforms, even paid ones. With Easypanel,
        my applications are connected with Github and I can deploy easily and
        reliably. It feels safe and comfortable to use this panel.
      </>
    ),
  },
  {
    name: "Yasin Ergun",
    role: "Founder & CEO at Bilpp",
    link: "https://www.linkedin.com/in/tuvaergun/",
    avatar: "https://avatars.githubusercontent.com/u/3847510?v=4",
    text: (
      <>
        It is very easy to use and makes life easier. Having a project on
        container or github and deploying it in seconds gives you great
        flexibility. I like to use EasyPanel
      </>
    ),
  },
  {
    name: "Chris Brocklesby",
    role: "Techie 👨‍💻🚀",
    link: "https://twitter.com/ChrisBrocklesby",
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
      <div className="tw-max-w-7xl tw-mx-auto tw-mt-16 lg:tw-columns-3 tw-gap-4 lg:tw-gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="tw-mb-4 lg:tw-mb-8"
            style={{ breakInside: "avoid" }}
          >
            <div className="tw-p-6 tw-bg-gray-800 tw-rounded-xl tw-shadow-highlight">
              <div className="tw-flex tw-items-center">
                <a href={testimonial.link} target="_blank">
                  <img
                    src={testimonial.avatar}
                    className="tw-w-14 tw-h-14 tw-rounded-full tw-shadow"
                  />
                </a>
                <div className="tw-ml-3">
                  <div className="tw-font-semibold">
                    <a
                      className="tw-text-white"
                      href={testimonial.link}
                      target="_blank"
                    >
                      {testimonial.name}
                    </a>
                  </div>
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
