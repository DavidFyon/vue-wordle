import {describe, expect, test} from "vitest";

import {mount} from "@vue/test-utils";
import WordleBoard from "./WordleBoard.vue";

describe("WordleBoard", () => {
    test("a victory message appears", async () => {
        const wrapper = mount(WordleBoard)

        expect(wrapper.text()).toContain("You won !")
    })
})