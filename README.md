<!-- ⚠️ Do NOT edit this README! It is automatically generated by _build/update-readme.js. Edit README.src.md instead! -->
# prettier-plugin-space-before-function-paren

A prettier plugin to add a space before function parentheses for function definitions (but not function calls) in JS and TS.
**Requires Prettier 3.0.0 or later.**

## Installation

```
npm install -D prettier prettier-plugin-space-before-function-paren
```

## Configuration

There are no config options for this plugin.
All you need to do is actually include it in your Prettier config:

```json
{
	"plugins": ["prettier-plugin-space-before-function-paren"]
}
```

> [!IMPORTANT]
> Due to Prettier limitations, to use this plugin with other plugins formatting JS/TS code, install the [prettier-plugin-merge](https://github.com/ony3000/prettier-plugin-merge) plugin and *add it to the end* of your `plugins` array. This plugin will be used last and preserve changes made by the previous plugins.

## What this plugin changes in JavaScript

### Function declarations

```js
function test(a, b) {
	return a + b;
}
```

becomes:

```js
function test (a, b) {
	return a + b;
}
```

### Async function declarations

```js
async function test(a, b) {
	return a + b;
}
```

becomes:

```js
async function test (a, b) {
	return a + b;
}
```

### Object methods

```js
const foo = {
	method(a, b) {
		return a + b;
	}
};
```

becomes:

```js
const foo = {
	method (a, b) {
		return a + b;
	}
};
```

### Async object methods

```js
const foo = {
	async method(a, b) {
		return a + b;
	}
};
```

becomes:

```js
const foo = {
	async method (a, b) {
		return a + b;
	}
};
```

### Computed object methods

```js
const foo = {
	[methodName]() {
		return 42;
	}
};
```

becomes:

```js
const foo = {
	[methodName] () {
		return 42;
	}
};
```

### Object getters

```js
const foo = {
	get foo() {
		return true;
	}
};
```

becomes:

```js
const foo = {
	get foo () {
		return true;
	}
};
```

### Object setters

```js
const foo = {
	set foo(value) {
		this._foo = value;
	}
};
```

becomes:

```js
const foo = {
	set foo (value) {
		this._foo = value;
	}
};
```

### Class constructors

```js
class Foo {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
}
```

becomes:

```js
class Foo {
	constructor (a, b) {
		this.a = a;
		this.b = b;
	}
}
```

### Class methods

```js
class Foo {
	method(a, b) {
		return a + b;
	}
}
```

becomes:

```js
class Foo {
	method (a, b) {
		return a + b;
	}
}
```

### Async class methods

```js
class Foo {
	async method(a, b) {
		return a + b;
	}
}
```

becomes:

```js
class Foo {
	async method (a, b) {
		return a + b;
	}
}
```

### Computed class methods

```js
class Foo {
	[methodName]() {
		return 42;
	}
}
```

becomes:

```js
class Foo {
	[methodName] () {
		return 42;
	}
}
```

### Static class methods

```js
class Foo {
	static method(a, b) {
		return a + b;
	}
}
```

becomes:

```js
class Foo {
	static method (a, b) {
		return a + b;
	}
}
```

### Class getters

```js
class Foo {
	get foo() {
		return true;
	}
}
```

becomes:

```js
class Foo {
	get foo () {
		return true;
	}
}
```

### Class setters

```js
class Foo {
	set foo(value) {
		this._foo = value;
	}
}
```

becomes:

```js
class Foo {
	set foo (value) {
		this._foo = value;
	}
}
```

### Generator functions

```js
function* test() {
	yield 1;
}
```

becomes:

```js
function* test () {
	yield 1;
}
```

### Named exported functions

```js
export function test(a, b) {
	return a + b;
}
```

becomes:

```js
export function test (a, b) {
	return a + b;
}
```

### Default exported functions

```js
export default function test(a, b) {
	return a + b;
}
```

becomes:

```js
export default function test (a, b) {
	return a + b;
}
```

### Async exported functions

```js
export async function test(a, b) {
	return a + b;
}
```

becomes:

```js
export async function test (a, b) {
	return a + b;
}
```

### Generator exported functions

```js
export function* test() {
	yield 1;
}
```

becomes:

```js
export function* test () {
	yield 1;
}
```


## What remains unchanged in JavaScript

### Function calls

```js
test(1, 2);
```

becomes:

```js
test(1, 2);
```

### Arrow functions

```js
const add = (a, b) => a + b;
```

becomes:

```js
const add = (a, b) => a + b;
```

### Anonymous functions
Prettier already handles this case.

```js
const add = function(a, b) {
	return a + b;
};
```

becomes:

```js
const add = function (a, b) {
	return a + b;
};
```


## What this plugin changes in TypeScript

### Function declarations

```ts
function test(a: number, b: number): number {
	return a + b;
}
```

becomes:

```ts
function test (a: number, b: number): number {
	return a + b;
}
```

### Async function declarations

```ts
async function test(a: number, b: number): Promise<number> {
	return a + b;
}
```

becomes:

```ts
async function test (a: number, b: number): Promise<number> {
	return a + b;
}
```

### Object methods

```ts
const foo = {
	method(a: number, b: number): number {
		return a + b;
	}
};
```

becomes:

```ts
const foo = {
	method (a: number, b: number): number {
		return a + b;
	}
};
```

### Async object methods

```ts
const foo = {
	async method(a: number, b: number): Promise<number> {
		return a + b;
	}
};
```

becomes:

```ts
const foo = {
	async method (a: number, b: number): Promise<number> {
		return a + b;
	}
};
```

### Object getters

```ts
const foo = {
	get foo(): boolean {
		return true;
	}
};
```

becomes:

```ts
const foo = {
	get foo (): boolean {
		return true;
	}
};
```

### Object setters

```ts
const foo = {
	set foo(value: boolean) {
		this._foo = value;
	}
};
```

becomes:

```ts
const foo = {
	set foo (value: boolean) {
		this._foo = value;
	}
};
```

### Class constructors

```ts
class Foo {
	constructor(a: number, b: number) {
		this.a = a;
		this.b = b;
	}
}
```

becomes:

```ts
class Foo {
	constructor (a: number, b: number) {
		this.a = a;
		this.b = b;
	}
}
```

### Class methods

```ts
class Foo {
	method(a: number, b: number): number {
		return a + b;
	}
}
```

becomes:

```ts
class Foo {
	method (a: number, b: number): number {
		return a + b;
	}
}
```

### Async class methods

```ts
class Foo {
	async method(a: number, b: number): Promise<number> {
		return a + b;
	}
}
```

becomes:

```ts
class Foo {
	async method (a: number, b: number): Promise<number> {
		return a + b;
	}
}
```

### Static class methods

```ts
class Foo {
	static method(a: number, b: number): number {
		return a + b;
	}
}
```

becomes:

```ts
class Foo {
	static method (a: number, b: number): number {
		return a + b;
	}
}
```

### Abstract class methods

```ts
abstract class Foo {
	abstract method(a: number, b: number): number;
}
```

becomes:

```ts
abstract class Foo {
	abstract method (a: number, b: number): number;
}
```

### Private class methods

```ts
class Foo {
	private method(a: number, b: number): number {
		return a + b;
	}
}
```

becomes:

```ts
class Foo {
	private method (a: number, b: number): number {
		return a + b;
	}
}
```

### Protected class methods

```ts
class Foo {
	protected method(a: number, b: number): number {
		return a + b;
	}
}
```

becomes:

```ts
class Foo {
	protected method (a: number, b: number): number {
		return a + b;
	}
}
```

### Public class methods

```ts
class Foo {
	public method(a: number, b: number): number {
		return a + b;
	}
}
```

becomes:

```ts
class Foo {
	public method (a: number, b: number): number {
		return a + b;
	}
}
```

### Optional class methods

```ts
class Foo {
	method?(a: number, b: number): number {
		return a + b;
	}
}
```

becomes:

```ts
class Foo {
	method? (a: number, b: number): number {
		return a + b;
	}
}
```

### Class getters

```ts
class Foo {
	get foo(): boolean {
		return true;
	}
}
```

becomes:

```ts
class Foo {
	get foo (): boolean {
		return true;
	}
}
```

### Class setters

```ts
class Foo {
	set foo(value: boolean) {
		this._foo = value;
	}
}
```

becomes:

```ts
class Foo {
	set foo (value: boolean) {
		this._foo = value;
	}
}
```

### Computed class methods

```ts
class Foo {
	[methodName](): void {
		return;
	}
}
```

becomes:

```ts
class Foo {
	[methodName] (): void {
		return;
	}
}
```

### Class methods with type parameters

```ts
class Foo {
	method<T>(a: T): T {
		return a;
	}
}
```

becomes:

```ts
class Foo {
	method<T> (a: T): T {
		return a;
	}
}
```

### Generator functions

```ts
function* test(): Generator<number> {
	yield 1;
}
```

becomes:

```ts
function* test (): Generator<number> {
	yield 1;
}
```

### Interface methods

```ts
interface Foo {
	method(a: number, b: number): number;
}
```

becomes:

```ts
interface Foo {
	method (a: number, b: number): number;
}
```

### Function with type parameters

```ts
function foo<T>(arg: T): T {
	return arg;
}
```

becomes:

```ts
function foo<T> (arg: T): T {
	return arg;
}
```

### Named exported functions

```ts
export function test(a: number, b: number): number {
	return a + b;
}
```

becomes:

```ts
export function test (a: number, b: number): number {
	return a + b;
}
```

### Default exported functions

```ts
export default function test(a: number, b: number): number {
	return a + b;
}
```

becomes:

```ts
export default function test (a: number, b: number): number {
	return a + b;
}
```

### Async exported functions

```ts
export async function test(a: number, b: number): Promise<number> {
	return a + b;
}
```

becomes:

```ts
export async function test (a: number, b: number): Promise<number> {
	return a + b;
}
```

### Generator exported functions

```ts
export function* test(): Generator<number> {
	yield 1;
}
```

becomes:

```ts
export function* test (): Generator<number> {
	yield 1;
}
```

### Exported function in namespace

```ts
declare namespace Foo {
	export function test(a: number, b: number): number;
}
```

becomes:

```ts
declare namespace Foo {
	export function test (a: number, b: number): number;
}
```

### Function type aliases

```ts
type MethodType = {
	method(): void;
};
```

becomes:

```ts
type MethodType = {
	method (): void;
};
```


## What remains unchanged in TypeScript

### Function calls

```ts
test<number>(1, 2);
```

becomes:

```ts
test<number>(1, 2);
```

### Arrow functions

```ts
const add = (a: number, b: number): number => a + b;
```

becomes:

```ts
const add = (a: number, b: number): number => a + b;
```

### Anonymous functions
Prettier already handles this case.

```ts
const add = function(a: number, b: number): number {
	return a + b;
};
```

becomes:

```ts
const add = function (a: number, b: number): number {
	return a + b;
};
```

### Type aliases

```ts
type NumberCallback = (x: number) => number;
```

becomes:

```ts
type NumberCallback = (x: number) => number;
```

### Function types

```ts
type Func = { (a: string): number };
```

becomes:

```ts
type Func = { (a: string): number };
```

### Object literal

```ts
let a = { value: null, prev: null, next: null as never };
```

becomes:

```ts
let a = { value: null, prev: null, next: null as never };
```


## Status

Current version is a proof of concept, please try it out and give feedback!

Things not handled yet:
- Function with type parameters (a.k.a. generic functions)
- Computed method names (in classes and objects)
