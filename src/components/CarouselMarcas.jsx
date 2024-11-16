import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, Row, Col } from 'react-bootstrap'; // Importando os componentes do React Bootstrap

const CarouselMarcas = () => {
  return (
    <section className="py-5 overflow-hidden">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Marcas Recém-Chegadas</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">
                  Ver todas as categorias →
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Swiper
              spaceBetween={30} // Espaçamento entre os slides
              loop={true} // Faz o carrossel ser infinito
              breakpoints={{
                1200: {
                  slidesPerView: 3, // 3 slides por vez em telas grandes (PC)
                  spaceBetween: 30, // Espaçamento entre os slides em telas grandes
                },
                768: {
                  slidesPerView: 2, // 2 slides por vez em tablets
                  spaceBetween: 20, // Espaçamento entre os slides em tablets
                },
                480: {
                  slidesPerView: 1, // 1 slide por vez em celulares
                  spaceBetween: 10, // Espaçamento entre os slides em celulares
                },
              }}
              navigation={{
                prevEl: '.category-carousel-prev',
                nextEl: '.category-carousel-next',
              }}
              className="brand-carousel"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                  <Row className="g-0 d-flex align-items-center">
                    <Col xs={4} className="d-flex justify-content-center">
                      <img
                        src="https://themewagon.github.io/FoodMart/images/product-thumb-13.jpg"
                        className="img-fluid rounded"
                        alt="Card title"
                        style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                      />
                    </Col>
                    <Col xs={8}>
                      <div className="card-body py-0">
                        <p className="text-muted mb-0">FishFresh</p>
                        <h5 className="card-title">Sardinha</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                  <Row className="g-0 d-flex align-items-center">
                    <Col xs={4} className="d-flex justify-content-center">
                      <img
                        src="https://themewagon.github.io/FoodMart/images/product-thumb-14.jpg"
                        className="img-fluid rounded"
                        alt="Card title"
                        style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                      />
                    </Col>
                    <Col xs={8}>
                      <div className="card-body py-0">
                        <p className="text-muted mb-0">VegFood</p>
                        <h5 className="card-title">Legumes congelados</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                  <Row className="g-0 d-flex align-items-center">
                    <Col xs={4} className="d-flex justify-content-center">
                      <img
                        src="https://themewagon.github.io/FoodMart/images/product-thumb-11.jpg"
                        className="img-fluid rounded"
                        alt="Card title"
                        style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                      />
                    </Col>
                    <Col xs={8}>
                      <div className="card-body py-0">
                        <p className="text-muted mb-0">Amber Jar</p>
                        <h5 className="card-title">O Melhor mel que você vai comprar</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                  <Row className="g-0 d-flex align-items-center">
                    <Col xs={4} className="d-flex justify-content-center">
                      <img
                        src="https://themewagon.github.io/FoodMart/images/product-thumb-12.jpg"
                        className="img-fluid rounded"
                        alt="Card title"
                        style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                      />
                    </Col>
                    <Col xs={8}>
                      <div className="card-body py-0">
                        <p className="text-muted mb-0">Hibisco's</p>
                        <h5 className="card-title">O melhor chá de hibisco do mercado</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>

              {/* Navegação para o carrossel */}
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
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarouselMarcas;
