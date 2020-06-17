# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
Dynamic Asset is generated on request every time. Static Asset doesn't change according to the parameters of request, for example, image's href.

## Q: What is the difference between a relative and absolute file path in an href?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?

If the path is built starting from the system root, it is called absolute,and it is start with"/";
If the path is built starting from the current location, it is called relative;

wbeserver root is root of directory that user can access to. A aboslute path is taken from document root of the server.

## Q: What is the difference between server-side and client-side JS?
Server-side runs only on the server, and is used to handle request from client-side,accessing to database,filesystems and servers.

client-side runs on client's browser, and manipulates client machine like browser.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?

var and let is used for variable but var is function scoped and defined throughout the program.
let is scoped to the current BLOCK, using in for loop.
const prevents reassigning the variable, Does not prevent mutation of array or object, used most of time unless we have to realign value.


## Q: What are the 4 ways to create inheritance in JS? (no examples needed, just a sentence describing each)

Constructor Function:

Using new keyword on a function call to assign the prototype property to prototype of the new object.

Object.create():
gives you a new object,with the new object's prototype st to passed object.

ES6 Classes:
more comfortable for those used to other languages but can mislead.

we can use brute force to set the prototype directly.


## Q: Give a short code demonstration of 1 way to create JS inheritance to __inherit__ a method named "purr".
```javascript
const Cat = function(name) {
    this.name = name;
};
Cat.prototype.purr = funtion() {
    console.log(`${this.name} purr`);
};

const wenhao = new Cat('Maru');
wenhao.purr();
```

## Q: Give a short code demonstration of a different way to create JS inheritance to __inherit__ a method named "hiss".
```javascript
const cat = {
    hiss: function() {
        console.log(`${this.name} says 'Hiss'`);
    }
};
const maru = Object.create(cat);
maru.name = 'Maru';
maru.hiss();
```

## Q: Explain what a callback is, and give an example.
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. 

```javascript
const person{
  name:"john",
  age: 22
}
function grow(person,plus){
  person.age = plus(person.age);
}

function plus(num){
  return num+1;
}
```

## Q: What are the words that would correctly fill in the space in this sentence:

"If a function using `this` is used `_______`, then `this` will not have the expected implicit value"

callback 

## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

If we have send information button, we cannot just name it button. Because a html file may have many buttons. we can call it send-info or info-button to make it more clear.


```html
<p class="animal duck"></p>
<p class="animal monkey"></p>
<p class="animal frog"></p>
```

```css
p.duck, p.monkey, p.frog {
    background-color: blue;
}
```
