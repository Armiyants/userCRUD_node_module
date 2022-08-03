import * as chai from "chai";
import plugin from 'chai-json';
import {findUser} from "./main.js";

chai.use(plugin);
let expect = chai.expect;

describe('Testing the findUser function', function() {
    it('should return message', function () {
        expect(findUser({})).to.equal("Please provide at least one credential.");
    });
});

describe('Testing the findUser function', function() {
    it('should return a valid JSON body', function () {
        expect(findUser({name: "Clementine Bauch"})).to.be.jsonObj();
    });
});