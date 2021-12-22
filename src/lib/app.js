import { writable, get } from 'svelte/store';
import { browser } from '$app/env';

export const state = writable(null);

if (browser) {
	let storedState = localStorage.getItem('simply-todo');
	if (storedState) {
		state.set(JSON.parse(storedState));
	} else {
		state.set({
			todos: {
				uncategorised: [
					{
						name: 'Clean Kitchen 🔪',
						notes: 'Make sure to scrub out the blood',
						done: false
					},
					{
						name: 'Pat Snake 🐍',
						notes: 'Make sure to get under his scales',
						done: false
					}
				]
			}
		})
	}
}

export const storeState = () => {
	localStorage.setItem('simply-todo', JSON.stringify(get(state)));
};

export const selectedCategory = writable('uncategorised');
