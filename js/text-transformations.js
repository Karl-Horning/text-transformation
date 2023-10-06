/**
 * A helper function to validate and clean the input text.
 *
 * @param {string} text - The input text to be validated.
 * @returns {string} The cleaned input text.
 * @throws {Error} Throws an error if the input is not a string.
 */
const validateAndCleanInput = function (text) {
    if (typeof text !== "string") {
        throw new Error("Input must be a string");
    }
    return text.trim();
};

/**
 * Converts the input text to uppercase.
 *
 * @param {string} text - The text to convert to uppercase.
 * @returns {string} The input text in uppercase.
 */
const convertTextToUppercase = (text) => text.toUpperCase();

/**
 * Converts the input text to lowercase.
 *
 * @param {string} text - The text to convert to lowercase.
 * @returns {string} The input text in lowercase.
 */
const convertTextToLowercase = (text) => text.toLowerCase();

/**
 * Capitalizes the first letter of each word in a text string.
 *
 * @param {string} text - The text to capitalize.
 * @returns {string} The input text with each word capitalized.
 */
const capitaliseText = function (text) {
    // Split the text into an array of words
    const words = text.split(" ");

    // Iterate through each word and capitalise the first letter
    const capitalisedWords = words.map((word) => {
        // Handle empty words (for example, with multiple spaces)
        if (word.length === 0) return word;
        const firstLetter = word[0].toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
    });

    // Join the capitalised words back into a single string
    return capitalisedWords.join(" ");
};

/**
 * Converts a string of text to camel case.
 *
 * @param {string} text - The text to convert to camel case.
 * @returns {string} The input text in camel case.
 */
const convertTextToCamelCase = function (text) {
    const cleanedText = validateAndCleanInput(text);

    return (
        cleanedText
            // Split the text by whitespace
            .split(/\s+/)
            .map((word, index) => {
                // Lowercase the first word
                if (index === 0) return word.toLowerCase();
                // Uppercase the first letter of each subsequent word
                return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                );
            })
            // Join the words together without spaces
            .join("")
    );
};

/**
 * Converts a string of text to snake case.
 *
 * @param {string} text - The text to convert to snake case.
 * @returns {string} The input text in snake case.
 */
const convertTextToSnakeCase = function (text) {
    const cleanedText = validateAndCleanInput(text);

    return (
        cleanedText
            // Split the text by whitespace
            .split(/\s+/)
            .map((word) => word.toLowerCase())
            // Join the words together with underscores
            .join("_")
    );
};

/**
 * Converts a string of text to kebab case.
 *
 * @param {string} text - The text to convert to kebab case.
 * @returns {string} The input text in kebab case.
 */
const convertTextToKebabCase = function (text) {
    const cleanedText = validateAndCleanInput(text);

    return (
        cleanedText
            // Split the text by whitespace
            .split(/\s+/)
            .map((word) => word.toLowerCase())
            // Join the words together with underscores
            .join("-")
    );
};

/**
 * Converts a string of text to Pascal case.
 *
 * @param {string} text - The text to convert to Pascal case.
 * @returns {string} The input text in Pascal case.
 */
const convertTextToPascalCase = function (text) {
    const cleanedText = validateAndCleanInput(text);

    return (
        cleanedText
            // Split the text by whitespace
            .split(/\s+/)
            // Uppercase the first letter of each subsequent word
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            // Join the words together without spaces
            .join("")
    );
};

/**
 * Separates camelCase and PascalCase names by adding spaces between each word.
 *
 * @param {string} text - The text to separate.
 * @returns {string} The input text with spaces added between words.
 */
const separateCamelAndPascalCase = function (text) {
    if (typeof text !== "string") {
        throw new Error("Input must be a string");
    }

    // Use a regular expression to add a space before each uppercase letter
    const separatedText = text.replace(/([a-z])([A-Z])/g, "$1 $2");

    return separatedText;
};
