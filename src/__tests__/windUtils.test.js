import * as windUtils from "../utils/windUtils";

describe("Wind utilities functions", () => {
  it("should know if a wind is mistral based on its direction", () => {
    expect(windUtils.isMistral(1)).toBe(false);
    expect(windUtils.isMistral(0)).toBe(false);
    expect(windUtils.isMistral(279)).toBe(false);
    expect(windUtils.isMistral(280)).toBe(true);
    expect(windUtils.isMistral(359)).toBe(true);
    expect(windUtils.isMistral(360)).toBe(false);
    expect(windUtils.isMistral(400)).toBe(false);
  });

  it("should know if a wind is strong based on its direction", () => {
    expect(windUtils.isStrong(0)).toBe(false);
    expect(windUtils.isStrong(1)).toBe(false);
    expect(windUtils.isStrong(4.5)).toBe(false);
    expect(windUtils.isStrong(4.6)).toBe(true);
    expect(windUtils.isStrong(10)).toBe(true);
  });

  it("should return a textual direction based on the meteorological degrees", () => {
    expect(windUtils.getDirection(0)).toBe("Nord");
    expect(windUtils.getDirection(11.25)).toBe("Nord Est");
    expect(windUtils.getDirection(56.25)).toBe("Est");
    expect(windUtils.getDirection(101.25)).toBe("Sud Est");
    expect(windUtils.getDirection(146.25)).toBe("Sud");
    expect(windUtils.getDirection(191.25)).toBe("Sud Ouest");
    expect(windUtils.getDirection(236.25)).toBe("Ouest");
    expect(windUtils.getDirection(281.25)).toBe("Nord Ouest");
    expect(windUtils.getDirection(326.25)).toBe("Nord");
    expect(windUtils.getDirection(360)).toBe("Nord");
  });
});
