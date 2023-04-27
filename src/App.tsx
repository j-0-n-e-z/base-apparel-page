import { FormEvent, useState } from 'react'

export default function App() {
	const [email, setEmail] = useState('')

	function handleEmailSubmit(e: FormEvent) {
		e.preventDefault()
		return Math.PI
	}

	return (
		<main className='font-["Josefin_Sans"] h-screen min-h-screen bg-gradientWhite'>
			<section className='flex h-full'>
				<div className='w-7/12 px-[164px] py-16 bg-pattern bg-no-repeat bg-cover'>
					<img src='./assets/images/logo.svg' alt='logo' />
					<h1 className='flex flex-col mt-[134px]'>
						<span className='heading font-light text-desaturatedRed'>
							We're
						</span>
						<span className='heading font-semibold text-darkGrayishRed'>
							coming soon
						</span>
					</h1>
					<p className='ml-[1px] mt-[22px] pr-[4rem] text-desaturatedRed text-[16px] tracking-[0.004rem] leading-[1.7rem]'>
						Hello fellow shoppers! We're currently building our new fashion
						store. Add your email below to stay up-to-date with announcements
						and our launch deals.
					</p>
					<div className='mt-10'>
						<form className='flex relative w-[calc(100%-4rem)]'>
							<input
								className='outline-none text-darkGrayishRed  placeholder-desaturatedRed/50  bg-transparent border-[1px] border-desaturatedRed/50 rounded-full px-8 py-4 w-full'
								type='email'
								name='email'
								placeholder='Email Address'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<button
								type='submit'
								className='absolute right-0 bg-gradientRed hover:bg-gradientHover transition rounded-full grid place-items-center px-[43px] py-[19px] shadow-[0_10px_25px_0_#ce9797]'
								onClick={handleEmailSubmit}
							>
								<img src='./assets/images/icon-arrow.svg' alt='arrow' />
							</button>
						</form>
					</div>
				</div>
				<div className='h-full'>
					<img
						className='h-full w-full object-cover'
						src='./assets/images/hero-desktop.jpg'
						alt='hero'
					/>
				</div>
			</section>
		</main>
	)
}
