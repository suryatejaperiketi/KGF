import React, { useEffect, useRef, useState } from "react";
import "./MemberBenefits.css";

const benefits = [
  { icon: "🏥", label: "Hospital Bill Discount", tag: "Health" },
  { icon: "👥", label: "Community Club Membership", tag: "Community" },
  { icon: "🎓", label: "College Fee Discount", tag: "Education" },
  { icon: "🎟️", label: "KGF Free Event Pass", tag: "Events" },
  { icon: "💼", label: "Job Referral", tag: "Career" },
  { icon: "❤️", label: "Blood Donors", tag: "Welfare" },
  { icon: "📈", label: "Career Counselling", tag: "Career" },
  { icon: "🌾", label: "Agriculture Discount", tag: "Agriculture" },
  { icon: "🌍", label: "Abroad Education", tag: "Global" },
  { icon: "🏠", label: "Housing Support", tag: "Housing" },
];
                                                
function MemberBenifits() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mb-section" id="member-benefits" ref={sectionRef}>
    
      <div className="mb-header">
        <div className="mb-kicker">
          <span className="mb-kicker-dot" />
          Members Only
        </div>

      </div>
        <h2 className="member-title mb-4">
    <span>Membership Benefits</span>
  </h2>

     
      <div className="container">
        <div className="mb-bento">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`mb-card mb-card--${(i % 10) + 1} ${
                visible ? "mb-card--visible" : ""
              }`}
              style={{ animationDelay: `${i * 65}ms` }}>
              <div className="mb-icon">{item.icon}</div>

              <p className="mb-label">{item.label}</p>

              <span className="mb-tag">{item.tag}</span>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}

export default MemberBenifits;