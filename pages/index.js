import {
	Heading,
	Flex,
	VStack,
	HStack,
	Icon,
	Text,
	Link,
	Avatar,
} from "@chakra-ui/react";

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<VStack align="center" gap="32px" justify="center">
			<Avatar src="/anime-dom.png" size="2xl" />
			<VStack>
				<Heading as="h1">Hongjia Liu</Heading>
				<Heading size="md" as="h3">
					On my way to be a Developer without Limitations
				</Heading>
			</VStack>
			<Text textAlign="center">
				👋 Hi, 你好! I will tell you what I will do and what I will not
				do. I will not serve that in which I no longer believe, whether
				it call itself my home, my fatherland, or my church: and I will
				try to express myself in some mode of life or art as freely as I
				can and as wholly as I can, using for my defence the only arms I
				allow myself to use — silence, exile, and cunning.
				<br /> Lets connect 👇
			</Text>
			<HStack spacing="20px" justifySelf="center">
				<Link
					href="https://www.twitter.com/Hongjia__Liu"
					target="_blank"
				>
					<Icon color="blue.400" as={FaTwitter} />
				</Link>
				<Link href="https://www.github.com/Hongjia-Liu" target="_blank">
					<Icon color="black" as={FaGithub} />
				</Link>

				<Link
					href="https://www.linkedin.com/in/hongjia-liu"
					target="_blank"
				>
					<Icon color="blue.600" as={FaLinkedin} />
				</Link>
			</HStack>
		</VStack>
	);
}
