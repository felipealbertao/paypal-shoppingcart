# PayPal Shopping Cart

Sample shopping cart app demonstrating the use of PayPal REST API.

## Prerequisites
* This application requires that [MongoDB](http://www.mongodb.org/downloads) is installed and running on it's default port.
* You will -- of course -- need [Node](http://nodejs.org) (Version >= 0.12.7 preferred)

## Installation

Clone, install and run.

```shell
git clone git@github.com:felipealbertao/paypal-shoppingcart.git
cd paypal-shoppingcart
npm install
npm start
```

## Explore the app

Visit [`http://localhost:8000`](http://localhost:8000)

The application follows a standard structure provided by Express and [KrakenJS](http://krakenjs.com/).
The relevant folders for this exercise are:

- `/controllers`: Contains routes and controller logic
- `/public`: Contains the page templates and styles

## What Is Expected

### Application Changes

1. Include taxes to the cart total. Taxes are 7% of the total purchase.
2. Display the tax amount in the cart page ("View Cart" link). The taxes must be presented in red.
3. Pass the taxes to the PayPal REST API:
   - The PayPal SDK is already integrated.
   - The tax amount must be passed to the PayPal API by using the `tax` property. This is documented
     in the PayPal REST API documentation, under *Payment > Create a payment* topic: 
     https://developer.paypal.com/webapps/developer/docs/api/

### Deliverables

Send the following files to `falbertao@paypal.com`

- A screenshot of the application's home page showing the products
- A screenshot of the cart page showing the calculated taxes
- The changes made for this project as a patch file generated with `git diff`
- The generated paypal.log file, which includes evidence of the API calls.

Thank you for your participation.
