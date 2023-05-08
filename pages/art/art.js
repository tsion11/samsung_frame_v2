import { useCallback, useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import * as Icon from "react-feather";
import Link from "next/link";

export default function Art({ data, loading }) {
  // console.log(art?.data[0].attributes?.pictures?.data[0].attributes.url);
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
  // useEffect(() => {
  //   if (isotope.current) {
  //     filterKey === "*"
  //       ? isotope.current.arrange({ filter: `*` })
  //       : isotope.current.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const filteredData = () => {
    if (filterKey === "*") {
      const temp = data?.data?.map((mapper) => {
        return mapper.attributes.arts.data;
      });
      let all = [];
      temp?.forEach((element) => {
        all = [...all, ...element];
      });

      return all;
    } else return data.data?.[filterKey]?.attributes.arts.data;
  };

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
            {data?.data.map((d, index) => (
              <button
                key={d.id}
                className={`button text-base mr-20`}
                onClick={handleFilterKeyChange(index)}
                data-filter=".e_commerce"
              >
                {d.attributes.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {data && (
        <div className="container">
          <div className="row  masonry -gap-32 pt-60 sm:pt-40 js-masonry js-masonry-no-filter">
            <div className="masonry__sizer" />
            {filteredData().map((d) => (
              <div
                key={d.id}
                className="masonry__item col-sm-4 col-6 col-md-6`"
              >
                <div className="h:zoom ratio">
                  <div className="absolute-full-center hover-group overflow-hidden rounded-8">
                    <img
                      className="object-fit-cover absolute-full-center z-1 h:zoom__item rounded-8"
                      src={`https://api.samsungframe.art/${d?.attributes?.pictures?.data[0]?.attributes.url}`}
                      alt="image"
                    />
                    <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                      <Link
                        href={`/art/${d.id}`}
                        className="absolute-full-center z-1"
                      />
                      <div className="absolute-center">
                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                          <Icon.ArrowRight className="icon ml-5 text-white" />
                        </div>
                      </div>
                      <div className="relative z-2">
                        <div className="x-gap-10 y-gap-10">
                          {d?.attributes.tags?.data?.map((tag) => (
                            <a href="#" className="decoration-none text-white">
                              #{tag?.attributes.name}{" "}
                            </a>
                          ))}
                        </div>
                        <h4 className="text-2xl fw-600 text-white mt-16">
                          {d.attributes.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
