import { Link } from "@nextui-org/react"
import { SiHomeassistant } from "react-icons/si";
import { FaCuttlefish } from "react-icons/fa6";

export const Footer = () => (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
            aria-hidden
            color="foreground"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            rel="noopener noreferrer"
            href="/"
            >
                <SiHomeassistant />
                <p>Home</p>
        </Link>
        <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/about"
            rel="noopener noreferrer"
            color="secondary"
        >
            <FaCuttlefish color="purple"/>
            About Us
        </Link>
    </footer>
)