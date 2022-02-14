import { VStack } from "@chakra-ui/react";
import ProjectCard from "@components/ProjectCard";

export default function Projects() {
	return (
		<VStack spacing={10} mt={10} justify="flex-start" direction="column">
			<ProjectCard
				image="/portfolio.png"
				altMessage="A screenshot of my portfolio project"
				name="Portfolio"
				link="https://github.com/Hongjia-Liu/nextjs-portfolio"
			/>
		</VStack>
	);
}
