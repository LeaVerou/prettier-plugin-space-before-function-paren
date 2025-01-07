
import prettier from "prettier";

// Custom Prettier config with your plugin
const config = {
	plugins: ["./index.js"],
	parser: "babel",
	useTabs: true,
};

const t = {
	run: arg => prettier.format(arg, config),
	map: code => code + "\n",
	tests: [
		{
			name: "Changed",
			tests: [
				{
					arg: "function test(a, b) {\n\treturn a + b;\n}",
					expect: "function test (a, b) {\n\treturn a + b;\n}",
				},
				{
					arg: "class Foo {\n\tmethod(a, b) {\n\t\treturn a + b;\n\t}\n}",
					expect: "class Foo {\n\tmethod (a, b) {\n\t\treturn a + b;\n\t}\n}",
				},
				{
					name: "Anonymous function (Prettier default)",
					arg: "const add = function(a, b) {\n\treturn a + b;\n};",
					expect: "const add = function (a, b) {\n\treturn a + b;\n};",
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

// hTest is not currently working properly for promises
for (let test in t.tests) {
	let tests = t.tests[test];

	for (let subtest in tests.tests) {
		const st = tests.tests[subtest];
		const arg = st.arg + "\n";
		const expect = st.expect + "\n";
		const result = await t.run(arg);
		const passed = result === expect;

		if (passed) {
			const name = st.name || st.arg;
			console.log(`✅ ${name}` + (st.arg === st.expect ? ' (unchanged)' : ''));
		}
		else {
			console.log(`❌ ${st.name ? st.name + ": " : ""}Got ${st.arg === result ? 'no change' : result}, expected ${st.expect}`);
		}
	}
}
