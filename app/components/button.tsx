import Link from "next/link";
import Container from "./container/Container";

const Button = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href.split("#")[1];
        window.scrollTo({
            top: document.getElementById(href)?.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <nav className="nowrap fixed bottom-30 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px] ">
                <Container
                    width="40%"
                    height="50px"
                    color="rgba(255, 255, 255, 0.1)"
                    borderRadius={10}
                    top="0px"
                    left="0px"
                    angle={0}
                >
                    <Link
                        href="#home"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Home Section"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4 flex items-center justify-center"> {/* Added styles for centering */}
                            TO DEMO
                        </h4>
                    </Link>
                </Container>
            </nav>
        </div>
    );
};

export default Button;
