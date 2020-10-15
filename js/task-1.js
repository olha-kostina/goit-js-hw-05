"use strict";

const Account = function(obj) {
  this.login = obj.login;
  this.email = obj.email;
}

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
}

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo();

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo();
