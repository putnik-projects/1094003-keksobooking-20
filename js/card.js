'use strict';

(function () {
  var checkField = function (field, fieldChange, data) {
    if (data && data.length !== 0) {
      if (fieldChange === 'textContent') {
        field.textContent = data;

      } else if (fieldChange === 'src') {
        field.src = data;

      } else if (fieldChange === 'features') {
        field.innerHTML = '';
        data.forEach(function (element) {
          field.insertAdjacentHTML('beforeend', '<li class=\"popup__feature popup__feature--' + element + '\"></li>');
        });

      } else if (fieldChange === 'photos') {
        var templatePhoto = field.querySelector('.popup__photo');
        field.innerHTML = '';
        data.forEach(function (element) {
          var photo = templatePhoto.cloneNode(true);
          photo.src = element;
          field.appendChild(photo);
        });
      }
    } else {
      field.remove();
    }
  };

  var createNewCard = function (templateElement, offerInfo) {
    var element = templateElement.cloneNode(true);
    var offerType = {
      'flat': 'Квартира',
      'bungalo': 'Бунгало',
      'house': 'Дом',
      'palace': 'Дворец'
    };

    checkField(element.querySelector('.popup__title'), 'textContent', offerInfo.offer.title);
    checkField(element.querySelector('.popup__text--address'), 'textContent', offerInfo.offer.address);
    checkField(element.querySelector('.popup__text--price'), 'textContent', offerInfo.offer.price + '₽/ночь');
    checkField(element.querySelector('.popup__type'), 'textContent', offerType[offerInfo.offer.type]);
    checkField(element.querySelector('.popup__text--capacity'), 'textContent', offerInfo.offer.rooms + ' комнаты для ' + offerInfo.offer.guests + ' гостей');
    checkField(element.querySelector('.popup__text--time'), 'textContent', 'Заезд после ' + offerInfo.offer.checkin + ', выезд до ' + offerInfo.offer.checkout);
    checkField(element.querySelector('.popup__description'), 'textContent', offerInfo.offer.description);

    checkField(element.querySelector('.popup__avatar'), 'src', offerInfo.author.avatar);

    checkField(element.querySelector('.popup__features'), 'features', offerInfo.offer.features);
    checkField(element.querySelector('.popup__photos'), 'photos', offerInfo.offer.photos);

    return element;
  };

  window.card = {
    current: -1,
    shownElement: null,
    createNew: createNewCard
  };
})();
