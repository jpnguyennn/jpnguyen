"use client";

import { useState } from "react";

const Portfolio = () => {
	const [activeSection, setActiveSection] = useState("");

	const handleLinkClick = (section) => {
		setActiveSection(section);
	};

	const handleBack = () => {
		setActiveSection("");
	};

	const NAV_LIST = [
		{ id: "about", text: "about" },
		{ id: "experience", text: "experience" },
		{ id: "contact", text: "contact" },
	];

	const EXP_LIST = [
		{
			id: 0,
			experience_name: "nj fbla slc",
			experience_desc: "first place team",
			experience_date: "➸ mar '21",
			experience_link: "https://github.com/jpnguyennn/xlphotography",
		},
		{
			id: 1,
			experience_name: "rutgers university",
			experience_desc: "undergraduate research assistant",
			experience_date: "➸ jun '23 || jan '25",
			experience_link: "https://github.com/Flapping-Wings/tombo-py",
		},
	];

	const PROJ_LIST = [
		{
			id: 0,
			project_name: "vsa official website",
			project_desc: "semi-full stack application for members of vsa",
			project_date: "➸ jun '24",
			project_link: "https://github.com/jpnguyennn/rutgers-vsa-frontend",
		},
	];

	const content = () => {
		switch (activeSection) {
			case "about":
				return (
					<div className="space-y-6">
						<h2 className="text-4xl font-titles bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
							about me.
						</h2>
						<p className="text-lg text-gray-100 leading-relaxed">
							interested in full stack development (web + mobile),
							data engineering, machine learning, and artificial
							intelligence. south jersey, vietnamese,
							photographer, and music enjoyer
						</p>
					</div>
				);
			case "experience":
				return (
					<div className="space-y-6">
						<h2 className="text-4xl font-titles bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
							experience.
						</h2>
						<div className="grid relative">
							{EXP_LIST.reverse().map((experience) => (
								<div key={experience.id}>
									<a
										href={experience.experience_link}
										target="_blank"
									>
										<div className="relative border-l-white border-l-2">
											<div className="absolute left-[-9px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-white shadow" />
											<div className="p-6 ease-[cubic-bezier(0.42,0,0.58,1)] hover:scale-[0.98]">
												<p className="text-sm">
													{experience.experience_date}
												</p>
												<h1 className="text-4xl font-titles mb-2">
													{experience.experience_name}
												</h1>
												<p className="text-sm">
													[{" "}
													{experience.experience_desc}{" "}
													]
												</p>
											</div>
										</div>
									</a>
								</div>
							))}
							<h2 className="text-4xl font-titles bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent my-5">
								projects.
							</h2>
							<div className="grid relative">
								{PROJ_LIST.reverse().map((project) => (
									<div key={project.id}>
										<a
											key={project.id}
											href={project.project_link}
											target="_blank"
										>
											<div className="relative border-l-white border-l-2">
												<div className="absolute left-[-9px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-white shadow" />
												<div className="p-6 ease-[cubic-bezier(0.42,0,0.58,1)] hover:scale-[0.98]">
													<p className="text-sm">
														{project.project_date}
													</p>
													<h1 className="text-4xl font-titles mb-2">
														{project.project_name}
													</h1>
													<p className="text-sm">
														[ {project.project_desc}{" "}
														]
													</p>
												</div>
											</div>
										</a>
									</div>
								))}
							</div>
						</div>
					</div>
				);
			case "contact":
				return (
					<div className="space-y-6">
						<h2 className="text-4xl font-titles bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
							contact me.
						</h2>
						<div className="space-y-4">
							<div className="flex items-center space-x-4">
								<span className="text-2xl">📧</span>
								<span className="text-lg">
									johnpaul.nguyen@rutgers.edu
								</span>
							</div>
							<div className="flex items-center space-x-4">
								<span className="text-2xl">🔗</span>
								<span className="text-lg">
									linkedin.com/in/jpnguyennn
								</span>
							</div>
							<div className="flex items-center space-x-4">
								<span className="text-2xl">🐙</span>
								<span className="text-lg">
									github.com/jpnguyennn
								</span>
							</div>
						</div>
						<div className="mt-8">
							<a
								href="/resume.pdf"
								target="_blank"
								className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
							>
								download resume
							</a>
						</div>
					</div>
				);
			default:
				return null;
		}
	};
	return (
		<div className="h-screen overflow-hidden p-10">
			<div className="relative h-full overflow-hidden text-white border-white border-4 rounded-lg">
				{/* Main Container */}
				<div
					className={`transition-all duration-1000 ease-out min-h-[calc(100vh-40px)] ${
						activeSection
							? "flex items-start justify-start p-8 pr-0"
							: "flex items-center justify-center"
					}`}
				>
					{/* Name Section */}
					<div
						className={`text-center transition-all duration-1000 ease-out transform-gpu ${
							activeSection
								? "scale-50 origin-top-left top-0 left-0 [writing-mode:vertical-rl] text-orientation-mixed"
								: "scale-100"
						}`}
					>
						<h1 className="text-6xl font-titles md:text-8xl mb-4 text-white text-transparent animate-pulse">
							JOHNPAUL NGUYEN
						</h1>
						<p
							className={`text-xl md:text-2xl font-light mb-8 transition-opacity duration-200 ${
								activeSection
									? "hidden opacity-0"
									: "opacity-100"
							}`}
						>
							computer science + mathematics student at rutgers
							university
						</p>

						{/* Navigation Links */}
						<div
							className={`flex flex-wrap gap-4 justify-center transition-all duration-200 ${
								activeSection
									? "hidden opacity-0 pointer-events-none"
									: "opacity-100"
							}`}
						>
							{NAV_LIST.map((link) => (
								<button
									key={link.id}
									onClick={() => handleLinkClick(link.id)}
									className="group px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
								>
									<span className="flex items-center space-x-2">
										<span className="font-medium">
											{link.text}
										</span>
									</span>
								</button>
							))}
						</div>
					</div>

					{/* Content Section */}
					{activeSection && (
						<div className="flex-1 ml-0 md:ml-64 transition-all duration-1000 ease-out">
							<div className="animate-in slide-in-from-right duration-800">
								<button
									onClick={handleBack}
									className="mb-6 flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300"
								>
									<span className="text-xl">←</span>
									<span>Back to Home</span>
								</button>
								{content()}
							</div>
						</div>
					)}
				</div>

				{/* Background Animation */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
