# vue.js application using vuex & axios

**Simple note application based in vue 2**

For creating all the ecosystem of this app, the rest api was created with:

- FRONTEND - **vue.js**
- BACKEND - **node.js**
- DATABASE - **mongoDB**
- SERVER - **heroku**

## Using vuex & axios

**vuex,** can disposal all data & methods (control) in a global way for using during all de application.
**axios,** create methods for consuming data from rest api.

Mixing vuex&axios we can create a special file for using all the apiMethods. You can find all the methods in tthe route **../store/apiMethods.js**

As the same time you can find the global use of the data and methods of the "Store" by using different components in one single view.

> **Just notice that one component can receive different data.** The Alert component can adapt the aspect and message according to the action given.
