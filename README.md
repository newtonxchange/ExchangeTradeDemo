# Newton Exchange API Demo V1.0.0

This is a project dedicated to showing off API functionality and also integration of CCXT alongside of it. There are a number of demos to look through that use features from every (we're working on that) part of the API. This is just meant as use as a demonstration for what could be accomplished by using our API.

# NewtonXchange API演示V1.0.0
这是一个致力于展示API功能以及CCXT与其集成的项目。有许多演示要查看API的每个（我们正在处理）部分的使用功能。这只是用作演示使用我们的API可以实现的功能。

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## 入门
这些说明将为您提供在本地计算机上启动和运行的项目副本，以进行开发和测试。

### Prerequisites

You will need the following installed on your system before being able to run this program.

* [Node.js](https://nodejs.org)
* Port 3000 port forwarded or not blocked locally.

### 先决条件
在运行此程序之前，您需要在系统上安装以下软件。
Node.js
本地转发或未阻止端口3000端口。


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

### 安装
安装ExchangeDemoAPI的最简单方法是从GitHub存储库克隆它：

git clone https://github.com/newtonxchange/ExchangeTradeDemo.git
然后，您需要做的就是安装node_modules

npm安装
之后就运行了

npm跑步开始
打开浏览器，导航到

http://127.0.0.1:3000
然后只需填写所需数据即可开始演示。

## Running the demos

All you need to run the first demo (Trade demo) is to select the currency and also the exchange you will need to use
It will automatically do the rest and show you potential profit between the two markets.

For the second you will need to fill out the api and secret keys used by the exchange in order to test the demo.

## 运行演示
运行第一个演示（交易演示）所需的只是选择货币以及您需要使用的交易所 它将自动完成其余的工作并向您展示两个市场之间的潜在利润。

对于第二个，您需要填写api和密钥以测试账号币种余额的演示。

## Built With

* [NodeJs](https://nodejs.org/en/docs/) - The web framework used
* [CCXT](https://github.com/ccxt/ccxt) - Crypto-Exchange framewrork
* [Avalon 2](https://avalonjs.coding.me/) - Mini, easy to use, high performance front end MVVM framework
* [Newtonxchange-CCXT](https://github.com/rslu2000/ccxt_app/blob/master/ccxt/js/newtonxchange.js) - Mini, easy to use, high performance front end MVVM framework

## 内置
NodeJs - 使用的Web框架
CCXT - Crypto-Exchange framewrork
Avalon 2 - 迷你，易用，高性能的前端MVVM框架
Newtonxchange-CCXT - 迷你，易用，高性能的前端MVVM框架

## Authors

* **Scott Carr** - *Initial work* - [ScottMCarr](https://github.com/ScottMCarr/)

See also the list of [contributors](https://github.com/newtonxchange/ExchangeTradeDemo/contributors) who participated in this project.

## 作者
** Scott Carr ** - 初步工作 - ScottMCarr
另请参阅参与此项目的贡献者列表。

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 执照
该项目根据MIT许可证授权 - 有关详细信息，请参阅LICENSE文件

## Acknowledgments

* rslu2000 for use of his newtonxchange.js file for api porting to ccxt

## 致谢

rslu2000使用他的newtonxchange.js文件来api移植到ccxt

