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
                    <Link
                      className="dropdown-item"
                      href="/rituals/monjhaer-taher"
                    >
                      Monjaher Taehar
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/gada-bhatta">
                      Gada Bhatta
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/rituals/khyachi-mavas"
                    >
                      Khyachi Mavas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/shishur">
                      Shishur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/gora-trai">
                      Gora Trai
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/kaw-punim">
                      Kaw Punim
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/rituals/teela-aetham"
                    >
                      Teela Aetham
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/rituals/zetha-aetham"
                    >
                      Zetha Aetham
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/rituals/shravana-punim"
                    >
                      Sharavana Punim
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/rituals/vyatha-truvah"
                    >
                      Vyatha Truvah
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/hara-satam">
                      Hara Satam
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/pan-dyun">
                      Pan Dyun
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/diyagone">
                      Divagone
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/posh-puza">
                      Posh Puza
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/sonder">
                      Sonder
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/navreh">
                      Navreh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/sonth">
                      Sonth
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/zang-trai">
                      Zang Trai
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/shivaratri">
                      Shivaratri
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/rituals/jaat-karma">
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
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/divgon-boy.pdf"
                    >
                      Divgon (Boy)
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/divgon-girl.pdf"
                    >
                      Divgon (Girl)
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/divgon-boy.pdf"
                    >
                      Lagan (Boy)
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/divgon-girl.pdf"
                    >
                      Lagan (Girl)
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/kahnetar.pdf"
                    >
                      Kahnetar
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/navgrah.pdf"
                    >
                      Navgrah Path
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/yognopaveet.pdf"
                    >
                      Yagnopaveet
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/hawan.pdf"
                    >
                      Hawan
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/grahpravesh.pdf"
                    >
                      GrahPravesh
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/agnivatri-list/shank.pdf"
                    >
                      Shank Pratishtha
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
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/shraadh.pdf"
                    >
                      About Shraadh
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/Antim_Sanskar.pdf"
                    >
                      Antim Sanskaar List
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/10.pdf"
                    >
                      10th Day
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/11.pdf"
                    >
                      10th & 12th Day
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/shadmos.pdf"
                    >
                      Shadmos
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/varshik.pdf"
                    >
                      Varshik (Varhvar)
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/deepdan.pdf"
                    >
                      Deepdan
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/Yearly_Shraad.pdf"
                    >
                      Yearly Shraadh
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/Kumbh_Mantra.pdf"
                    >
                      Kumbh Mantra
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/Pitra_Tarpan.pdf"
                    >
                      Pitra Tarpan
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item"
                      href="/shraadh/Pitra_Paksha.pdf"
                    >
                      Pitra Paksha
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/palmistry">
                  Palmistry
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
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
