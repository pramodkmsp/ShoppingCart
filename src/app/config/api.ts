import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'https://my-json-server.typicode.com/pramodkmsp/shoppingcart-json-server' : 'http://localhost:3000';
export const productUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
export const wishlistUrl = baseUrl + '/wishlist';
