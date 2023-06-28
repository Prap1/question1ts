export function replaceStringVariables(fullString: string, data: { [x: string]: string }): string {
  const regex = /(?<!#)\${(\w+)}/g;
  const missingFields: string[] = [];
  const replacedString = fullString.replace(regex, (match: string, key: string) => {
    if (!data[key]?.length) {
      missingFields.push(match.substring(1));
    }
    return `"${data[key]}"`;
  });

  if (missingFields.length) {
    console.log(
      `\nFollowing environment variables in the template file do not contain values from the remote source. Remove them from the env file or provide a value in the Hashicorp vault.\n\n${missingFields.join(
        "\n"
      )}`
    );
    throw new Error("internal::INVALID_TEMPLATE_OR_SECRETS");
  } else {
    return replacedString;
  }
}
