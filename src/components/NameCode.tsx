
const NameCode = () => {
  return (
    <div className="flex rounded-lg hover:z-50 border border-transparent hover:border-white hover:scale-110 transition-all flex-col max-md:flex-col-reverse items-center gap-20 max-md:gap-6">
					<div className="max-md:w-[300px] w-[400px] bg-[#252525] p-4 py-6 rounded-lg shadow-md  relative">
						<div className="absolute flex gap-2 right-2 top-2">
							<span className="aspect-square w-4 bg-green-500 rounded-full"></span>
							<span className="aspect-square w-4 bg-yellow-500 rounded-full"></span>
							<span className="aspect-square w-4 bg-red-500 rounded-full"></span>
						</div>
						<code className="text-white flex flex-col text-start md:text-2xl typewriter">
							<h1 className="max-w-fit ">
								<span className="text-blue-600">
									{"<h1 "}
									<span className="text-orange-500">
										id<span className="text-red-500">=</span>
										<span className="text-orange-300">'name'</span>
									</span>
									{">"}{" "}
								</span>{" "}
								<br />
							</h1>
							<h1 className="max-w-fit pl-5">
								<span>Onuralp Hacıhamzaoğlu</span>
								<br />
							</h1>
							<h1 className="max-w-fit">
								<span className="text-blue-600">{" </h1>"}</span>
							</h1>
						</code>
					</div>
				</div>
  )
}

export default NameCode