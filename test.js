import prettier from "prettier";

// Custom Prettier config with our plugin
const config = {
	plugins: ["./index.js"],
	parser: "babel",
	useTabs: true,
};

export default {
	run: arg => prettier.format(arg, config),
	map: code => !code?.endsWith || code.endsWith("\n") ? code : code + "\n", // Append a new line to the expected value (the actual result already has one)
	tests: [
		{
			name: "What this plugin changes",
			tests: [
				{
					name: "Function declaration",
					arg: "function test(a, b) {\n\treturn a + b;\n}",
					expect: "function test (a, b) {\n\treturn a + b;\n}",
				},
				{
					name: "Class methods",
					arg: "class Foo {\n\tmethod(a, b) {\n\t\treturn a + b;\n\t}\n}",
					expect: "class Foo {\n\tmethod (a, b) {\n\t\treturn a + b;\n\t}\n}",
				},
				{
					name: "Class getters",
					arg: "class Foo {\n\tget foo() {\n\t\treturn true;\n\t}\n}",
					expect: "class Foo {\n\tget foo () {\n\t\treturn true;\n\t}\n}",
				},
				{
					name: "Class setters",
					arg: "class Foo {\n\tset foo(value) {\n\t\tthis._foo = value;\n\t}\n}",
					expect: "class Foo {\n\tset foo (value) {\n\t\tthis._foo = value;\n\t}\n}",
				},
			]
		},
		{
			name: "What remains unchanged",
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
				},
				{
					name: "Anonymous function",
					description: "Prettier already handles this case.",
					arg: "const add = function(a, b) {\n\treturn a + b;\n};",
					expect: "const add = function (a, b) {\n\treturn a + b;\n};",
				},
			]
		}
	]
}
