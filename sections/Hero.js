import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
//import webvideo from "../assets/images/bannerVideo.mp4"
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {/* <div className="video" style={{position:"absolute",zIndex:-1,top:0,left:0,width:"100%",height:"100vh",opacity:"0.2"}}>
             <iframe style={{width:"100vw",height:"100vh"}} src="https://www.youtube.com/embed/VCPGMjCW0is?si=ruv2iWigpxY6YRxA&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> */}
          {/* <video autoPlay loop muted>
              <source src={webvideo} type="video/mp4"/>
          </video> */}
          <TitleLogo title='SDT' caption='BDCALLING-' className='logobg' />
          <h1 className='hero-title'>Turning Ideas into Code</h1>

          <div className='sub-heading'>
            <TitleSm title='WEBSITES DEVELOPMENT' /> <span>.</span>
            <TitleSm title='UI/UX' /> <span>.</span>
            <TitleSm title='APP DEVELOPMENT' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
