import * as index from "@service/user/index"
// @ponicode
describe("index.default.users", () => {
    test("0", async () => {
        await index.default.users()
    })
})

// @ponicode
describe("index.default.createUser", () => {
    test("0", async () => {
        await index.default.createUser({ data: undefined })
    })
})
