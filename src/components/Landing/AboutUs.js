import React from 'react'
import Aboutus from "../../assets/Aboutus.png";
import "../Styles/AboutUs.css";
import supportimg from "../../assets/support.png";
import eduimg from "../../assets/Edu.png";
import networkimg from "../../assets/network.png";

function AboutUs() {
    return (
        <section className="aboutus-section container" id='Aboutus'>
            <div className="row align-items-center g-0">

                <div className="col-lg-6 aboutus-text">
                    <h6 className="aboutus-subheading">ABOUT KGF</h6>

                    <p className="aboutus-intro-text mb-3">
                        <span className='about-span'>Kamma Global Federation (KGF)</span> stands as a symbol of unity, strength, and progress. It serves as a global platform connecting Kammas, Kammardukas, and Chowdarys, fostering a shared vision of cultural pride, professional excellence, entrepreneurship, and social responsibility.
                    </p>

                    <p className="aboutus-intro-text">
                        KGF is more than an organization—it is a movement that brings together people from diverse backgrounds under one shared identity, encouraging mutual support, innovation, and collective advancement. By building strong networks and meaningful relationships, we create opportunities that benefit individuals, families, and the community as a whole.
                    </p>
                </div>

                <div className="col-lg-6">
                    <div className="aboutus-card">
                        <img src={Aboutus} alt="About Group" className="w-100" />
                    </div>
                </div>

            </div>

            <div className="text-center mt-5">

                <h2>
                    <span className="sponserheading">WHY SPONSERSHIP KGF</span>
                </h2>

                <p className="sponserpara">
                    By sponsoring KGF events and initiatives, you're not just promoting your brand – you're investing in community development and cultural preservation.
                </p>

            </div>

            <div className="row mt-4 mb-5">

                <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                    <div className="aboutus-spon-card">

                        <div className="spon-icon">
                            <img src={supportimg} alt="Community Icon" />
                        </div>

                        <div className="card-content">
                            <p>
                                Your contribution empowers us to build stronger connections, create impactful initiatives, and uplift individuals across every level of society. Together, we can strengthen our roots at the local level, establish a powerful presence across the nation, and extend our influence worldwide.
                            </p>
                        </div>

                    </div>
                </div>

             
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                    <div className="aboutus-spon-card">

                        <div className="spon-icon">
                            <img src={eduimg} alt="Community Icon" />
                        </div>

                        <div className="card-content">
                            <p>
                                Engage with a vibrant network of innovators, industry experts, and visionary leaders who are shaping the future across various domains. Through meaningful interactions, collaborations, and knowledge sharing, you can establish valuable relationships that foster growth and long-term success.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                    <div className="aboutus-spon-card">

                        <div className="spon-icon">
                            <img src={networkimg} alt="Community Icon" />
                        </div>

                        <div className="card-content">
                            <p>
                                Support education, career growth, and opportunities for young talent in the community. We nurture the next generation through education, mentorship, and guidance, offering scholarships, skill programs, and training to empower individuals to reach their full potential successfully.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default AboutUs;