import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/" style={{
      display: "flex",
      flexDirection: "row",
      fontSize: "16pt",
      textDecoration: "none",
      color: "black",
      fontWeight: "bold"
    }}>
      <Image src="/images/logos/logo - maxister.jpg" alt="logo" height={64} width={64} priority />
      <p>MAXISTER</p>
    </LinkStyled>
  );
};

export default Logo;
