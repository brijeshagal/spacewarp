import React from 'react'
import f from '../fritz.svg'

const Hero = () => {
  return (
	<div className="container mx-auto p-20 lg:w-5/6 flex flex-row justify-center">
		<img src={f} className="h-[400px] lg:h-[500px] bg-red-500" />
		<div className="flex flex-col justify-center">
		<div className="px-8 md:px-12 lg:px-20 text-slate-100">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint quas voluptatum impedit excepturi assumenda rerum recusandae laborum sit accusantium perferendis sequi, eaque in.
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo veniam quod deserunt. Dolorum itaque saepe voluptas nostrum porro soluta beatae quidem voluptatum sed impedit, iure, iusto ullam culpa dolorem.
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi et quae, optio officia nihil quis culpa cum accusamus sit minus alias magni! Reprehenderit minima accusamus vitae dolore.
		</div>
		<div className="mx-auto px-4 py-2 bg-red-400 rounded-lg my-8">
			Do now
		</div>
		</div>
	</div>
  )
}

export default Hero