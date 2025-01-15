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

		// Comments are not part of an AST and are handled separately
		// See https://prettier.io/docs/en/plugins#handling-comments-in-a-printer
		printComment (commentPath, options) {
			return estreePlugin.printers.estree.printComment(commentPath, options);
		},

		canAttachComment (node) {
			return node.type && node.type !== "Comment";
		},

		isBlockComment (node) {
			return node.type === "CommentBlock";
		},

		// Use Prettier's default comment attachment algorithm
		handleComments: {
			ownLine (comment, text, options, ast, isLastComment) {
				return false;
			},
			endOfLine (comment, text, options, ast, isLastComment) {
				return false;
			},
			remaining (comment, text, options, ast, isLastComment) {
				return false;
			},
		},
	},
};
