import {describe, expect, test} from "vitest";

import {mount} from "@vue/test-utils";
import WordleBoard from "./WordleBoard.vue";
import {VICTORY_MESSAGE} from "../../../settings";

describe("WordleBoard", () => {
    test("a victory message appears", async () => {
        // Arrange = configuration
        const wrapper = mount(WordleBoard, {props: {wordOfTheDay: "TESTS"}})

        // Act = actions
        const guessInput = wrapper.find("input[type=text]")
        await guessInput.setValue("TESTS")
        await guessInput.trigger("keydown.enter")

        // Assert = vérification
        expect(wrapper.text()).toContain(VICTORY_MESSAGE)
    })
})