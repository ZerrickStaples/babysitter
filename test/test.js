import Mocha from 'mocha';
import { expect } from 'chai';
import { startTimeRate } from '../src/index';

describe("Canary test", () => {
    it("True equals true", () => {
        expect(true).to.equal(true);
    })
});

describe("Babysitter kata", () => {
    describe("Start time to bedtime", () => {
        it("Return $12 for one hour", () => {
            expect(startTimeRate(5, 6)).to.equal(12);
        });
        it("Return $12 per hour for multiple hours", () => {
            expect(startTimeRate(5, 8)).to.equal(36);
        });
        it("Restrict start time to 5pm", () => {
            expect(startTimeRate(4, 6)).to.equal(12);
        });
    });
});