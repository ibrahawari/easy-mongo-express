# quickserver

Allows creation of data-rich resources through barebones POST requests

Express server connected to mongoDB allowing the simple addition of new database models and routes

## setup

Start mongodb on localhost

```
$ cd mongodb/bin
$ ./mongod
```

Run the server:

```
$ npm install
$ npm start
```

## additional

Install tf:
For more please click [here](https://www.tensorflow.org/install/install_mac#installing_with_virtualenv).

```
$ sudo easy_install pip
$ pip install --upgrade virtualenv
$ virtualenv --system-site-packages ~/tensorflow
$ source ~/tensorflow/bin/activate
$ easy_install -U pip
$ pip install --upgrade tensorflow
```