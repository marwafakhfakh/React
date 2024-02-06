// todoUtils.js
import React from 'react';
import Todo from './Todo';

export function createTodo(id, name) {
  alert(id);
  return <Todo id={id} name={name} completed={true} key={id} />;
}
