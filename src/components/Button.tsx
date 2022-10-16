import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
	children: ReactNode
	asChild?: boolean
}

export function Button({ asChild, children }: ButtonProps) {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp className="py-4 px-3 rounded bg-cyan-500 font-semibold text-black text-sm w-full ring-white outline-none hover:bg-cyan-300 transition-colors focus:ring-2">
			{children}
		</Comp>
	)
}
