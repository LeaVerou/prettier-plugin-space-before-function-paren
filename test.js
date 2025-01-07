
import prettier from "prettier/index.mjs";

// Custom Prettier config with your plugin
const config = {
	plugins: [new URL("./index.js", import.meta.url).pathname], // Resolve dynamically for ESM
};

const t = {
	run: arg => prettier.format(arg, config),
	tests: [
		{
			name: "Changed",
			tests: [
				{
					arg: `function test(a, b) { return a + b; }`,
					expect: `function test (a, b) { return a + b; }`,
				},
				{
					arg: `class Foo {
	method(a, b) { return a + b; }
}`,
					expect: `class Foo {
	method (a, b) { return a + b; }
}`,
				},
				{
					name: "Anonymous function (Prettier default)",
					arg: `const add = function(a, b) { return a + b; };`,
					expect: `const add = function (a, b) { return a + b; };`,
				}
			]
		},
		{
			name: "Unchanged",
			tests: [
				{
					name: "Function calls",
					arg: `test(1, 2);`,
					expect: `test(1, 2);`,
				},
				{
					name: "Arrow function",
					arg: `const add = (a, b) => a + b;`,
					expect: `const add = (a, b) => a + b;`,
				}
			]
		}
	]
}

export default t;

for (let test in t.tests) {
	let tests = t.tests[test];
	console.log(`\n${tests.name}`);

	for (let subtest in tests.tests) {
		const st = tests.tests[subtest];
		const result = await t.run(st.arg);
		const passed = result === st.expect;
		const name = st.name || subtest.arg;

		if (passed) {
			console.log(`✅ ${name}` + (st.arg === st.expect ? ' (unchanged)' : ''));
		}
		else {
			console.log(`❌ ${name}: Got ${result}, expected ${st.expect}`);
		}
	}
}
