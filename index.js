import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import { builders } from "prettier/doc";

export const parsers = {
	babel: {
		...babelPlugin.parsers.babel,
		astFormat: "estree",
	},
};

export const printers = {
	"estree": {
		print (path, options, print) {
			const node = path.getValue();

			if (
				["FunctionDeclaration", "FunctionExpression", "ClassMethod"].includes(node.type) &&
				node.type !== "ArrowFunctionExpression"
			) {
				const parts = [];

				// Add appropriate prefix
				if (node.type === "ClassMethod" && node.kind !== "method") {
					// get, set, static
					parts.push(node.kind, " ");
				}
				else if (node.type === "FunctionDeclaration") {
					parts.push("function ");
				}
				else if (node.type === "FunctionExpression") {
					parts.push("function");
				}

				// Add name if present
				if (node.type === "ClassMethod") {
					parts.push(path.call(print, "key"));
				}
				else if (node.id) {
					parts.push(node.id.name);
				}

				// Add parameters and body with consistent spacing
				const params = builders.join(
					builders.concat([",", " "]),
					path.map(print, "params")
				);

				parts.push(" (", params, ") ", path.call(print, "body"));

				return builders.concat(parts);
			}

			// Fallback to original printer for all other nodes
			return estreePlugin.printers.estree.print(path, options, print);
		}
	},
};
