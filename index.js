import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import typescriptPlugin from "prettier/plugins/typescript";

export const parsers = {
	...babelPlugin.parsers,
	...typescriptPlugin.parsers,
};

export const printers = {
	estree: {
		// Inherit all default estree printer behavior (comment handling, etc.)
		...estreePlugin.printers.estree,

		print (path, options, print) {
			let node = path.getValue();
			let parent = path.getParentNode();

			if ([
				// JavaScript node types
				"FunctionDeclaration",
				"FunctionExpression",
				"ObjectMethod",
				"MethodDefinition",
				"ClassMethod",
				// TypeScript node types
				"TSMethodSignature",
			].includes(node.type) || 
			// Handle object methods in TypeScript
			(node.type === "Identifier" && parent?.type === "Property" && (parent.method || parent.kind))) {
				if (node.typeParameters) {
					// TODO: Add space after the closing bracket
					// We should get `foo<T> () {...}`, not `foo <T> {...}`
				}
				else {
					node = node.type === "Identifier" ? node : node.id ?? node.key;
					if (node?.name) {
						node.name += " ";
					}
				}
			}

			return estreePlugin.printers.estree.print(path, options, print);
		},
	},
};
