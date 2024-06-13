import wave from "/assets/wave.svg";
import scribbleTitle from "/assets/portfolio_icons/scribble_title.svg";
import smiley from "/assets/portfolio_icons/smiley_title.svg";
import eye from "/assets/portfolio_icons/eye_title.svg";
import head from "/assets/portfolio_icons/head.svg";
import star from "/assets/portfolio_icons/star.svg";
import eye2 from "/assets/portfolio_icons/eye.svg";
import sparkle from "/assets/portfolio_icons/sparkle.svg";
import scribble from "/assets/portfolio_icons/scribble.svg";
import glaggle from "/assets/portfolio_icons/glaggle.svg";
import boom from "/assets/portfolio_icons/boom.svg";
import pen_icon from "/assets/home_icons/pen_icon.svg";
import paintbrush_icon from "/assets/paintbrush.svg";

import ScrollingImage from "../components/ScrollingImage";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

interface linkProps {
	icon: string;
	title: string;
	path: string;
}

export default function PortfolioPage() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const navAnim: Variants = {
		start: { backgroundColor: "#101010", borderWidth: "2px", borderColor: "#FFFFFF4E" },
		end: { backgroundColor: "#FFF813", borderWidth: "2px", borderColor: "#FFF813" },
	};

	const titleAnim: Variants = {
		start: { filter: "" },
		end: { filter: "brightness(0)" },
	};

	const pathAnim: Variants = {
		start: { pathLength: 0 },
		end: {
			pathLength: 1,
			transition: { repeat: Infinity, repeatType: "mirror", duration: 10 },
		},
	};

	function PortfolioLink({ icon, title, path }: linkProps) {
		return (
			<motion.a
				initial={pathname === path ? "end" : "start"}
				whileHover="end"
				variants={navAnim}
				transition={{
					duration: 0.2,
				}}
				href="#images"
				onClick={(_e) => navigate(path)}
				className="flex flex-row items-center py-4 pl-8 text-4xl text-white rounded-lg w-96 shadow-yellow hover:shadow-sm"
			>
				<motion.img variants={titleAnim} src={icon} className="block h-10" alt="" />
				<motion.h1 className="flex-grow text-center" variants={titleAnim}>
					{title}
				</motion.h1>
			</motion.a>
		);
	}

	return (
		<>
			<section
				id="banner"
				className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden"
			>
				<div className="flex items-center justify-center h-fit w-fit">
					<div className="absolute flex items-center justify-center text-black font-page-heading">
						<h1 className="text-[25vw] md:text-[18rem]">portfolio</h1>
						<img src={scribbleTitle} className="absolute mt-5 h-24 pr-[33rem]" alt="" />
						<img
							src={smiley}
							className="absolute left-1/2 ml-[6.5rem] mt-6 h-[4.5rem]"
							alt=""
						/>
						<img src={eye} className="absolute ml-[51rem] mt-6 h-16" alt="" />
					</div>
					<div className="absolute -ml-72 mt-12 inline-flex h-12 -translate-x-24 translate-y-20 scale-90 gap-2 *:h-auto *:max-w-12 *:animate-float">
						<img src={head} style={{ "--delay": "200ms" } as React.CSSProperties} />
						<img
							src={glaggle}
							style={{ "--delay": "400ms" } as React.CSSProperties}
							alt=""
						/>
						<img
							src={boom}
							style={{ "--delay": "600ms" } as React.CSSProperties}
							alt=""
						/>
						<img
							src={eye2}
							style={{ "--delay": "800ms" } as React.CSSProperties}
							alt=""
						/>
						<img
							src={star}
							style={{ "--delay": "1000ms" } as React.CSSProperties}
							alt=""
						/>
						<img
							src={scribble}
							style={{ "--delay": "1200ms" } as React.CSSProperties}
							alt=""
						/>
						<img
							src={sparkle}
							style={{ "--delay": "1400ms" } as React.CSSProperties}
							alt=""
						/>
					</div>
				</div>
				<div className="absolute w-full h-full overflow-hidden pointer-events-none select-none">
					<svg className="absolute top-0 left-0 w-full h-full">
						<motion.rect
							x={-150}
							y={700}
							rx={80}
							width={400}
							height={400}
							stroke="#000000"
							strokeWidth={90}
							fillOpacity={0}
							variants={pathAnim}
							initial="start"
							animate="end"
						/>
						<motion.rect
							x={-100}
							y={-275}
							rx={80}
							width={700}
							height={600}
							stroke="#000000"
							strokeWidth={90}
							fillOpacity={0}
							variants={pathAnim}
							initial="start"
							animate="end"
						/>
						<motion.rect
							x={1600}
							y={-250}
							rx={80}
							width={400}
							height={700}
							stroke="#000000"
							strokeWidth={90}
							fillOpacity={0}
							variants={pathAnim}
							initial="start"
							animate="end"
						/>
						<motion.rect
							transform="rotate(90 1400 850)"
							x={1300}
							y={150}
							rx={80}
							width={400}
							height={700}
							stroke="#000000"
							strokeWidth={90}
							fillOpacity={0}
							variants={pathAnim}
							initial="start"
							animate="end"
						/>
					</svg>
				</div>
				<div className="absolute bottom-0 z-[99] scale-150 md:scale-100">
					<ScrollingImage ltr={true} width="full">
						<img src={wave} alt="" className="object-cover w-full" />
					</ScrollingImage>
				</div>
			</section>
			<section className="flex flex-col items-center gap-2 bg-gradient-to-b from-[#0A0A00] via-[#191919] to-[#0A0A00] pt-8">
				<h2 className="text-2xl">always experimenting with new media and styles!</h2>
				<div className="flex flex-row gap-4 rounded-full cursor-pointer">
					<PortfolioLink icon={pen_icon} title="graphic design" path="/portfolio/gfx" />
					<PortfolioLink icon={paintbrush_icon} title="ui design" path="/portfolio/ui" />
				</div>
				<Outlet />
			</section>
		</>
	);
}
