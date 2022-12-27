import { Dimensions, PixelRatio, Platform } from 'react-native';

export const BASE_URL = 'http://rallytrax.plenumnetworks.com/api/'; //  latest backend

export const isEmpty = ['', undefined, 'undefined', null];

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;


export const DEFAULT_FAILED_IMAGE = 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='

export const normalizeFont = size => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

  const scale = SCREEN_WIDTH / 375;

  function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS == 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }

  return normalize(size);
};

// Client Stripe Cred Sunil
export const STRIPE_PUBLISHABLE_KEY =
  'pk_test_51KouHPIfnKcbOrv8NNsclUDNLc3urY3l5KIEfeSnVzlyowScYhE9OvtoVAMavodBcE21LPSB0mTQsGEAVLUx4ojm00fqQRwEy2';
export const STRIPE_SECRET_KEY =
  'sk_test_51KouHPIfnKcbOrv8xV6T5tMiSHLxcToVbQYvXWxE6PNg9Swm9CYS2gc2J3YxV4mWoHMz3LUGmjH6eQfF2wZN7g3W00YnxuY9y2';

// export const STRIPE_PUBLISHABLE_KEY = "pk_live_51KouHPIfnKcbOrv8U88oHYicyzeg1UWAs2EdNvE5botH4T8yQ8H7Qy3H7Gm9AyUKRc7LlT6zeVSbN3yrclh3HEzK00dnmJZFxW"
// export const STRIPE_SECRET_KEY = "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"
