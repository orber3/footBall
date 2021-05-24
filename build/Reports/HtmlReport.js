"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(teamName) {
        this.teamName = teamName;
    }
    HtmlReport.prototype.print = function (report) {
        console.log(this.teamName);
        var html = "\n    <div> \n    <h1> Analysis report\n\n    </h1>\n    <div> " + report + " </div>\n\n    </div>\n    \n    ";
        fs_1.default.writeFileSync(this.teamName + ".html", html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
