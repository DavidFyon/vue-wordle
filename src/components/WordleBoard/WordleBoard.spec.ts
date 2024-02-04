import {describe, expect, test} from "vitest";

import {mount} from "@vue/test-utils";
import WordleBoard from "./WordleBoard.vue";
import {VICTORY_MESSAGE} from "../../../settings";

describe("WordleBoard", () => {
    test("a victory message appears", async () => {
        const wrapper = mount(WordleBoard)

        expect(wrapper.text()).toContain(VICTORY_MESSAGE)
    })
})