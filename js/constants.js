'use strict';

(function () {
  window.constants = {
    KeyboardKeys: {
      ENTER: 'Enter',
      ESCAPE: 'Escape'
    },

    SimilarPin: {
      WIDTH: 50,
      HEIGHT: 70
    },

    PreviewImageBlock: {
      Avatar: {
        DEFAULT_IMAGE: 'img/muffin-grey.svg'
      },

      House: {
        WIDTH: 70,
        HEIGHT: 70
      }
    },

    MainPin: {
      WIDTH: 62,

      Height: {
        ROUND: 62,
        SHARP: 81
      },

      DefaultCoords: {
        X: 570,
        Y: 375
      },

      MinCoords: {
        X: 0,
        Y: 130
      },

      MaxCoords: {
        X: 1200,
        Y: 630
      }
    },

    PinFilter: {
      AMOUNT: 5,

      Price: {
        LOW: 10000,
        HIGH: 50000
      }
    },

    Requests: {
      TIMEOUT: 10000,

      Url: {
        LOAD: 'https://javascript.pages.academy/keksobooking/data',
        SAVE: 'https://javascript.pages.academy/keksobooking'
      }
    },

    Debounce: {
      INTERVAL: 500
    }
  };
})();
