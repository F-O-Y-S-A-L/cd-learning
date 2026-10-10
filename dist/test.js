"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore Node.js type definitions may not be installed in this project.
const node_test_1 = __importDefault(require("node:test"));
// @ts-ignore Node.js type definitions may not be installed in this project.
const strict_1 = __importDefault(require("node:assert/strict"));
(0, node_test_1.default)('version message is correct', () => {
    const message = 'Version 2';
    strict_1.default.equal(message, 'Version 2');
});
//# sourceMappingURL=test.js.map