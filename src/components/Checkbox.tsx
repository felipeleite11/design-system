import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {
	
}

export function Checkbox(props: CheckboxProps) {
	return (
		<RadixCheckbox.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
			<RadixCheckbox.Indicator>
				<Check weight="bold" className="text-cyan-500 h-5 w-5" />
			</RadixCheckbox.Indicator>
		</RadixCheckbox.Root>
	)
}
