import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Blogsmain from "../../Components/Blogsmain/Blogsmain";
 
import { Button, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <About />
      <Container></Container>
      <Blogsmain/>

      <Subscribe />
    </>
  );
}
