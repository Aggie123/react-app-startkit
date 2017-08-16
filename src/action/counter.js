/*
 * action 类型
 */

export const ADD = 'ADD';
export const MINUS = 'MINUS';

/*
 * action 创建函数
 */

export function addNumber(number) {
  return { type: ADD, number }
}

export function minusNumber(number) {
  return { type: MINUS, number }
}