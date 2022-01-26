"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
const path = __importStar(require("path"));
const Datastore = require("nedb");
class Worker {
    constructor() {
        this.db = new Datastore({
            filename: path.join(__dirname, "contacts.db"),
            autoload: true,
        });
    }
    listContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((inResolve, inReject) => {
                this.db.find({}, (inError, inDocs) => {
                    if (inError) {
                        inReject(inError);
                    }
                    else {
                        inResolve(inDocs);
                    }
                });
            });
        });
    }
    addContact(inContact) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((inResolve, inReject) => {
                this.db.insert(inContact, (inError, inNewDoc) => {
                    if (inError) {
                        inReject(inError);
                    }
                    else {
                        inResolve(inNewDoc);
                    }
                });
            });
        });
    }
    deleteContact(inID) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((inResolve, inReject) => {
                this.db.remove({ _id: inID }, {}, (inError, inNumRemoved) => {
                    if (inError) {
                        inReject(inError);
                    }
                    else {
                        inResolve("success");
                    }
                });
            });
        });
    }
    updateContact(inContact) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((inResolve, inReject) => {
                this.db.update({ _id: inContact._id }, inContact, {}, (inError) => {
                    if (inError) {
                        inReject(inError);
                    }
                    else {
                        inResolve(this.db.find({ _id: inContact._id }, (inError), Error | null));
                    }
                });
            });
        });
    }
    ;
}
exports.Worker = Worker;
;
//# sourceMappingURL=contacts.js.map