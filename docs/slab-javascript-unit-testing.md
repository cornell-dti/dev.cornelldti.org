---
id: slab-javascript-unit-testing
title: 'JavaScript Unit Testing'
---

_Full disclosure: this document is based on the course &quot;_[_Learn JavaScript Unit Testing_](https://www.codecademy.com/learn/learn-javascript-unit-testing)_&quot; at_ [_Codecademy.com_](https://codecademy.com)

---

## Why Test?

When writing your app using JavaScript, it is often easier and more convenient to assume that the lines of code you just wrote are correct. After all, you wrote them. Unfortunately, we are human and we err. Let's catch these faux paus before they affect your teammates' work. Enter, unit tests.

For the uninitiated, unit tests (and automated tests in general) are better than manual testing because it is:

- faster
- more reliable
- maintainable

A typical workflow should consist of something like the following:

1. Write code **and** corresponding tests
2. Enter a command into a terminal to run tests
3. If all the tests pass, Congratulations! Otherwise, go back to step 1 and review your code

Tests as documentation provide what many other forms cannot: both human-readable text to describe the application and machine-executable code to confirm the app works as described.

Quick test, see if you can understand what is going on with the following code:

```
it('accepts the customer name', () => {
  const name = 'Hungry Person';

  browser.url('/');
  browser.setValue('#name', name);
  browser.click('#submit-order');
  browser.url('/');

  assert.include(browser.getText('#deliver-to'), name);
});
```

Answer: `it accepts the customer name`

If you're still reading, great. You know and understand the importance of testing _while developing_.

Your test code should live in close proximity to your development code, and it should be easy to recognize which tests correspond to what development code. i.e. `index.js` and `index-test.js`.

---

## How to Make an Effective Test Suite

Any change to your test suite should increase its value in at least one of these characteristics

- _Fast_
- _Complete_
- _Reliable_
- _Isolated_
- _Maintainable_
- _Expressive (i.e. easy to read)_

---

## How to Test in JavaScript (spoiler: use Mocha)

Required technologies:

- `JavaScript`
- `Node.js`
- `Mocha` test framework

### How to install Mocha:

```
$ npm install mocha -D
```

### How to run Mocha:

1. you can call it directly from **node_modules**

```
$ ./node_modules/mocha/bin/mocha
```

1. add a script to **package.json**. In the `scripts` object, set the value of `"test"` to `mocha`.

```
"scripts": {
  "test": "mocha"
}
```

Now you can call Mocha with the following command:

```
npm test
```

### `describe` and `it` blocks in Mocha

In Mocha, tests are grouped using the `describe` function and define tests using the `it` function. Both functions accept two parameters: a descriptive string and a callback function.

Convention is the following:

- nest `describe` blocks to resemble the structure of your implementation code and write individual tests in `it` blocks

For example, this is how you would test a `Math.max()` function:

```
describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});
```

### `assert` in Mocha

To write the actual tests, we use `assert.ok` method provided by Node.js.

Import `assert` at the top of your file with something like

```
const assert = require('assert');
```

If an argument passed to `assert.ok()` is false, an `AssertionError` is thrown, and that error is logged to the console.

### Proper Setup of Tests in Mocha

I'm going to include a quick caveat before this section: any code that works, will work (obviously). I will define best practice of how you should set up your tests for _consistent_, _reliable_, _readable_ and _maintainable_ code.

The set up of your tests should ideally follow into a pattern of three distinct phases:

1. Setup: where you create objects, variables, and set conditions that you will use to test
1. Exercise: execute the functionality you are testing
1. Verify: use `assert` to check expectations against the result of the exercise (phase 2).

Below is an ideal test using the aforementioned pattern:

```
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});
```

Remember that some of your tests may affect the results of others if you do not properly isolate them. In order to isolate your tests, a fourth stage may be necessary: Teardown. As it sounds, the Teardown phase is implemented to reset any conditions that were changed during the test before the next test runs.

When to use the fourth stage (not comprehensive):

- altering files and directory structure
- changing read/write permissions on a file
- editing records in a database

_You do not need to always use the fourth stage in the mentioned scenarios if no conditions exist that need to be reset._

Here is a sample that is ideal for including this fourth stage:

```
const assert = require('assert');
const fs = require('fs');

describe('appendFileSync', () => {
  it('writes a string to text file at given path name', () => {

    // Setup
    const path = './message.txt';
    const str = 'Hello Node.js';

    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.ok(contents.toString() === str);

    // Teardown: delete path
		fs.unlinkSync(path);
  });
});
```

The `fs.unlinkSync(path)` is used to make sure the `message.txt` is deleted (it is written each time the test runs as a consequence of the `fs.appendFileSync` function).

---

## How to Make an Effective Test Suite

Any change to your test suite should increase its value in at least one of these characteristics

- _Fast_
- _Complete_
- _Reliable_
- _Isolated_
- _Maintainable_
- _Expressive (i.e. easy to read)_

---

## How to Test in JavaScript (spoiler: use Mocha)

Required technologies:

- `JavaScript`
- `Node.js`
- `Mocha` test framework

### How to install Mocha:

```
$ npm install mocha -D
```

### How to run Mocha:

1. you can call it directly from **node_modules**

```
$ ./node_modules/mocha/bin/mocha
```

1. add a script to **package.json**. In the `scripts` object, set the value of `"test"` to `mocha`.

```
"scripts": {
  "test": "mocha"
}
```

Now you can call Mocha with the following command:

```
npm test
```

### `describe` and `it` blocks in Mocha

In Mocha, tests are grouped using the `describe` function and define tests using the `it` function. Both functions accept two parameters: a descriptive string and a callback function.

Convention is the following:

- nest `describe` blocks to resemble the structure of your implementation code and write individual tests in `it` blocks

For example, this is how you would test a `Math.max()` function:

```
describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});
```

### `assert` in Mocha

To write the actual tests, we use `assert.ok` method provided by Node.js.

Import `assert` at the top of your file with something like

```
const assert = require('assert');
```

If an argument passed to `assert.ok()` is false, an `AssertionError` is thrown, and that error is logged to the console.

### Proper Setup of Tests in Mocha

I'm going to include a quick caveat before this section: any code that works, will work (obviously). I will define best practice of how you should set up your tests for _consistent_, _reliable_, _readable_ and _maintainable_ code.

The set up of your tests should ideally follow into a pattern of three distinct phases:

1. Setup: where you create objects, variables, and set conditions that you will use to test
1. Exercise: execute the functionality you are testing
1. Verify: use `assert` to check expectations against the result of the exercise (phase 2).

Below is an ideal test using the aforementioned pattern:

```
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});
```

Remember that some of your tests may affect the results of others if you do not properly isolate them. In order to isolate your tests, a fourth stage may be necessary: Teardown. As it sounds, the Teardown phase is implemented to reset any conditions that were changed during the test before the next test runs.

When to use the fourth stage (not comprehensive):

- altering files and directory structure
- changing read/write permissions on a file
- editing records in a database

_You do not need to always use the fourth stage in the mentioned scenarios if no conditions exist that need to be reset._

Here is a sample that is ideal for including this fourth stage:

```
const assert = require('assert');
const fs = require('fs');

describe('appendFileSync', () => {
  it('writes a string to text file at given path name', () => {

    // Setup
    const path = './message.txt';
    const str = 'Hello Node.js';

    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.ok(contents.toString() === str);

    // Teardown: delete path
		fs.unlinkSync(path);
  });
});
```

The `fs.unlinkSync(path)` is used to make sure the `message.txt` is deleted (it is written each time the test runs as a consequence of the `fs.appendFileSync` function).

Caveat: using the fourth phase makes your code isolated, but **not reliable**. In order to make it reliable, use Mocha's hooks (code that is executed when a certain event happens). In Mocha, a hook is written within a `describe` block.

```
describe('example', () => {

  afterEach(() => {
    // teardown goes here
  });

  it('.sample', () => {
    // test goes here
  });
});
```

Other hooks in Mocha are `before()`, `beforeEach()`, `after()`.

For the completionists, here is the code from the fourth stage, done properly:

```
const assert = require('assert');
const fs = require('fs');

describe('appendFileSync', () => {


  const path = './message.txt';

  afterEach(() => {
    //Teardown here
    fs.unlinkSync(path);
  });

  it('writes a string to text file at given path name', () => {

    // Setup
    const str = 'Hello Node.js';

    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readileSync(path);
    assert.ok(contents.toString() === str);



  });
});
```

....._This is a work in progress... Feel free to edit as you see fit!..._
