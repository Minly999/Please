const {
  getScheduleds,
  createScheduled,
  deleteScheduled,
  updateScheduled,
} = require("../src/controllers/scheduledController");

describe("Scheduled Controller Functions", () => {
  test("getScheduleds is a function and is not null", () => {
    expect(getScheduleds).not.toBeNull();
    expect(typeof getScheduleds).toBe("function");
  });

  test("createScheduled is a function and is not null", () => {
    expect(createScheduled).not.toBeNull();
    expect(typeof createScheduled).toBe("function");
  });

  test("deleteScheduled is a function and is not null", () => {
    expect(deleteScheduled).not.toBeNull();
    expect(typeof deleteScheduled).toBe("function");
  });

  test("updateScheduled is a function and is not null", () => {
    expect(updateScheduled).not.toBeNull();
    expect(typeof updateScheduled).toBe("function");
  });
});
