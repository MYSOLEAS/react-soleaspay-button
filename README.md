# react-sopay-button

[![npm version](https://badge.fury.io/js/react-sopay-button.svg)](https://badge.fury.io/js/react-sopay-button)

Package allowing developers using the React JS framework to easily integrate a reliable and secure online payment method into their projects using a payment button provided by the package..

## Support us

[<img src="https://app.soleaspay.com/images/sopay.png" width="200px" />](https://soleaspay.com)

We invest a lot of resources in the creation of packages to facilitate the integration of online payments via our [soleaspay platform](https://soleaspay.com) . You can support us by using our package on your React JS application.

## Installation

You can install the package via composer:

```bash
npm i react-sopay-button
```

You can now include the payment button by importing the useSopayButton hook and the SopayButton component by adding the following code to the page where you want to put the button:

```js
import { useSopayButton, SopayButton } from "react-sopay-button";
```

to finish you just have to send the following information :

- **apiKey** : which is the apikey of the [Soleaspay](https://soleaspay.com) business account that will receive the payment. He is obtained either in the dashboard of the professional account or by request via email to the address support@mysoleas.com.;
- **langue** (fr, en) : Set the language you want to use for the payment page. "fr" for French "en" for English;
- **btnTitle** : Give the title you want to display on the button;
- **mode**(tiping, billing) : You can use "tiping" if you want to give the possibility to the user to enter the amount to be paid and "billing" if you want to define the amount to be paid;
- **currency**(XAF, USD, EUR) : the currency in which the payment must be made. It must match the to the default of the service selected by the user/customer;
- **amount** : this is the amount that the user/customer must pay for an operation of the type billing;;
- **order_id** : the unique payment reference in the partner's system;;
- **description** : this is the description or purpose of the initiated payment;
- **businessName** : The name of your business;
- **loadInvoice**(true, false) : whether or not the system should generate an invoice for its customer;
- **successUrl** : The url at which you want to receive a notification once the payment has been made perform;

to do this, you need to use the useSopayButton hook which will take the information from it and return a promise. Here is an example of use:

```js
const data = {
  langue: "fr",
  apiKey: "MkmV_WapE32Fn-wAxnQMMFzCCUsyvu2T6U1Tv-Jhdk4",
  mode: "tiping",
  btnTitle: "Test Pay Now",
  amount: "1000",
  currency: "XAF",
  orderId: "MLS00000025F",
  description: "Test sopay button payment v2",
  businessName: "Shop Name",
  loadInvoice: "true",
  successUrl: "https://yourdomain.com/receivePayment",
};
useSopayButton(data);
```
Place the <SopayButton/> component where you want to display the button

You can see the promise result with the following code

```js
useSopayButton(data)
        .then((res) => console.log(res))
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Mysoleas](https://mysoleas.com)
- [Soleaspay](https://soleaspay.com)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
