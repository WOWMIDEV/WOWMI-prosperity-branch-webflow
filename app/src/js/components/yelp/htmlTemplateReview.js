import { formatPhoneNumber, rateCls } from './utils';

const phoneHtml = (phone) => {
  if (!phone) {
    return '';
  }

  return `<a href="${phone}" class="yelp__number">${formatPhoneNumber(phone)}</a>`;
};

export const htmlTemplateReview = (review) => {
  const { address, rating, phone, review_count: totalReviews, name, image_url: imageUrl, yelpReviews } = review;
  const { text, url } = yelpReviews[0];

  return `
    <div class="tabs__card yelp">
      <img alt="Yelp preview"
          loading="lazy"
          src="${imageUrl}"
          class="yelp__img">
          
      <div class="yelp__content">
        <div class="yelp__title">${name}</div>
        <div class="yelp__rate">
          <div class="yelp__rate-stars yelp__rate-stars--${rateCls(rating)}"></div>
          <div class="yelp__rate-text">${totalReviews} reviews</div>
        </div>
      
        <p class="paragraph yelp__text">${text}</p>
        
        <a href="${url}" class="yelp__link btn btn--min w-inline-block" target="_blank">
          <span class="btn__text btn__text--min">Read more on Yelp</span>
        </a>
      </div>
      
      <div class="yelp__phone">
        <span class="ico">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M0 3.12397C0 1.39865 1.39911 0 3.125 0L7.25718 0C8.7848 0 10.0885 1.10405 10.3397 2.61039L10.9166 6.07072C11.1542 7.49628 10.3192 8.88284 8.94764 9.33986L8.19444 9.59084C7.87976 9.6957 7.70183 10.028 7.78911 10.348L8.57293 13.221C9.00528 14.8058 10.2013 16.0697 11.7601 16.5891L13.6669 17.2245C13.9343 17.3136 14.2282 17.2128 14.3846 16.9783L15.2958 15.612C16.0775 14.4398 17.5472 13.9357 18.8841 14.3812L22.8632 15.7071C24.1393 16.1323 25 17.3261 25 18.6708V21.876C25 23.6013 23.6009 25 21.875 25H19.375C8.67448 25 0 16.3284 0 5.63137V3.12397Z" fill="#333333"/>
          </svg>
        </span>
        ${phoneHtml(phone)}
        <span class="yelp__location">${address}</span>
      </div>
    </div>
    `;
};
