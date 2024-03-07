import "./Head.css";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="logo">
          <img
            src="https://img.freepik.com/premium-vector/colorful-bird-illustration-gradient-abstract_343694-1740.jpg"
            alt="logo"
          ></img>
        </div>
        <div className="content">
          <ul>
            <li>
             Home
            </li>
            <li>
              About
            </li>
            <li>
             Services
            </li>
            <li>
             Contact
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Head;
