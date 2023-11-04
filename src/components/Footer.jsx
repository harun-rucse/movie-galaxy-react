import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Container from "./Container";

const socialLinks = [FaFacebookF, FaInstagram, FaTwitter, FaLinkedin];
const items = ["Terms Of Use", "Privacy Policy", "About", "Blog", "FAQ"];

function Footer() {
  return (
    <div className="bg-[#020c1b] p-6 md:p-8">
      <Container>
        <div className="flex w-full flex-col gap-6 items-center">
          <ul className="flex items-center gap-2 md:gap-8 text-xs md:text-base font-bold text-white">
            {items.map((item, index) => (
              <li
                key={index}
                className="transition hover:text-[var(--pink)] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socialLinks.map((Icon, index) => (
              <span
                key={index}
                className="bg-[#04152d] text-white transition-all hover:text-[var(--pink)] cursor-pointer hover:shadow-[0_0_0.6rem_var(--pink)] w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center"
              >
                <Icon size={18} />
              </span>
            ))}
          </div>

          <span className="text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()} by MovieGalaxy, Inc.
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
