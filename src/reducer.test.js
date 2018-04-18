import {tasksReducer} from "./reducer";

jest.mock('uniqid', () => jest.fn(() => 1));

describe('reducer', () => {
    it('should return default state', () => {
        const state = tasksReducer(undefined, {});

        expect(state.toJS()).toEqual({
            filter: '',
            list: [{
                id: 1,
                title: 'Complete my homework'
            }]
        });
    })
});