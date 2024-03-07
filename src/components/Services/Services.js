import './Services.css'


const Services = () => {
  const services = [
    {
      name: "Audit",
      subServices: ["Statutory Audit", "Internal Audit", "Tax Audit"],
    },
    {
      name: "Taxation",
      subServices: ["Income Tax", "GST", "Corporate Tax"],
    },
    {
      name: "Consultancy",
      subServices: [
        "Financial Advisory",
        "Business Planning",
        "Risk Management",
      ],
    },
    {
      name: "Secretarial Works",
      subServices: [
        "Company Incorporation",
        "ROC Compliances",
        "Board Meetings",
      ],
    },
    {
      name: "Accounting",
      subServices: [
        "Bookkeeping",
        "Financial Statements",
        "Payroll Processing",
      ],
    },
    {
      name: "Valuation",
      subServices: ["Business Valuation", "Asset Valuation", "Stock Valuation"],
    },
    {
      name: "Registration",
      subServices: [
        "GST Registration",
        "PAN/TAN Registration",
        "MSME Registration",
      ],
    },
  ];

  return (
    <>
      <div className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.name}</h3>
              <ul>
                {service.subServices.map((subService, subIndex) => (
                  <li key={subIndex}>{subService}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Services;
