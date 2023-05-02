import { FormEvent, useState } from 'react'

const errors = {
	required: 'This field is required',
	invalid: 'Please provide a valid email'
}

export default function App() {
	const [isShowError, setIsShowError] = useState(false)
	const [error, setError] = useState('')
	const [email, setEmail] = useState('')

	function handleFormSubmit(e: FormEvent) {
		e.preventDefault()
	}

	function handleSubmitClick() {
		if (email && error) {
			setIsShowError(true)
		}
		if (!email) {
			setIsShowError(true)
			setError(errors.required)
		}
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value)
		if (error === errors.required || e.target.value === '') {
			setIsShowError(false)
		}
		if (e.target.validity.patternMismatch) {
			setError(errors.invalid)
		} else {
			setError('')
			setIsShowError(false)
		}
	}

	return (
		<main className='font-["Josefin_Sans"] h-screen min-h-screen bg-gradientWhite'>
			<section className='flex lg:flex-row flex-col h-full'>
				<div className='lg:w-7/12 lg:px-[164px] lg:py-16 lg:bg-pattern bg-no-repeat bg-cover'>
					<img
						className='lg:w-auto w-24 lg:m-0 ml-8 my-8'
						src='./assets/images/logo.svg'
						alt='logo'
					/>
					<div className='lg:hidden flex justify-center'>
						<img src='./assets/images/hero-mobile.jpg' alt='hero' />
					</div>
					<h1 className='flex flex-col lg:text-start text-center lg:mt-[134px] mt-[62px]'>
						<span className='heading font-light text-desaturatedRed'>
							We're
						</span>
						<span className='heading font-semibold text-darkGrayishRed'>
							coming soon
						</span>
					</h1>
					<p className='lg:text-start text-center ml-[1px] lg:mt-[22px] mt-[15px] lg:pr-[4rem] lg:pl-0 px-7 text-desaturatedRed lg:text-[16px] text-[14px] tracking-[0.004rem] lg:leading-[1.7rem] leading-[1.4rem]'>
						Hello fellow shoppers! We're currently building our new fashion
						store. Add your email below to stay up-to-date with announcements
						and our launch deals.
					</p>
					<div className='lg:mt-10 mt-[30px] lg:p-0 px-10'>
						<form
							className='flex relative lg:w-[calc(100%-4rem)]'
							onSubmit={handleFormSubmit}
						>
							<input
								className={`outline-none text-darkGrayishRed placeholder-desaturatedRed/50  bg-transparent border-[1px] border-desaturatedRed/50 rounded-full lg:px-8 px-6 lg:py-4 py-3 w-full lg:text-base text-[14px] ${
									isShowError && 'border-softRed'
								}`}
								type='email'
								name='email'
								value={email}
								placeholder='Email Address'
								pattern='[A-Za-z\d._%+\-]+@[A-Za-z\d.\-]+\.[A-Za-z]{2,}'
								onChange={handleInputChange}
								required
								onInvalid={e => e.preventDefault()}
							/>
							<button
								type='submit'
								onClick={handleSubmitClick}
								className='absolute right-0 bg-gradient-to-br bg-size-200 bg-pos-0 hover:bg-pos-100 from-lightPink via-darkPink to-lightPink hover:via-lightPink hover:to-lightPink transition-all duration-300 rounded-full grid place-items-center lg:px-[43px] px-[26px] lg:py-[19px] py-[13px] lg:shadow-buttonDesktop shadow-buttonMobile'
							>
								<img src='./assets/images/icon-arrow.svg' alt='arrow' />
							</button>
							{isShowError && (
								<img
									className='absolute lg:right-28 right-20 top-[50%] -translate-y-[50%]'
									src='./assets/images/icon-error.svg'
									alt='error'
								/>
							)}
						</form>
						{isShowError && (
							<p className='self-start text-softRed text-sm mt-3 lg:ml-8 ml-7'>{error}</p>
						)}
					</div>
				</div>
				<div className='h-full lg:block hidden'>
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
