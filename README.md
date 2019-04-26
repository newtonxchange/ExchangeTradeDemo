# Newton Exchange API Demo V1.0.0

This is a project dedicated to showing off API functionality and also integration of CCXT alongside of it. There are a number of demos to look through that use features from every (we're working on that) part of the API. This is just meant as use as a demonstration for what could be accomplished by using our API.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following installed on your system before being able to run this program.

* [Node.js](https://nodejs.org)
* Port 3000 port forwarded or not blocked locally.

### Installing

The easiest way to install the ExchangeDemoAPI is to clone it from the [GitHub repository](https://github.com/ScottMCarr/newtonxchange.git):
```
git clone https://github.com/newtonxchange/ExchangeTradeDemo.git
```

Then all you need to do is install the node_modules
```
npm install
```
After that just run by using
```
npm run start
```
Open your browser, navigate to
```
http://127.0.0.1:3000
```
Then just fill in the required data to begin the demo.

## Running the demos

All you need to run the first demo (Trade demo) is to select the currency and also the exchange you will need to use
It will automatically do the rest and show you potential profit between the two markets.

For the second you will need to fill out the api and secret keys used by the exchange in order to test the demo.

## Built With

* [NodeJs](https://nodejs.org/en/docs/) - The web framework used
* [CCXT](https://github.com/ccxt/ccxt) - Crypto-Exchange framewrork
* [Avalon 2](https://avalonjs.coding.me/) - Mini, easy to use, high performance front end MVVM framework
* [Newtonxchange-CCXT](https://github.com/rslu2000/ccxt_app/blob/master/ccxt/js/newtonxchange.js) - Mini, easy to use, high performance front end MVVM framework

## Authors

* **Scott Carr** - *Initial work* - [ScottMCarr](https://github.com/ScottMCarr/)

See also the list of [contributors](https://github.com/newtonxchange/ExchangeTradeDemo/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* rslu2000 for use of his newtonxchange.js file for api porting to ccxt

