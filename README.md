# Express Certbot Helper

A simple ExpressJS app that can be used with Let's Encrypt certbot to create and auto-renew certificates.

## Getting Started

To get started, clone the repository and install all dependencies with
```
git clone https://github.com/Topl/expressCertBotHelper.git
cd expressCertBotHelper
npm install
```

### Prerequisites

By default, non-root users are not allowed to bind to ports below 1024 but certbot will present its challenge via a standard HTTP request at port 80. Therefore, you must give NodeJS specific permission to bind to the port by running
```
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
```

Lastly, npm module `node-config` is used to read the challenge and response information from certbot. You must provide a file in `config/default.json` with 
```
{
  "challenge": <CHALLENGE_STRING>,
  "response": <RESPONSE_STRING>
}
```
The challenge string is the URL resource that certbot is going to query and the response is the data that must be provided back.

### Installing

First, be sure to run the above authorization for NodeJS and supply a sample configuration file in `config/`
```
{
  "challenge": "url-string",
  "response": "It Works!!!"
}
```
with the configuration file in place, begin the server using
```
npm run start
```
then visit `http://localhost/.well-known/acme-challenge/url-string` in your browser and you should see the string "It Works!!!" displayed.

## Running the tests

Currently there are no tests implemented


## Built With

* [ExpressJs](https://expressjs.com/en/4x/api.html) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/topl/expressCertBotHelper/tags). 

## Authors

* **James Aman** - *Initial work* - [scasplte2](https://github.com/scasplte2)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This app is based on the tutorial at https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca
