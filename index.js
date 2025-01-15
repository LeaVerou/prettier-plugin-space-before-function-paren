import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";

export const parsers = {
	...babelPlugin.parsers,
};

export const printers = {
	estree: {
		print (path, options, print) {
			let node = path.getValue();

			if (["FunctionDeclaration", "FunctionExpression", "ClassMethod"].includes(node.type)) {
				// Add space to either the function name or class method name
				node = node.id ?? node.key;
				if (node?.name) {
					node.name += " ";
				}
			}

			return estreePlugin.printers.estree.print(path, options, print);
		},
	},
};
