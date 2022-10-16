import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	asChild?: boolean
}

export function Button({ asChild, children, className = '', ...props }: ButtonProps) {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp 
			className={clsx(
				'py-3 px-4 rounded bg-cyan-500 font-semibold text-black text-sm w-full ring-white outline-none hover:bg-cyan-300 transition-colors focus:ring-2',
				className
			)} 
			{...props}
		>
			{children}
		</Comp>
	)
}
