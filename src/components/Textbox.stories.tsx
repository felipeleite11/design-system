import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { Textbox, TextboxRootProps } from './Textbox'

export default {
	title: 'Components/Textbox',
	component: Textbox.Root,
	args: {
		children: [
			<Textbox.Icon>
				<Envelope />
			</Textbox.Icon>,
			<Textbox.Input placeholder="Placeholder" />
		]
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	}
} as Meta<TextboxRootProps>

export const Default: StoryObj<TextboxRootProps> = {}

export const WithoutIcon: StoryObj<TextboxRootProps> = {
	args: {
		children: (
			<Textbox.Input placeholder="Placeholder" />
		)
	}
}
