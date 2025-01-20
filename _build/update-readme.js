import tests from "../test.js";
import fs from "fs";

const TEMPLATE_CATEGORY = (title, examples) =>
`## ${ title }

${ examples.filter(Boolean).join("\n") }`;

const TEMPLATE_EXAMPLE = (title, description, input, output, ts = false) =>
`### ${ title }${ description ? "\n" + description : "" }

\`\`\`${ ts ? "ts" : "js" }
${ input }
\`\`\`

becomes:

\`\`\`${ ts ? "ts" : "js" }
${ output }
\`\`\`
`;

let content = tests.tests.flatMap(language => {
	return language.tests.map(category => {
		let examples = category.tests.map(test => !test.skip && TEMPLATE_EXAMPLE(
			test.name,
			test.description,
			test.arg,
			test.expect,
			language.name === "TypeScript"
		));
	
		return TEMPLATE_CATEGORY(category.name + " in " + language.name, examples);
	});
});

let readme = fs.readFileSync("README.src.md", "utf8");

readme = "<!-- ⚠️ Do NOT edit this README! It is automatically generated by _build/update-readme.js. Edit README.src.md instead! -->\n" + readme;
readme = readme.replace("<!-- examples -->", content.join("\n\n"));

fs.writeFileSync("README.md", readme);
