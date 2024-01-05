import React from "react";

const Home = () => {
  return (
    <div
      className="flex items-start content-wrap"
      style={{
        maxWidth: "1664px",
        marginLeft: "calc(-4% / 2)",
        marginRight: "calc(-4% / 2)",
      }}
    >
      <div
        className="flex flex-col justify-end w-full"
        style={{
          "--awb-bg-size": "cover",
          "--awb-width-large": "100%",
          "--awb-margin-top-large": "0px",
          "--awb-spacing-right-large": "1.92%",
          "--awb-margin-bottom-large": "0px",
          "--awb-spacing-left-large": "1.92%",
          "--awb-width-medium": "100%",
          "--awb-order-medium": "0",
          "--awb-spacing-right-medium": "1.92%",
          "--awb-spacing-left-medium": "1.92%",
          "--awb-width-small": "100%",
          "--awb-order-small": "0",
          "--awb-spacing-right-small": "1.92%",
          "--awb-spacing-left-small": "1.92%",
        }}
      >
        <div className="shadow column-wrapper flex justify-end content-layout-column">
          <div
            className="separator hidden lg:flex w-full"
            style={{
              alignSelf: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "500px",
              width: "100%",
            }}
          ></div>
          <div
            className="image-element text-center"
            style={{
              "--awb-caption-title-font-family":
                "var(--h2_typography-font-family)",
              "--awb-caption-title-font-weight":
                "var(--h2_typography-font-weight)",
              "--awb-caption-title-font-style":
                "var(--h2_typography-font-style)",
              "--awb-caption-title-size": "var(--h2_typography-font-size)",
              "--awb-caption-title-transform":
                "var(--h2_typography-text-transform)",
              "--awb-caption-title-line-height":
                "var(--h2_typography-line-height)",
              "--awb-caption-title-letter-spacing":
                "var(--h2_typography-letter-spacing)",
            }}
          >
            <span className="imageframe-none imageframe-1 hover-type-none">
              <img
                className="img-responsive lazyautosizes lazyloaded"
                src="https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home.png"
                alt=""
                width="2000"
                height="333"
                title="rb-logo-home"
                data-orig-src="https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home.png"
                srcSet="https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-200x33.png 200w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-400x67.png 400w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-600x100.png 600w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-800x133.png 800w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-1200x200.png 1200w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home.png 2000w"
                data-srcset="https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-200x33.png 200w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-400x67.png 400w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-600x100.png 600w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-800x133.png 800w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home-1200x200.png 1200w, https://www.russellbrand.com/wp-content/uploads/2021/03/rb-logo-home.png 2000w"
                data-sizes="auto"
                data-orig-sizes="(max-width: 1169px) 100vw, (max-width: 780px) 100vw, 2000px"
                sizes="1288px"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
