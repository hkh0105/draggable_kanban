import {
  ButtonHTMLAttributes,
  ChangeEvent,
  HTMLProps,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
} from 'react';
import { RecoilState } from 'recoil';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export interface BoxProps {
  children: ReactNode;
  className?: string;
}
export interface InputProps extends HTMLProps<HTMLInputElement> {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface Todo {
  id: string;
  title: string;
  status: string;
  content?: string;
}

export type TodoListType = Todo[];

export interface TodoFormRecoilObserverProps {
  node: RecoilState<TodoListType>;
  onChange: (value: TodoListType) => void;
}

export interface DragableBoxProps {
  children: ReactNode;
  id?: string;
  index: number;
}

export interface DroppableBoxProps {
  status: string;
  children?: ReactNode;
}

export type TodoStatusType = {
  items: TodoListType;
  name: string;
};
