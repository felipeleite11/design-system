import { Envelope, LockKey } from 'phosphor-react'

import './styles/global.css'

import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { Logo } from './components/Logo'
import { Textbox } from './components/Textbox'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

function App() {
	return (
		<div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
			<header className="flex flex-col items-center">
				<Logo />

				<Heading size="lg" className="mt-2">Ignite Lab</Heading>

				<Text size="lg" className="text-gray-400 mt-2">Faça login e comece a usar!</Text>
			</header>

			<form className="flex flex-col items-stretch w-full max-w-sm mt-8 gap-4">
				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold">Endereço de e-mail</Text>

					<Textbox.Root>
						<Textbox.Icon>
							<Envelope />
						</Textbox.Icon>

						<Textbox.Input id="email" type="email" placeholder="Digite seu e-mail" />
					</Textbox.Root>
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold">Sua senha</Text>

					<Textbox.Root>
						<Textbox.Icon>
							<LockKey />
						</Textbox.Icon>

						<Textbox.Input id="password" type="password" placeholder="********" />
					</Textbox.Root>
				</label>

				<label htmlFor="remember" className="flex items-center gap-2 cursor-pointer w-fit">
					<Checkbox id="remember" />
					<Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
				</label>

				<Button type="submit" className="mt-4">
					Entrar na plataforma
				</Button>
			</form>

			<footer className="flex flex-col items-center gap-4 mt-6">
				<Text asChild size="sm">
					<a href="#" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
				</Text>

				<Text asChild size="sm">
					<a href="#" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
				</Text>
			</footer>
		</div>
	)
}

export default App
