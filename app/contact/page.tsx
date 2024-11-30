export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>Kashmiri Guru Ji. Com</h1>
            <h2>
              Uma Jyotishi Karyalay 80, Scindiya House, Janpath New Delhi -
              110001 INDIA
            </h2>
            <h3>Phone: 9811735947 (Delhi)</h3>
            <h3>Email: pawan@kashmiriguruji.com</h3>
          </div>
          <div className="col-md-8">
            <form action="#">
              <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name*
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                  Email*
                </label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="address" className="col-sm-2 col-form-label">
                  Address*
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="address" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="phone" className="col-sm-2 col-form-label">
                  Phone *
                </label>
                <div className="col-sm-10">
                  <input type="tel" className="form-control" id="phone" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="query" className="col-sm-2 col-form-label">
                  Query*
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="query" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
