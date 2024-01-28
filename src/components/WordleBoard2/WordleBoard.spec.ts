import { describe, test, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import WordleBoard from './WordleBoard.vue';
import { VICTORY_MESSAGE } from '../../../settings';

describe('WordleBoard', () => {
    test('a victory message appears when the user found the world of the day', async () => {
        // Arrange = setup du composant
        const wrapper = mount(WordleBoard, {
            props: { wordOfTheDay: 'TESTS' },
        });

        // Act = actions de l'utilisateur
        const guessInput = wrapper.find('input[type=text]');
        await guessInput.setValue('TESTS');
        await guessInput.trigger('keydown.enter');

        // Assert = vérification
        expect(wrapper.text()).toContain(VICTORY_MESSAGE);
    });
});
