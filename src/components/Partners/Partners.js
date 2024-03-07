import './Partners.css'

const Partners = () =>{
    const partners = [
        { name: 'CA. ARUN KUMAR', image: 'partner1.jpg', role: 'Managing Partner',content:'Leader' },
        { name: 'CA. RANDHIR SINGH', image: 'partner2.jpg', role: 'Partner',content:'' },
        { name: 'CA. AAKRITI CHOUDHARY', image: 'partner3.jpg', role: 'Partner',content:'' },
        { name: 'CA. ANITA AMIT MAURYA', image: 'partner4.jpg', role: 'Partner',content:'' }
      ];

    return(
        <>
            <div className="partners">
      <h2>Our Partners</h2>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.image} alt={partner.name} />
            <h3>{partner.name}</h3>
            <p>{partner.role}</p>
            <p>{partner.content}</p>
          </div>
        ))}
      </div>
    </div>

        </>
    )
}
export default Partners;
