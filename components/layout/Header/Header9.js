import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import * as Icon from "react-feather";

export default function Header9({
  navColor,
  logo,
  scroll,
  navToggled,
  navHandle,
}) {
  return (
    <>
      <header
        className={`header -type-2 -sticky-dark js-header ${
          scroll ? "is-sticky" : ""
        }`}
      >
        <div className="header__bar js-header-bar">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex">
                <div className="header__logo d-flex items-center">
                  <Link className="base-logo" href="/">
                    <img
                      className="base-logo-first"
                      src="/img/general/logo.png"
                      alt="logo"
                    />
                    <img
                      className="base-logo-second"
                      src="/img/general/logo.png"
                      alt="logo"
                    />
                  </Link>
                  <Link className="menu-logo" href="/">
                    <img src="/img/general/logo.png" alt="logo" />
                  </Link>
                </div>
                <div className="ml-64">
                  <Menu navColor={navColor} />
                  <MenuMobile navToggled={navToggled} />
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="header__right">
                <div className="md:d-none">
                  <div className="d-flex items-center">
                    {/* <p className="text-white text-lg mr-30">+1 223 38 87</p> */}
                    <Link
                      href="/art"
                      className="button -sm -orange rounded-8 text-white"
                    >
                      Explore Gallery
                    </Link>
                  </div>
                </div>
                <div
                  className="header__menu justify-center items-center relative d-none md:d-flex"
                  onClick={navHandle}
                >
                  <button
                    type="button"
                    className={`d-flex items-center justify-center js-nav-open ${
                      navToggled ? "pointer-events-none opac-0" : "opac-1"
                    }`}
                    onClick={navHandle}
                  >
                    <Icon.Menu className="text-white size-32 str-width-1" />
                  </button>
                  <button
                    type="button"
                    className={`d-flex items-center justify-center absolute-y-center right-0  js-nav-close ${
                      navToggled ? "pointer-events-none opac-1" : "opac-0"
                    }`}
                  >
                    Close
                    <Icon.X className="text-black size-32 str-width-1 ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
