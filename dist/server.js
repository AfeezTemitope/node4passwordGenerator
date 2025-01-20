"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('App is running wild nd out !!!');
});
app.get('/generateRandomPassword', (req, res) => {
    const password = passwordGenerator_1.default;
    res.json({ password });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
