import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  CodeIcon,
  GlobeAltIcon,
  TicketIcon,
  CloudIcon,
  LibraryIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import Layout from "@theme/Layout";
import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import LayoutWrapper from "../components/layoutWrapper";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const firstBackground = "./img/tools-g440993be6_1920.jpg";
const secondBackground = "./img/pexels-helena-lopes-1015568.jpg";

interface IFeature {
  name: string;
  href: string;
  icon: any;
  text: string;
}

interface IFAQ {
  question: string;
  answer: string;
}

const faqs: IFAQ[] = [
  {
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus.",
  },
  {
    question: "How do you make holy water?",
    answer: "You boil the hell out of it.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer: "Because they're so good at it.",
  },
];

const features: IFeature[] = [
  {
    name: "Holz",
    href: "processes/landscape",
    icon: CloudIcon,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam nunc quis purus placerat, eget efficitur felis posuere.",
  },
  {
    name: "Elektronik",
    href: "technology-and-architecture/environments",
    icon: GlobeAltIcon,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam nunc quis purus placerat, eget efficitur felis posuere.",
  },
  {
    name: "Auto",
    href: "processes/landscape/services",
    icon: ShieldCheckIcon,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam nunc quis purus placerat, eget efficitur felis posuere.",
  },
  {
    name: "Computer",
    href: "processes/lifecycle/landscapes",
    icon: LibraryIcon,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam nunc quis purus placerat, eget efficitur felis posuere.",
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <LayoutWrapper title={siteConfig.title} description={siteConfig.title}>
      {heroSection()}
      {featureSection()}
      {ctaSection()}
      {faq()}
    </LayoutWrapper>
  );
}

const heroSection = () => {
  return (
    <div
      className="relative pb-32 bg-cover bg-primary-500 bg-blend-multiply"
      style={{ backgroundImage: `url(${firstBackground})` }}
    >
      <div className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-2 md:text-3xl xl mt-12 font-extrabold uppercase tracking-wider text-gray-300">
          Willkommen beim
        </h2>
        <p className="mt-2 text-white text-5xl font-extrabold tracking-tight md:text-6xl">
          Repaircafe Edenkoben
        </p>
        <p className="text-gray-300 text-lg max-w-xl text-justify py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          aliquam nunc quis purus placerat, eget efficitur felis posuere. Nam
          lobortis faucibus ex, non congue dui. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Fusce augue
          nunc, rutrum sit amet bibendum vel, fermentum sed enim. Suspendisse
          potenti. Aliquam euismod vulputate pellentesque. Fusce bibendum enim
          odio.
        </p>
        <div className="mt-8">
          <a
            href="processes/offerings/learning"
            className="text-lg py-3 px-4 font-bold rounded-lg text-white border border-white inline-block w-full text-center md:w-max hover:text-gray-900 hover:bg-white"
          >
            Link 1
          </a>
          <a
            href="processes/lifecycle"
            className="md:ml-4 mt-6 md:mt-0 text-lg py-3 px-4 font-bold rounded-lg bg-white text-gray-900 inline-block md:w-max w-full text-center hover:bg-transparent border border-white hover:text-white no-underline"
          >
            Link 2
          </a>
          <a
            href="processes/offerings"
            className="md:ml-4 mt-6 md:mt-0 text-lg py-3 px-4 font-bold rounded-lg bg-white text-gray-900 inline-block md:w-max w-full text-center hover:bg-transparent border border-white hover:text-white no-underline"
          >
            Mitmachen
          </a>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-32 absolute left-0 -bottom-0 w-full shadow-gray-900"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,0L30,5.3C60,11,120,21,180,37.3C240,53,300,75,360,101.3C420,128,480,160,540,170.7C600,181,660,171,720,165.3C780,160,840,160,900,149.3C960,139,1020,117,1080,117.3C1140,117,1200,139,1260,122.7C1320,107,1380,53,1410,26.7L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

const featureSection = () => {
  return (
    <div className="relative bg-white py-16 sm:pb-24 lg:pb-22">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight lg:text-5xl">
          Was wir tun
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(feature)}
          </div>
        </div>
      </div>
    </div>
  );
};

const feature = (feature: IFeature) => {
  return (
    <div key={feature.name} className="pt-6">
      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 from-primary-500 to-primary-700 bg-gradient-to-tr rounded-lg shadow">
              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <a href={feature.href}>
            <h3 className="mt-8 text-xl text-center font-medium text-gray-900 tracking-tight">
              {feature.name}
            </h3>
          </a>
          <p className="mt-5 text-base text-gray-500">{feature.text}</p>
        </div>
      </div>
    </div>
  );
};

const ctaSection = () => {
  return (
    <div
      className="lg:py-32 py-20 mt-12 bg-primary-700 relative bg-blend-multiply bg-cover bg-center"
      style={{ backgroundImage: `url(${secondBackground})` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-20 h-12 w-full absolute top-0 bg-transparent"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path fill="white" d="M0,0L1440,288L1440,0L0,0Z" />
      </svg>

      <div className="max-w-5xl mx-auto p-8 lg:p-0">
        <h3 className="text-white drop-shadow-xl font-extrabold text-5xl">
          Lust mitzumachen?
        </h3>
        <p className="text-white py-12 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam nunc quis purus placerat, eget efficitur felis posuere.
        </p>
        <a
          href="#"
          className="text-lg py-3 px-4 font-medium rounded-lg text-white border border-white inline-block w-full text-center md:w-max hover:text-gray-900 hover:bg-white"
        >
          Dabei sein
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-20 h-12 w-full absolute bottom-0 bg-transparent transform rotate-180"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path fill="white" d="M0,0L1440,288L1440,0L0,0Z" />
      </svg>
    </div>
  );
};

const faq = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-5xl sm:mb-12">
          Häufig gestellte Fragen
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
};
