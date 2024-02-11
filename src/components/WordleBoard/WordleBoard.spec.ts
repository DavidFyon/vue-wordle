import {describe, expect, test, beforeEach, vi} from "vitest";

import {mount} from "@vue/test-utils";
import WordleBoard from "./WordleBoard.vue";
import {VICTORY_MESSAGE, DEFEAT_MESSAGE} from "../../../settings";

describe("WordleBoard", () => {
    let wordOfTheDay = "TESTS";
    let wrapper: ReturnType<typeof mount>;

    beforeEach(() => {
        // Arrange = configuration
        wrapper = mount(WordleBoard, {props: {wordOfTheDay}})
    })

    async function playerSubmitsGuess(guess: string) {
        const guessInput = wrapper.find("input[type=text]")
        await guessInput.setValue(guess)
        await guessInput.trigger("keydown.enter")
    }

    test("a victory message appears", async () => {
        // Act = actions
        await playerSubmitsGuess(wordOfTheDay)

        // Assert = vérification
        expect(wrapper.text()).toContain(VICTORY_MESSAGE)
    })

    test("a defeat message appears if the user makes a guess that is incorrect", async () => {
        // Act = actions
        await playerSubmitsGuess("WRONG")

        // Assert = vérification
        expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
    })

    test("no end-of-game message appears if the user has not yet made a guess", async () => {
        // Assert = vérification
        expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
        expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
    })

    test("If a word of the day provided does not have exactly 5 characters, a warning is emitted", async () => {
        vi.spyOn(console, "warn")
        mount(WordleBoard, {props: {wordOfTheDay: "TOOLONG"}})

        expect(console.warn).toHaveBeenCalled()
    })
})