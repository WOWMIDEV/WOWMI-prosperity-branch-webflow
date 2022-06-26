import { formattedDate, getContentElement, rateCls, formattedContent } from './utils';

export const htmlTemplateReview = (review) => {
  const { date, links, first_name: firstName, last_name: lastName, city, content, state, service, rating } = review;
  const link = getContentElement(links[service]) ?? '#';
  const name = `${firstName} ${lastName[0] ?? ''}.`;
  const abbr = `${firstName[0] ?? 'R'}${lastName[0] ?? 'W'}`;
  const location = [city, state].join(', ');

  return `<div class="reviews__slide swiper-slide">
              <div class="reviews__header">
                  <div class="reviews__user-info">
                      <div class="reviews__user-img">
                          <div class="reviews__-user-symbols">${abbr}</div>
                      </div>
                      <div>
                          <div class="reviews__name">${name}</div>
                          <div class="reviews__stars reviews__stars--${rateCls(rating)}"></div>
                      </div>
                  </div>
                  <div>
                      <div class="reviews__city">${location}</div>
                      <div class="reviews__date">${formattedDate(date)}</div>
                  </div>
              </div>
              
              <!-- content -->
              <div class="reviews__content">
                <p class="reviews__text">${formattedContent(content)}</p>
              </div>
              
              <div class="reviews__footer">
              
              <!-- total reviews -->
              <a href="#" class="reviews__link"></a>
              
              <!-- link all reviews -->
              <a href="${link}" target="_blank">
              <img src="https://uploads-ssl.webflow.com/6284bc411e7490c177b50355/6284bd2908478941563e0d18_min-logo.png"
                loading="lazy"
                alt="experience" />
              </a>
              </div>
          </div>`;
};
