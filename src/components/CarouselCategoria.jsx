import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, Row, Col } from 'react-bootstrap';

const CarouselCategoria = () => {
  return (
    <section className="py-5 overflow-hidden">
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Categorias</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">
                  Ver todas as categorias →
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            {/* Swiper React - Inicializando o Swiper */}
            <Swiper
              spaceBetween={30}
              slidesPerView={3}  // Padrão para telas grandes
              navigation={{
                prevEl: '.category-carousel-prev',
                nextEl: '.category-carousel-next',
              }}
              breakpoints={{
                // Para telas grandes (1000px ou mais), mostra 3 slides
                1000: {
                  slidesPerView: 3,
                },
                // Para telas médias (600px a 999px), mostra 2 slides
                600: {
                  slidesPerView: 2,
                },
                // Para telas pequenas (menores que 600px), mostra 1 slide
                0: {
                  slidesPerView: 1,
                },
              }}
              className="category-carousel"
            >
              <SwiperSlide>
                <a href="#" className="nav-link category-item">
                  <img src="https://themewagon.github.io/FoodMart/images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Frutas & Vegetais</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="nav-link category-item">
                  <img src="https://themewagon.github.io/FoodMart/images/icon-bread-baguette.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Pães e Doces</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="nav-link category-item">
                  <img src="https://themewagon.github.io/FoodMart/images/icon-soft-drinks-bottle.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Bebidas</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="nav-link category-item">
                  <img src="https://themewagon.github.io/FoodMart/images/icon-wine-glass-bottle.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Garrafas de Vinho</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="nav-link category-item">
                  <img src="https://themewagon.github.io/FoodMart/images/icon-animal-products-drumsticks.png" alt="Category Thumbnail" />
                  <h3 className="category-title">PetCare</h3>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#" className="nav-link category-item">
                  <img src="https://themewagon.github.io/FoodMart/images/icon-bread-herb-flour.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Cereais</h3>
                </a>
              </SwiperSlide>

              {/* Botões de navegação */}
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

export default CarouselCategoria;
