import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextboxRootProps {
	children: ReactNode
}

export interface TextboxInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextboxIconProps {
	children: ReactNode
}

function TextboxRoot({ children }: TextboxRootProps) {
	return (
		<div className="flex items-center h-12 pl-4 gap-3 rounded bg-gray-800 w-full ring-cyan-300 focus-within:ring-2">
			{children}
		</div>
	)
}

function TextboxIcon({ children }: TextboxIconProps) {
	return (
		<Slot className="w-6 h-6 text-gray-400">
			{children}
		</Slot>
	)
}

function TextboxInput(props: TextboxInputProps) {
	return (
		<input 
			className="bg-transparent py-4 pr-3 flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
			{...props}
		/>
	)
}

export const Textbox = {
	Root: TextboxRoot,
	Input: TextboxInput,
	Icon: TextboxIcon
}
