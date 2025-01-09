import prettier from "prettier";

// Custom Prettier config with our plugin
const config = {
	plugins: ["./index.js"],
	parser: "babel",
	useTabs: true,
};

export default {
	run: arg => prettier.format(arg, config),
	map: code => code.endsWith("\n") ? code : code + "\n", // Append a new line to the expected value (the actual result already has one)
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
					name: "Getters and Setters",
					arg: "class Foo {\n\tget method() {\n\t\treturn true;\n\t}\n}",
					expect: "class Foo {\n\tget method () {\n\t\treturn true;\n\t}\n}",
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
