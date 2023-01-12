import { ChangeEvent, MouseEvent } from 'react';
import { RecoilState } from 'recoil';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export interface InputProps {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface Todo {
  id: number;
  title: string;
  status: string;
  content?: string;
}

export type TodoListType = Todo[];

export interface TodoFormRecoilObserverProps {
  node: RecoilState<TodoListType>;
  onChange: (value: TodoListType) => void;
}
