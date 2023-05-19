import Link from "next/link";
import * as Icon from "react-feather";

export default function FeatureNine() {
  return (
    <>
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-48 justify-between items-center">
            <div className="col-xl-7 col-lg-5">
              <div className="atropos -no-shadow js-atropos">
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="atropos-inner">
                      <div className="image-group -type-2">
                        <img
                          data-atropos-offset={0}
                          src="/img/about-1/about/pattern.png"
                          alt="image"
                        />
                        <img
                          data-atropos-offset={5}
                          className="shadow-card"
                          src="/img/about-5/about/images1.png"
                          alt="image"
                        />
                        <img
                          data-atropos-offset={5}
                          className="shadow-card"
                          src="/img/about-5/about/images2.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="wow animate__animated animate__fadeIn">
                <div className="sectionHeading ">
                  <h2 className="sectionHeading__title">Samsung Frame Tv</h2>
                  <p className="sectionHeading__text mt-20">
                    Our art for Samsung The Frame comes as a convenient digital
                    download. Unlike other sellers of art for Samsung's The
                    Frame TV, we provide four files for your ultimate
                    convenience.No matter the type of Samsung The Frame TV -
                    we've got you.
                  </p>
                </div>
              </div>
              <div className="mt-24 y-gap-20">
                <div className="d-flex items-center">
                  <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                    <Icon.Check className="icon size-14 text-black" />
                  </div>
                  <h5 className="text-lg fw-600">Four different sizes</h5>
                </div>
                <div className="d-flex items-center">
                  <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                    <Icon.Check className="icon size-14 text-black" />
                  </div>
                  <h5 className="text-lg fw-600">Easy download</h5>
                </div>
                <div className="d-flex items-center">
                  <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                    <Icon.Check className="icon size-14 text-black" />
                  </div>
                  <h5 className="text-lg fw-600">Detailed instructions</h5>
                </div>
                <div className="d-flex items-center">
                  <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                    <Icon.Check className="icon size-14 text-black" />
                  </div>
                  <h5 className="text-lg fw-600">Fine-quality artistry</h5>
                </div>
              </div>
              <div className="wow animate__animated animate__fadeIn">
                <Link
                  href="/art"
                  className="button -md -dark text-white rounded-8 mt-40"
                >
                  View Frame Art
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
