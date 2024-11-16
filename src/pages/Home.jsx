import CarouselBanner from "../components/CarouselBanner";
import CarouselCategoria from "../components/CarouselCategoria";
import CarouselMarcas from "../components/CarouselMarcas";
import InfosProdutos from "../components/InfosProdutos";

function Home() {
    return (
        <>
            <CarouselBanner />
            <CarouselCategoria />
            <CarouselMarcas />
            <InfosProdutos />
        </>
    );
}
export default Home;