import ActionButton from "../../components/actionButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
	const headingRef = useRef<HTMLHeadingElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);
	const buttonsRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const headingText = new SplitType(headingRef.current!, {
			types: "chars,words",
			tagName: "span",
		});

		const paragraphText = new SplitType(paragraphRef.current!, {
			types: "words",
			tagName: "span",
		});
		const tl = gsap.timeline({
			defaults: { ease: "power4.out" },
		});
		gsap.set(containerRef.current, { visibility: "visible" });
		gsap.set(headingText.chars, {
			opacity: 0,
			y: 100,
			rotateX: -90,
		});
		gsap.set(paragraphText.words, {
			opacity: 0,
			y: 50,
		});
		gsap.set(buttonsRef.current, {
			opacity: 0,
			scale: 0.8,
		});
		tl.to(headingText.chars, {
			opacity: 1,
			y: 0,
			rotateX: 0,
			duration: 1.2,
			stagger: {
				amount: 1,
				from: "random",
			},
		})
			.to(headingText.words, {
				duration: 0.6,
				scale: 1.1,
				stagger: {
					amount: 0.4,
					from: "start",
				},
				ease: "power2.out",
			})
			.to(
				headingText.words,
				{
					duration: 0.6,
					scale: 1,
					stagger: {
						amount: 0.4,
						from: "start",
					},
					ease: "power2.in",
				},
				"-=0.4"
			)
			.to(
				paragraphText.words,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: {
						amount: 0.3,
						from: "start",
					},
					ease: "back.out(1.7)",
				},
				"-=0.4"
			)
			.to(
				buttonsRef.current,
				{
					opacity: 1,
					scale: 1,
					duration: 1,
					ease: "elastic.out(1, 0.3)",
				},
				"-=0.2"
			);
		gsap.to(headingText.words, {
			y: "random(-8,8)",
			rotation: "random(-5,5)",
			duration: "random(2,3)",
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
			stagger: {
				amount: 1.5,
				from: "random",
			},
		});
		const buttons = buttonsRef.current?.children;
		if (buttons) {
			Array.from(buttons).forEach((button, index) => {
				button.addEventListener("mouseenter", () => {
					gsap.to(button, {
						scale: 1.1,
						duration: 0.3,
						ease: "back.out(2)",
						backgroundColor: index === 0 ? "#ff3366" : "#2a2a2a",
					});
				});

				button.addEventListener("mouseleave", () => {
					gsap.to(button, {
						scale: 1,
						duration: 0.3,
						ease: "power2.out",
						backgroundColor: "transparent",
					});
				});
			});
		}
		return () => {
			headingText.revert();
			paragraphText.revert();
		};
	}, []);

	return (
		<div ref={containerRef} className="visibility-hidden">
			<h1
				ref={headingRef}
				className="text-white font-semibold text-[50px] mt-[100px] leading-[60px]"
			>
				EXPLORE, CREATE AND <br /> SELL YOUR NFT'S ON <br />
				SHIHAMI
			</h1>
			<p ref={paragraphRef} className="mt-8 font-thin">
				Shihami is the World's First And Largest NFT/Avatar Marketplace
			</p>
			<div ref={buttonsRef} className="flex mt-8">
				<ActionButton size="large" className="mr-4">
					Explore More
				</ActionButton>
				<ActionButton size="large" variant="secondary">
					Cancel
				</ActionButton>
			</div>
		</div>
	);
}
