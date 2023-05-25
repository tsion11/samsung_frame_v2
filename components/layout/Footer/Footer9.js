import Link from "next/link";
import * as Icon from "react-feather";
export default function Footer9() {
  return (
    <>
      <footer className="footer -type-4 layout-pb-sm bg-dark-11">
        <div className="container">
          <div className="row justify-between y-gap-48">
            <div className="col-lg-7 col-md-6 order-lg-1 order-2">
              {/* <form action="POST">
                <div className="form-group d-flex">
                  <input
                    className="py-24 px-24 w-1/1 rounded-8 bg-light-4"
                    placeholder="Your ass"
                    type="email"
                  />
                  <button
                    className="button py-24 px-24 -orange text-white rounded-8 ml-20"
                    type="submit"
                  >
                    <Icon.ArrowRight className="icon size-20" />
                  </button>
                </div>
              </form> */}
              <div className="row y-gap-48 pt-48 justify-between">
                <div className="col-lg-6 col-sm-6">
                  <div className="footer__item">
                    <h3 className="text-white text-xl lh-1 fw-600">
                      Samsung Frame Art Styles
                    </h3>
                    <div className="footer__content y-gap-10 mt-40">
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href={{
                            pathname: "/art",
                            query: { category: "all" },
                          }}
                        >
                          All Art
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href={{
                            pathname: "/art",
                            query: { category: 0 },
                          }}
                        >
                          Abstract
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href={{
                            pathname: "/art",
                            query: { category: 1 },
                          }}
                        >
                          Photography
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href={{
                            pathname: "/art",
                            query: { category: 2 },
                          }}
                        >
                          Nature
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href={{
                            pathname: "/art",
                            query: { category: 3 },
                          }}
                        >
                          AI Art
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href={{
                            pathname: "/art",
                            query: { category: 4 },
                          }}
                        >
                          Classics
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href={{
                            pathname: "/art",
                            query: { category: 5 },
                          }}
                        >
                          African Art
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="footer__item">
                    {/* <h3 className="footer__title text-white text-xl lh-1 fw-600">
                      Legal
                    </h3>
                    <div className="footer__content y-gap-10 mt-40"> */}
                    {/* <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href="terms"
                        >
                          Twitter
                        </Link>
                      </div> */}
                    {/* <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href="terms"
                        >
                          Terms &amp; conditions
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href="terms"
                        >
                          Privacy policy
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link
                          className="decoration-none text-white"
                          href="terms"
                        >
                          Coolie policy
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-2 col-sm-8">
                  {/* <div className="footer__item">
                    <h3 className="footer__title text-white text-xl lh-1 fw-600">
                      Social
                    </h3>
                    <div className="footer__content y-gap-10 mt-40"> */}
                  {/* <div className="footer__content__item">
                        <Link className="decoration-none text-white" href="#">
                          Linkedin
                        </Link>
                      </div> */}
                  {/* <div className="footer__content__item">
                        <Link className="decoration-none text-white" href="#">
                          Twitter
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link className="decoration-none text-white" href="#">
                          Facebook
                        </Link>
                      </div>
                      <div className="footer__content__item">
                        <Link className="decoration-none text-white" href="#">
                          Instagram
                        </Link>
                      </div> */}
                  {/* <div className="footer__content__item">
                        <Link className="decoration-none text-white" href="#">
                          Pinterest
                        </Link>
                      </div> */}
                  {/* </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-2 order-1">
              <div>
                <div className="footer__logo text-white mt-30">
                  <img src="/img/general/logo_white.png" alt="logo" />
                </div>
                <p className="text-white mt-20">
                  Elevate your Samsung Frame display with our captivating art
                  collection. Browse now and discover the perfect masterpiece to
                  enrich your viewing experience.
                </p>
                {/* <div className="y-gap-32 pt-30">
                  <div>
                    <div className="text-white text-lg opac-50">
                      Toll Free Customer Care
                    </div>
                    <div className="text-white text-xl fw-600">
                      +(1) 123 456 7890
                    </div>
                  </div>
                  <div>
                    <div className="text-white text-lg opac-50">
                      Need live support?
                    </div>
                    <div className="text-white text-xl fw-600">
                      hi@sassio.com
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row mt-60 pt-48 justify-center mb-10">
            <div className="col-auto">
              <div className="text-white">
                <Link
                  className="decoration-none text-white"
                  href="https://redchip.art/"
                  target="_blank"
                >
                  NFT Artist Database
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-white">
                <p className="text-white">|</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-white">
                <Link
                  className="decoration-none text-white"
                  href="https://metacryptopia.io/"
                  target="_blank"
                >
                  Crypto News
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-white">
                <p className="text-white">|</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-white">
                <Link
                  className="decoration-none text-white"
                  href="https://makenftreceipt.com/"
                  target="_blank"
                >
                  NFT Receipt Generator
                </Link>
              </div>
            </div>
          </div>
          <div className="row y-gap-48 justify-center ">
            <div className="col-auto">
              <div className="text-white">
                <Link
                  className="decoration-none text-white"
                  href="https://mastr.ai/"
                  target="_blank"
                >
                  AI Certification Courses
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-white">
                <p className="text-white">|</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-white">
                <Link
                  className="decoration-none text-white"
                  href="https://dij.art/digital-art-curation-advising.html"
                  target="_blank"
                >
                  Digital Art Curation
                </Link>
              </div>
            </div>
            {/* <div className="col-auto">
              <div className="text-white">
                <p className="text-white">|</p>
              </div>
            </div> */}
            {/* <div className="col-auto">
              <div className="text-white">
                <Link className="decoration-none text-white" href="/">
                  NFT Receipt Generator
                </Link>
              </div>
            </div> */}
          </div>
          <div className="row justify-center py-10 border-top-light mt-10">
            <div className="col-auto">
              <div className="footer__bottom_text text-white">
                © Copyright 2023. Samsung Frame Art
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
