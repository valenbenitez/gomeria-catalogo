import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        adaptiveHeight: true,
        arrows: false // Recomendado para móviles
    }

    return (
        <section className="py-8 px-0 md:px-4"> {/* Sin padding lateral en móvil */}
            <div className="w-full mx-auto"> {/* Contenedor al 100% de ancho */}
                <Slider {...settings}>
                    <div className="aspect-[1.5/1] md:aspect-[2.4/1]"> {/* Relación más móvil-friendly */}
                        <img
                            src="/image_banner_1.jpg"
                            alt="Imagen 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="aspect-[1.5/1] md:aspect-[2.4/1]">
                        <img
                            src="/image_banner_3.jpg"
                            alt="Imagen 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="aspect-[1.5/1] md:aspect-[2.4/1]">
                        <img
                            src="/image_banner_4.jpg"
                            alt="Imagen 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Slider>
            </div>
        </section>
    );
}