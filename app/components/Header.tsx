import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="/">
            KG
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/about/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/about/culture">
                      Culture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/about/religion">
                      Religion
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rituals
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Monjaher Taehar
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Gada Bhatta
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Khyachi Mavas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Shishur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Gora Trai
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Kaw Punim
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Teela Aetham
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Zetha Aetham
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Sharavana Punim
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Vyatha Truvah
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Hara Satam
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Pan Dyun
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Divagone
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Posh Puza
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Sonder
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Navreh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Sonth
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Zang Trai
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Shivaratri
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Jaat Karma
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Agnivatri List
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Divgon (Boy)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Divgon (Girl)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Lagan (Boy)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Lagan (Girl)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Kahnetar
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Navgrah Path
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Yagnopaveet
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Hawan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      GrahPravesh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Shank Pratishtha
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Muhurats
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Saath Ratun
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      Yagnopaveet
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ring Ceremony
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Vivaah/Marriage
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Grih Pravesh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Choodakarma/Mundan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Jaat Karma
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Divakshir
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Buting House/Land
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Shishur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Deepdan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Pandun
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Anna Prashan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Anna Prashan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      New Vechile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      New Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Sarvarth Sidhi Yog
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/matrimonials">
                  Matrimonials
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hindu Calender
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Festival/Fasting Days
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      Chaitra Shukla Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Vaishakh Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Vaishakh Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Jyeshtha Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Jyeshtha Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ashadha Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ashadha Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Shravan Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Shravan Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Bhadra Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Bhadra Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ashwin Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ashwin Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Kartik Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Kartik Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Maarg Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Maarg Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Paush Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Paush Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Maagh Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Maagh Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Phalgun Krishna Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Phalgun Shula Paksha
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Chaitra Krishna Paksha
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/janmapatrika">
                  Janmapatrika
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shraadh
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      About Shraadh
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="#">
                      Antim Sanskaar List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      10th Day
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Lagan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      10th & 12th Day
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Shadmos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Varshik (Varhvar)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Deepdan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Yearly Shraadh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Kumbh Mantra
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Pitra Tarpan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Pitra Paksha
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Palmistry
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Publications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
