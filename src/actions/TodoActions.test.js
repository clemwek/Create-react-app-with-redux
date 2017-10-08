import * as todoActions from './TodoActions';
import nock from 'nock'

// test async actions
describe('Todo Actions', () => {
  it('Should get todos', () => {
    const todo = {
      id: 1,
      title: 'someName',
      status: true,
    };
    const expectedAction = {
      type: 'GET_TODO_SUCCESS',
      todo
    };

    const action = todoActions.getTodoSuccess(todo);

    expect(action).toEqual(expectedAction);
  });

  it('Should add todos', () => {
    const todo = {
      id: 1,
      title: 'someName',
      status: true,
    };
    const expectedAction = {
      type: 'ADD_TODO_SUCCESS',
      todo
    };

    const action = todoActions.addTodoSuccess(todo);

    expect(action).toEqual(expectedAction);
  });

  it('It creates a get success', () => {
    nock('http://example.com/')
      .get('/todos')
      .reply(200, { body: { todo: ['number of todos'] } } )
  });
});