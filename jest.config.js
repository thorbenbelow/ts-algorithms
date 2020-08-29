module.exports = {
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testRegex: "(/test/.*|(\\.|/)test)\\.ts$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts","js", "json", "node"],
    collectCoverage: false,
    bail: false,
    verbose:false
};