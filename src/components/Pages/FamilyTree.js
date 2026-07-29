import React from "react";
import "../Styles/family.css";

import Ntrimg from "../../assets/ntr.png";
import kakakaniimg from "../../assets/kakani.png";
import ranirudramadevi from "../../assets/rudrammadevi.png";
import ragavendraimg from "../../assets/ragavendra.png";
import kallukuriimg from "../../assets/kalluri.png";
import tripuraneniimg from "../../assets/tripuraneni.png";
import muniswamyimg from "../../assets/muniswamy.png";
import rajeswaraoimg from "../../assets/rajeswarao.png";
import krishnaimg from "../../assets/krishna.png";
import shobhanbabuimg from "../../assets/shobhan.png";


function FamilyTree() {
  const familyData = [
    {
      img: Ntrimg,
      name: "Shri Nandamuri Taraka Rama Rao",
      year: "1923-1996",
      link: "https://en.wikipedia.org/wiki/Nandamuri_Taraka_Rama_Rao",
    },
    {
      img: kakakaniimg,
      name: "Shri Kakani Venkata Ratnam",
      year: "1900-1972",
      link: "https://en.wikipedia.org/wiki/Kakani_Venkata_Ratnam",
    },
    {
      img: ranirudramadevi,
      name: "Rani Rudrama Devi",
      year: "1245-1289",
      link: "https://en.wikipedia.org/wiki/Rani_Rudrama_Devi",
    },
    {
      img: ragavendraimg,
      name: "Shri Edupuganti Raghavendra Rao",
      year: "1890-1942",
      link: "https://en.wikipedia.org/wiki/E._Raghavendra_Rao",
    },
    {
      img: kallukuriimg,
      name: "Shri Kalluri Chandramouli",
      year: "1898-1992",
      link: "https://en.wikipedia.org/wiki/Kalluri_Chandramouli",
    },
    {
      img: tripuraneniimg,
      name: "Shri Tripuraneni Ramaswamy",
      year: "1887-1943",
      link: "https://en.wikipedia.org/wiki/Tripuraneni_Ramaswamy_Choudary",
    },
    {
      img: muniswamyimg,
      name: "Shri Bollineni Muniswami Naidu",
      year: "1895-1935",
      link: "https://en.wikipedia.org/wiki/B._Munuswamy_Naidu",
    },
    {
      img: rajeswaraoimg,
      name: "Shri Chandra Rajeswara Rao",
      year: "1915-1994",
      link: "https://en.wikipedia.org/wiki/Chandra_Rajeswara_Rao",
    },
    {
      img: krishnaimg,
      name: "Ghattamaneni Krishna",
      year: "1943-2022",
      link: "https://en.wikipedia.org/wiki/Ghattamaneni_Krishna",
    },
    {
      img: shobhanbabuimg,
      name: "Uppu Sobhan Babu",
      year: "1937-2008",
      link: "https://en.wikipedia.org/wiki/Sobhan_Babu",

    },
  ];

  const firstRow = familyData.slice(0, 5);
  const secondRow = familyData.slice(5, 10);

  const renderCards = (data) =>
    data.map((item, index) => (
      <figure className="family-card" key={index}>
        <div className="image-wrapper">
            <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={item.img} alt={item.name} className="img-fluid" />
      </a>
                 </div>

        <figcaption>
          {item.name}
          <p>{item.year}</p>
        </figcaption>
      </figure>
    ));

  return (
    <section className="family-tree-sec">
      <div className="container">
        <h3 className="family-title">Family Tree</h3>

      
        <div className="scroll-row left-scroll">
          <div className="scroll-track">
            {renderCards(firstRow)}
            {renderCards(firstRow)}
          </div>
        </div>

        <div className="scroll-row right-scroll">
          <div className="scroll-track">
            {renderCards(secondRow)}
            {renderCards(secondRow)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamilyTree;