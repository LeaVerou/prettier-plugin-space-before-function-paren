import { builders } from "prettier/doc";
// import { parsers as babelParsers } from 'prettier/plugins/babel';
// import { parsers as flowParsers } from 'prettier/plugins/flow';
// import { parsers as htmlParsers } from 'prettier/plugins/html';
// import { parsers as typescriptParsers } from 'prettier/plugins/typescript';

// Plugin Metadata
export const languages = [
	{
		name: "JavaScript",
		parsers: ["babel", "babel-ts", "typescript", "espree", "meriyah"],
	},
];

let printers2 = {
	"babel": {
		print(path, options, print) {
			const node = path.getValue();
			console.log("node", node);

			// Handle function declarations and method definitions only
			if (
				(node.type === "FunctionDeclaration" || node.type === "MethodDefinition") &&
				node.id // Must be a named function
			) {
				// Insert space before the opening parenthesis
				return builders.concat([node.id.name, " ("]);
			}

			// Default behavior for all other nodes
			return path.call(print);
		},
	},
};

export const printers = new Proxy(printers2, {
	get (target, prop, receiver) {
		console.log(prop);

		return target[prop];
	}
});
