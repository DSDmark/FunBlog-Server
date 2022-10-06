"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
// MIDDLEWARE
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
const PORT = process.env.PORT || 8000;
//ROUTES
app.use("/api", routes_1.default);
//DATABASE
require("./config/database");
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});
