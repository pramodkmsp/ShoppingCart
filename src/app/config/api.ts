import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'https://my-json-server.typicode.com/pramodkmsp/shoppingcart-json-server' : 'https://my-json-server.typicode.com/pramodkmsp/shoppingcart-json-server';
export const productUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
export const wishlistUrl = baseUrl + '/wishlist';
