"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceStringVariables = void 0;
function replaceStringVariables(fullString, data) {
    const regex = /(?<!#)\${(\w+)}/g;
    const missingFields = [];
    const replacedString = fullString.replace(regex, (match, key) => {
        var _a;
        if (!((_a = data[key]) === null || _a === void 0 ? void 0 : _a.length)) {
            missingFields.push(match.substring(1));
        }
        return `"${data[key]}"`;
    });
    if (missingFields.length) {
        console.log(`\nFollowing environment variables in the template file do not contain values from the remote source. Remove them from the env file or provide a value in the Hashicorp vault.\n\n${missingFields.join("\n")}`);
        throw new Error("internal::INVALID_TEMPLATE_OR_SECRETS");
    }
    else {
        return replacedString;
    }
}
exports.replaceStringVariables = replaceStringVariables;
