import React from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const CarouselBanner = () => {
  React.useEffect(() => {
    new Swiper('.main-swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <section
      className="py-3"
      style={{
        backgroundImage: "url('./src/assets/images/background-pattern.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-blocks">
              <div className="banner-ad large bg-info block-1">
                <div className="swiper main-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories my-3">100% natural</div>
                          <h3 className="display-4">Suco para o Verão</h3>
                          <p>
                            O melhor suco de verão que é 100% natural! Aproveite.
                          </p>
                          <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">
                            Compre!
                          </a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src="https://themewagon.github.io/FoodMart/images/product-thumb-1.png" className="img-fluid" alt="Product 1" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories mb-3 pb-3">300% natural</div>
                          <h3 className="banner-title">Suco para o Outono</h3>
                          <p>
                            Esse é dos bom...
                          </p>
                          <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                            Veja mais
                          </a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src="https://themewagon.github.io/FoodMart/images/product-thumb-1.png" className="img-fluid" alt="Product 2" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories mb-3 pb-3">Melhor Ketchup</div>
                          <h3 className="banner-title">Ketchup Heinz</h3>
                          <p>
                            O melhor Ketchup do mercado!
                          </p>
                          <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                            Compre agora!
                          </a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src="https://themewagon.github.io/FoodMart/images/product-thumb-2.png" className="img-fluid" alt="Product 3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category-carousel-prev">
                      <span className="swiper-button-prev">
                        <i className="fas fa-chevron-left"></i>
                      </span>
                    </div>
                    <div className="category-carousel-next">
                      <span className="swiper-button-next">
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div
                className="banner-ad bg-success-subtle block-2"
                style={{
                  backgroundImage: "url('https://themewagon.github.io/FoodMart/images/ad-image-1.png')",
                  backgroundPosition: 'right bottom',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">20% off</div>
                    <h3 className="banner-title">Nas frutas e vegetais.</h3>
                    <a href="#" className="d-flex align-items-center nav-link">
                      Venha conhecer{' '}
                      <svg width="24" height="24">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="banner-ad bg-danger block-3"
                style={{
                  backgroundImage: "url('https://themewagon.github.io/FoodMart/images/ad-image-2.png')",
                  backgroundPosition: 'right bottom',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">15% off</div>
                    <h3 className="item-title">Fritos e Assados</h3>
                    <a href="#" className="d-flex align-items-center nav-link">
                      Conheça!{' '}
                      <svg width="24" height="24">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* / Banner Blocks */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselBanner;
