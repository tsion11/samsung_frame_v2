import Isotope from "isotope-layout";
import * as Icon from "react-feather";

import Link from "next/link";

import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilterSix() {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-row", {
        itemSelector: ".masonry__item",
        percentPosition: true,
        masonry: {
          columnWidth: ".masonry__item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 0);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <>
      <div className="row justify-center">
        <div className="col-auto">
          <div className="filter-button-group">
            <button
              className={`button text-base mr-20 ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All Art
            </button>
            <button
              className={`button text-base mr-20`}
              onClick={handleFilterKeyChange("e_commerce")}
              data-filter=".e_commerce"
            >
              Generative art
            </button>
            <button
              className={`button text-base mr-20`}
              onClick={handleFilterKeyChange("digital_design")}
              data-filter=".digital_design"
            >
              Neural style transfer
            </button>
            <button
              className={`button text-base mr-20`}
              onClick={handleFilterKeyChange("web_design")}
              data-filter=".branding"
            >
              3D Model
            </button>
            <button
              className={`button text-base mr-20`}
              onClick={handleFilterKeyChange("branding")}
              data-filter=".web_design"
            >
              Motion Graphics
            </button>
          </div>
        </div>
      </div>
      <div className="works-row  masonry -col-3 -gap-32 pt-60 sm:pt-40 js-masonry js-masonry-no-filter">
        <div className="masonry__sizer" />
        <div className="masonry__item e_commerce">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/a.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/shop/shop-single"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #animation
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #cartoon
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #single-colored
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    The Desert
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry__item   e_commerce digital_design">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/b.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/shop/shop-single"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #Photo-realistic
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #mixed
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #portrait
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    Feather-eyed
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry__item   web_design digital_design branding">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/c.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/shop/shop-single"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #marketing
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #design
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #developer
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    Air Plane
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry__item   e_commerce branding">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/d.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/portfolio/portfolio-single-1"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #marketing
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #design
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #developer
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    Lewis Baker
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry__item -big  web_design digital_design branding">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/e.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/portfolio/portfolio-single-1"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #marketing
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #design
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #developer
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    AG. Avent
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry__item   web_design e_commerce branding">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/f.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/portfolio/portfolio-single-1"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #marketing
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #design
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #developer
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    Fortune Art
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry__item   e_commerce">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/g.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/portfolio/portfolio-single-1"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #marketing
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #design
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #developer
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    Virtual Payment
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry__item   e_commerce digital_design">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/i.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/portfolio/portfolio-single-1"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #marketing
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #design
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #developer
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    Good Food
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masonry__item   digital_design web_design branding">
          <div className="h:zoom ratio">
            <div className="absolute-full-center hover-group overflow-hidden rounded-8">
              <img
                className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                src="/img/portfolio/cards/a.jpg"
                alt="image"
              />
              <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                <Link
                  href="/portfolio/portfolio-single-1"
                  className="absolute-full-center z-1"
                />
                <div className="absolute-center">
                  <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                    <Icon.ArrowRight className="icon ml-5 text-white" />
                  </div>
                </div>
                <div className="relative z-2">
                  <div className="x-gap-10 y-gap-10">
                    <a href="#" className="decoration-none text-white">
                      #marketing
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #design
                    </a>
                    <a href="#" className="decoration-none text-white">
                      #developer
                    </a>
                  </div>
                  <h4 className="text-2xl fw-600 text-white mt-16">
                    Enterprice Silver
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
