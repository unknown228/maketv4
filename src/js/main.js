function User(name) {
  if (!(this instanceof User)) {
    throw new Error('call without new!');
  }
  var test = 'test';
  this.name = name;
  this.sayHi = function() {
    alert('My name ' + this.name)
  }
}

User.prototype.fn = function() {
  return 1;
}

var admin = new User('Admin');

console.log(admin);








const App = {
  init() {
    this.handlers();
  },

  handlers() {
    $('body').on('click', function() { App.onClick(this); });
  },

  onClick(el) {
    console.log('Click', el);
  }
};

$(document).ready(() => {
  App.init();
});
