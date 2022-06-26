import { reviewsSliderInit } from './reviewsSlider';
import { getContentElement } from './utils';
import { renderReviews } from './render';
import { fetchAll } from './api';

/*
{
  serviceName: "zillow",
  serviceArgs: {
    zillow_partner_id: getContentElement(elements["zillow_partner_id"]),
    zillow_nmls_id: getContentElement(elements["zillow_nmls_id"])
  },
  commonArgs: {
  company: getContentElement(elements["company"]),
  ...configRequest.args
  },
  base: configRequest.base,
  dependence: ["zillow_partner_id", "zillow_nmls_id"]}
 */
const buildUrl = (config) => {
  const { serviceName, serviceArgs, commonArgs, base, dependence = null } = config;
  const { company } = commonArgs;
  const url = new URL(base);

  if (!company) {
    // eslint-disable-next-line no-console
    console.warn('No find company name.');
    return false;
  }

  if (dependence) {
    const check = dependence.every((item) => serviceArgs[item]);

    if (!check) {
      // eslint-disable-next-line no-console
      console.warn('Parameters keys must be equals to dependence!');
      return false;
    }
  }

  // set service args
  if (serviceArgs) {
    Object.entries(serviceArgs).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(`service[${serviceName}][${key}]`, value);
      }
    });
  }

  if (!serviceArgs) {
    url.searchParams.set(`service[${serviceName}]`, '');
  }

  // set common args
  Object.entries(commonArgs).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.href;
};

const initReviews = () => {
  const elements = {
    sectionReviews: document.querySelector('[data-reviews="section"]'),
    wrapperReviews: document.querySelector('[data-reviews="wrapper"]'),
    links: {
      experience: document.querySelector('[data-reviews="experience-link"]'),
    },
    experienceLink: document.querySelector('[data-reviews="experience-link"]'),
    company: document.querySelector('[data-reviews="company"]'),
    agent_email: document.querySelector('[data-reviews="agent_email"]'),
    email: document.querySelector('[data-reviews="email"]'),
  };
  const configRequest = {
    base: 'https://review.wowmi.us/api/web/api/v1/reviews',
    args: {
      rate_min: 4,
    },
  };

  const { sectionReviews } = elements;
  if (!sectionReviews) {
    return false;
  }

  // EXPERIENCE CONFIG
  const experienceUrlConf = {
    serviceName: 'experience',
    serviceArgs: {
      email: getContentElement(elements.email),
    },
    commonArgs: {
      company: getContentElement(elements.company),
      ...configRequest.args,
    },
    base: configRequest.base,
  };

  const experienceUrl = buildUrl(experienceUrlConf);

  // URLS
  const urls = [experienceUrl].filter((url) => url);

  // PROCESS GETTING REVIEWS
  fetchAll(urls)
    .then((responseData) => {
      const mergedData = responseData
        .map(({ data, error, url }) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.warn(`Error: ${error} from ${url}`);
            return false;
          }

          return data;
        })
        .flat();

      if (mergedData.includes(false)) {
        sectionReviews.remove();
        return null;
      }

      return mergedData;
    })
    .then((reviews) => {
      renderReviews(elements, reviews);
    })
    .then(() => reviewsSliderInit());

  return true;
};

initReviews();
