import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import * as Icon from "react-feather";
import { useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ArtDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setLoading(true);
    getArt();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getArt = () => {
    fetch(`https://api.samsungframe.art/api/arts/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        getCategory(data?.data?.attributes.category.data.id);
        setLoading(false);
      });
  };

  const getCategory = (id) => {
    fetch(
      `https://api.samsungframe.art/api/categories/${id}?fields[1]=name&populate[arts][populate][1]=tags&populate[arts][populate][2]=pictures`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        // setLoading(false);
        console.log(data);
      });
  };

  const desc = data?.data?.attributes.long_desc;
  const instruction = data?.data?.attributes.instruction;

  const [active, setActive] = useState(1);

  const handleOnClick = (index) => {
    setActive(index);
  };

  return (
    <>
      <Layout footerLayout={6}>
        <div>
          <section className="pt-100 layout-pb-sm">
            <div className="container pt-100 md:pt-60 sm:pt-40">
              <div className="row y-gap-60 items-center">
                <div className="col-lg-6">
                  <div className="js-shop-slider">
                    <div className="shopSingle-preview__image js-slider-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <a
                            href="img/shop/products/1.jpg"
                            className="gallery__item js-gallery"
                            data-gallery="gallery1"
                          >
                            <div className="ratio ratio-62:60">
                              <img
                                className="absolute-full-center rounded-8 object-fit-cover"
                                src={`https://api.samsungframe.art${data?.data?.attributes.pictures.data[1].attributes.url}`}
                                alt="project image"
                              />
                            </div>
                          </a>
                        </div>
                        {/* <div className="swiper-slide">
                          <a
                            href="img/shop/products/2.jpg"
                            className="gallery__item js-gallery"
                            data-gallery="gallery1"
                          >
                            <div className="ratio ratio-62:60">
                              <img
                                className="absolute-full-center rounded-8 object-fit-cover"
                                src="/img/shop/products/2.jpg"
                                alt="project image"
                              />
                            </div>
                          </a>
                        </div> */}
                        {/* <div className="swiper-slide">
                          <a
                            href="img/shop/products/3.jpg"
                            className="gallery__item js-gallery"
                            data-gallery="gallery1"
                          >
                            <div className="ratio ratio-62:60">
                              <img
                                className="absolute-full-center rounded-8 object-fit-cover"
                                src="/img/shop/products/3.jpg"
                                alt="project image"
                              />
                            </div>
                          </a>
                        </div> */}
                        {/* <div className="swiper-slide">
                          <a
                            href="img/shop/products/4.jpg"
                            className="gallery__item js-gallery"
                            data-gallery="gallery1"
                          >
                            <div className="ratio ratio-62:60">
                              <img
                                className="absolute-full-center rounded-8 object-fit-cover"
                                src="/img/shop/products/4.jpg"
                                alt="project image"
                              />
                            </div>
                          </a>
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="row y-gap-10 x-gap-10 pt-10 js-slider-pagination">
                      <div data-cursor className="col-auto gallery__item">
                        <img
                          className="size-96 rounded-8 object-fit-cover"
                          src="/img/shop/products/1.jpg"
                          alt="project image"
                        />
                      </div>
                      <div data-cursor className="col-auto gallery__item">
                        <img
                          className="size-96 rounded-8 object-fit-cover"
                          src="/img/shop/products/2.jpg"
                          alt="project image"
                        />
                      </div>
                      <div data-cursor className="col-auto gallery__item">
                        <img
                          className="size-96 rounded-8 object-fit-cover"
                          src="/img/shop/products/3.jpg"
                          alt="project image"
                        />
                      </div>
                      <div data-cursor className="col-auto gallery__item">
                        <img
                          className="size-96 rounded-8 object-fit-cover"
                          src="/img/shop/products/4.jpg"
                          alt="project image"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="pl-40 pb-80 lg:pl-0 md:pb-0">
                    <h2 className="text-32 mt-4">
                      {data?.data?.attributes.title}
                    </h2>
                    <div className="text-xl fw-600 text-accent mt-12">
                      ${data?.data?.attributes.price}
                    </div>
                    <div className="mt-30">
                      <p>{data?.data?.attributes.small_desc}</p>
                    </div>
                    {/* <div className="shopSingle-info__action row x-gap-20 y-gap-24 pt-30">
                      <div className="col-auto">
                        <QuantityInput />
                      </div>
                      <div className="col-auto">
                        <button className="button -md -accent -uppercase text-white">
                          Add to cart
                        </button>
                      </div>
                    </div> */}
                    <div className="pt-30">
                      <Link
                        href={`${data?.data?.attributes.linktoart}`}
                        target="_blank"
                        className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10"
                      >
                        Visit Shop
                      </Link>
                    </div>
                    <div className="pt-30">
                      <p>
                        Category:{" "}
                        {data?.data?.attributes.category.data.attributes.name}
                      </p>
                      <p>
                        Tags:{" "}
                        {data?.data?.attributes.tags.data
                          .map((tag) => tag.attributes.name)
                          .join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-sm layout-pb-sm">
            <div className="tabs -active-accent js-tabs">
              <div className="row pt-30 border-top-dark">
                <div className="col-12">
                  <div className="tabs__controls d-flex justify-center js-tabs-controls">
                    <button
                      className={`tabs__button js-tabs-button ${
                        active == 1 ? "is-active" : ""
                      }`}
                      onClick={() => handleOnClick(1)}
                      type="button"
                    >
                      Description
                    </button>
                    <button
                      className={`tabs__button js-tabs-button ml-32 ${
                        active == 2 ? "is-active" : ""
                      }`}
                      onClick={() => handleOnClick(2)}
                      type="button"
                    >
                      Instruction
                    </button>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tabs__content pt-60 js-tabs-content">
                        <div
                          className={`tabs__pane -tab-item-1  ${
                            active == 1 ? "is-active" : ""
                          }`}
                        >
                          <div className="row justify-center">
                            <div className="col-xl-8 col-lg-9 col-md-11">
                              {/* <h4 className="text-xl fw-600">
                                Description
                              </h4> */}

                              <ReactMarkdown
                                linkTarget="_blank"
                                // eslint-disable-next-line react/no-children-prop
                                children={desc}
                                remarkPlugins={[remarkGfm]}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className={`tabs__pane -tab-item-2  ${
                            active == 2 ? "is-active" : ""
                          }`}
                        >
                          <div className="row justify-center">
                            <div className="col-xl-8 col-lg-9 col-md-11">
                              {/* <h4 className="text-xl fw-600">
                                Description
                              </h4> */}

                              <ReactMarkdown
                                linkTarget="_blank"
                                // eslint-disable-next-line react/no-children-prop
                                children={instruction}
                                remarkPlugins={[remarkGfm]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-sm layout-pb-lg">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionHeading ">
                    <div className="sectionHeading__subtitle">
                      {/* <span>Related Arts</span> */}
                    </div>
                    <h2 className="sectionHeading__title">You may also like</h2>
                  </div>
                </div>
              </div>
              <div className="row y-gap-32 pt-60 sm:pt-40">
                {category &&
                  category.data?.attributes.arts.data.map((art) => (
                    <div
                      key={art.attributes.category}
                      className="col-lg-3 col-sm-6"
                    >
                      <div className="text-center">
                        <div className="ratio ratio-27:30 hover-group">
                          <img
                            className="absolute-full-center rounded-8 object-fit-cover"
                            src={`https://api.samsungframe.art${art?.attributes.pictures.data[1].attributes.url}`}
                            alt="Product image"
                          />
                          <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                            <a
                              href="#"
                              className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white"
                            >
                              <Icon.Eye className="icon size-20" />
                            </a>
                            <a
                              href="#"
                              className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white"
                            >
                              <Icon.Heart className="icon size-20" />
                            </a>
                          </div>
                        </div>
                        <div className="shopCard__content mt-20">
                          <div>
                            {art?.attributes.tags.data.map((tag) => (
                              <a href="#" key={tag.id} className="decoration-none">
                                {tag.attributes.name},
                              </a>
                            ))}
                          </div>
                          <h4 className="text-16 fw-600 mt-8">
                            {art.attributes.title}
                          </h4>
                          <div className="text-16 fw-600 text-accent mt-4">
                            ${art.attributes.price}
                          </div>
                          <Link
                            href={`/art/${art.id}`}
                            className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
