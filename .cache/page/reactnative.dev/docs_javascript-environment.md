ECMAScript 5Reserved Words

```
promise.catch(function() {...});
```

ECMAScript 2015 (ES6)Arrow functions

```
<C onPress={() => this.setState({pressed: true})} />
```

Block scoping

```
let greeting = 'hi';
```

Call spread

```
Math.max(...array);
```

Classes

```
class C extends React.Component {render() { return <View />; }}
```

Computed Properties

```
const key = 'abc'; const obj = {[key]: 10};
```

Constants

```
const answer = 42;
```

Destructuring

```
const {isActive, style} = this.props;
```

for…of

```
for (var num of [1, 2, 3]) {...};
```

Function Name

```
let number = x => x;
```

Literals

```
const b = 0b11; const o = 0o7; const u = 'Hello\u{000A}\u{0009}!';
```

Modules

```
import React, {Component} from 'react';
```

Object Concise Method

```
const obj = {method() { return 10; }};
```

Object Short Notation

```
const name = 'vjeux'; const obj = {name};
```

Parameters

```
function test(x = 'hello', {a, b}, ...args) {}
```

Rest Params

```
function(type, ...args) {};
```

Shorthand Properties

```
const o = {a, b, c};
```

Sticky Regex

```
const a = /o+/y;
```

Template Literals

```
const who = 'world'; const str = `Hello ${who}`;
```

Unicode Regex

```
const string = 'foo💩bar'; const match = string.match(/foo(.)bar/u);
```

ECMAScript 2016 (ES7)Exponentiation Operator

```
let x = 10 ** 2;
```

ECMAScript 2017 (ES8)Async Functions

```
async function doStuffAsync() {const foo = await doOtherStuffAsync();};
```

Function Trailing Comma

```
function f(a, b, c,) {};
```

ECMAScript 2018 (ES9)Object Spread

```
const extended = {...obj, a: 10};
```

ECMAScript 2019 (ES10)Optional Catch Binding

```
try {throw 0; } catch { doSomethingWhichDoesNotCareAboutTheValueThrown();}
```

ECMAScript 2020 (ES11)Dynamic Imports

```
const package = await import('package'); package.function()
```

Nullish Coalescing Operator

```
const foo = object.foo ?? 'default';
```

Optional Chaining

```
const name = obj.user?.name;
```

ECMAScript 2022 (ES13)Class Fields

```
class Bork {static a = 'foo'; static b; x = 'bar'; y;}
```

Stage 1 ProposalExport Default From

```
export v from 'mod';
```

MiscellaneousBabel Template

```
template(`const %%importName%% = require(%%source%%);`);
```

Flow

```
function foo(x: ?number): string {};
```

ESM to CJS

```
export default 42;
```

JSX

```
<View style={{color: 'red'}} />
```

Object Assign

```
Object.assign(a, b);
```

React Display Name

```
const bar = createReactClass({});
```

TypeScript

```
function foo(x: {hello: true, target: 'react native!'}): string {};
```
