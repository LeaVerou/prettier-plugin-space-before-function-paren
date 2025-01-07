import { builders } from "prettier/doc";

// Universal AST Walker
function walk(node, callback) {
	if (node && typeof node === "object") {
		callback(node); // Apply transformation logic

		// Recurse through all children
		for (const key in node) {
			if (Array.isArray(node[key])) {
				node[key].forEach((child) => walk(child, callback));
			} else if (typeof node[key] === "object") {
				walk(node[key], callback);
			}
		}
	}
}

// Plugin Definition
export const languages = [
	{
		name: "JavaScript",
		parsers: ["babel", "babel-ts", "typescript", "espree", "meriyah"],
	},
];

export const parsers = {
	// Generic AST Transformer
	customParser: {
		// Use the selected parser (e.g., Babel, TypeScript)
		parse(text, parsers, options) {
			const ast = parsers[options.parser].parse(text, parsers, options);

			// Walk AST and mark function definitions
			walk(ast, (node) => {
				if (
					(node.type === "FunctionDeclaration" || node.type === "MethodDefinition") &&
					node.id // Only named functions
				) {
					node.extra = { addSpaceBeforeParen: true }; // Mark node for formatting
				}
			});

			return ast;
		},
		astFormat: "estree",
		locStart: (node) => node.start,
		locEnd: (node) => node.end,
	},
};

export const printers = {
	estree: {
		print(path, options, print) {
			const node = path.getValue();

			// Check for marked nodes and enforce spacing
			if (node.extra && node.extra.addSpaceBeforeParen) {
				return builders.concat([node.id.name, " ("]);
			}

			// Default behavior for all other nodes
			return path.call(print);
		},
	},
};
