import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const Art = dynamic(() => import("./art"), {
  ssr: false,
});

export default function Portfolio1() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // const [art, setArt] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCategories();
  }, []);

  const getCategories = () => {
    fetch(
      "https://api.samsungframe.art/api/categories?fields[1]=name&populate[arts][populate][1]=tags&populate[arts][populate][2]=pictures"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  return (
    <>
      <Layout footerLayout={11}>
        <div>
          <section className="page-header -text -">
            <div className="container">
              <div className="page-header__content">
                <div className="row justify-center text-center">
                  <div className="col-xl-6 col-lg-9 col-md-10">
                    <div>
                      <h1 className="page-header__title lh-14">
                        Samsung Frame Art Gallery
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/1" />
                  <div className="col-xl-5 col-lg-9 col-md-10">
                    <div className="px-20">
                      <p className="page-header__text">
                        Artistry meets technology - discover our digital art
                        collection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="layout-pt-lg layout-pb-sm">
            <div className="section-filter">
              <div className="container">
                <Art data={data} loading={isLoading} />
              </div>
            </div>
          </section>
          <section className="layout-pt-sm layout-pb-lg">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionHeading ">
                    <h2 className="sectionHeading__title">
                      We create superior art for your Samsung Frame
                    </h2>
                    <p className="sectionHeading__text mt-20">
                      Add a touch of elegance to your home with our art,
                      <br className="md:d-none" /> perfectly suited for the
                      Samsung Frame.
                    </p>
                  </div>
                  {/* <Link
                    href="/contact/contact-2"
                    className="button -md -accent text-white mt-40 md:mt-30"
                  >
                    Get Started
                  </Link> */}
                </div>
              </div>
            </div>
          </section>
          <div className="svg-shape">
            <svg
              width={1920}
              height={60}
              viewBox="0 0 1920 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z"
                fill="#1A3454"
              />
            </svg>
          </div>
        </div>
      </Layout>
    </>
  );
}
