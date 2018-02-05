import Mocha from "mocha";
import { expect } from "chai";
import { startTimeRate, bedtimeRate, endTimeRate } from "../src/index";

describe("Canary test", () => {
  it("True equals true", () => {
    expect(true).to.equal(true);
  });
});

describe("Babysitter kata", () => {
  describe("Start time to bedtime", () => {
    it("Return $12 for one hour", () => {
      expect(startTimeRate(5, 6)).to.equal(12);
    });

    it("Return $12 per hour for multiple hours", () => {
      expect(startTimeRate(5, 8)).to.equal(36);
    });

    it("Restrict start time to 5 PM", () => {
      expect(startTimeRate(4, 6)).to.equal(12);
    });
  });
  describe("Bedtime to midnight", () => {
    it("Return $8 for one hour", () => {
      expect(bedtimeRate(11, 12)).to.equal(8);
    });

    it("Return $8 per hour for multiple hours", () => {
      expect(bedtimeRate(9, 12)).to.equal(24);
    });
  });
  describe("Midnight to end", () => {
    it("Return $16 for one hour", () => {
      expect(endTimeRate(12, 1)).to.equal(16);
    });

    it("Return $16 per hour for multiple hours", () => {
      expect(endTimeRate(12, 3)).to.equal(48);
    });

    it("Restrict end time to 4 AM", () => {
      expect(endTimeRate(12, 5)).to.equal(64);
    });
  });
});
