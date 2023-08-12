import React from 'react';
import '../app/globals.css';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12 ">
        <section className="about-container font-sans h-auto w-screen">
          <h1 className=' font-normal text-5xl lg:text-9xl'>About us</h1>
        </section> 
        <section className='flex flex-col md:flex-row w-full gap-6 '>
          
          <div className="flex flex-col rounded-2xl transition-all hover:opacity-70 ">
            <Image width="128px" src="/final me.png" alt="suvan"/>
          </div>
          
            <p className="flex flex-col h-max w-11/12 p-2 m-2 flex-1 text-ellipsis bg-zinc-800 bg-opacity-80 rounded-md ">
              
              Bloggerize, a platform that bridges the realm of curiosity with the world of coding and innovation, offering insights and inspiration to a diverse audience. <br/> <br/>
              The Creator, Suvan GS, is a dedicated second-year student at SRM University, driven by a profound passion for coding and its transformative potential.  <br/> <br/>
              With a strong commitment to the pursuit of knowledge and personal growth, this blog serves as Suvan&apos;s medium for sharing the excitement of coding, intricate problem-solving, and the boundless creativity inherent in the field. <br/> <br/>
              Through meticulously crafted Posts, encompassing personal coding narratives, comprehensive tutorials, exploration of cutting-edge tech trends, and insightful observations, Suvan endeavors to provide value to learners across all stages of their journey. <br/> <br/>
              This blog is an invitation to embark on a voyage of collective learning and collaboration, where the shared experiences of transforming lines of code into impactful solutions foster growth and innovation. <br/> <br/>
              Join Suvan GS on this enlightening odyssey towards expanding horizons within the realm of coding and beyond.
              
            </p>
          
        </section>

      </main>
    </>
  )
}

export default About