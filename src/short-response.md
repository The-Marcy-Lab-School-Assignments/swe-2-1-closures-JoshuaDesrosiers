# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Question 1

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?

### Response 1

the core principals of encapsulation are as follows:

Bundling data.

Restricted access to data.

#### seperation of concern

Seperation of concern refers to isolation of data and functions with regard to their context.

#### bundled data and methods

Encapsulation, with regard to objects refers to bundling methods of the objects context within the object as a way of maintaining organization and protecting or really, restricting, access.

---

## Question 2

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1,2,3,4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Response 2

A closure refers to locking off or *closing* access to a variable outside its domain of context, for example in the `multiplynumsby` function multiplier gets **closed** off through us passing it in our callback.

That way multiplier can only be used in the context its needed.

---

## Question 3

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise: () => {
      console.log(`${this.name} the ${this.species} says ${sound}`)
    }
  }
  return animal;
}

const betty = makeAnimal('betty', 'cat', 'meow');
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal('bugs', 'bunny', 'whatsup doc');
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

### Response 3

If i am an object `this` is me, `this` refers to the context or block in which we are in. Through `this` we can access attributes predefined in the `this` context (like in global) or attributes we define in the `this` context of lets say, an object.

- The function doesnt work for several reasons i will list them:

- unnecessary colon when defining function

- arrow function syntax obstructs this context in the object
