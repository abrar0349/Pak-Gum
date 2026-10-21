
  "use client";

  import { useState, useEffect, useRef, useCallback } from "react";
  import "./HeroSlider.css";


  import CHK3 from "@/app/Images/facilities/Store_in_faci/CHK3.jpg"
  import CHK2 from "@/app/Images/facilities/Store_in_faci/CHK2.jpg"

  const slides = [
    {
      image: CHK3.src,
      alt: "Pakistan Gum Industries factory",
      title: "Quality That Builds Trust",
      description:
        "Delivering reliable gum solutions through quality, innovation and experience.",
      label: "QUALITY & EXCELLENCE",
    },
    {
      image: CHK2.src,
      alt: "Pakistan Gum Industries facilities",
      title: "Innovation in Every Detail",
      description:
        "Committed to excellence, consistent quality and lasting partnerships.",
      label: "INNOVATION & GROWTH",
    },
  ];

  export default function HeroSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [incomingIndex, setIncomingIndex] = useState(null);
    const [direction, setDirection] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const animationTimer = useRef(null);
    const isAnimatingRef = useRef(false);
    const currentIndexRef = useRef(0);

    const changeSlide = useCallback((moveDirection) => {
      if (isAnimatingRef.current) return;

      isAnimatingRef.current = true;

      const nextIndex =
        (currentIndexRef.current + moveDirection + slides.length) %
        slides.length;

      setDirection(moveDirection);
      setIncomingIndex(nextIndex);
      setIsAnimating(true);

      animationTimer.current = setTimeout(() => {
        currentIndexRef.current = nextIndex;
        setCurrentIndex(nextIndex);
        setIncomingIndex(null);
        setIsAnimating(false);
        isAnimatingRef.current = false;
      }, 800);
    }, []);

    useEffect(() => {
      if (isPaused) return;

      const timer = setInterval(() => {
        changeSlide(1);
      }, 5000);

      return () => clearInterval(timer);
    }, [isPaused, changeSlide]);

    useEffect(() => {
      return () => clearTimeout(animationTimer.current);
    }, []);

    const goToSlide = (index) => {
      if (index === currentIndexRef.current || isAnimatingRef.current) {
        return;
      }

      changeSlide(index > currentIndexRef.current ? 1 : -1);
    };

    return (
      <main className="pg-hero">
        <section
          className="pg-hero-slider"
          aria-label="Pakistan Gum Industries highlights"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          
          <div className="pg-hero-track">
            {/* Current image */}
            <div
              className={`pg-hero-layer ${
                isAnimating
                  ? direction === 1
                    ? "pg-exit-left"
                    : "pg-exit-right"
                  : "pg-current"
              }`}
            >
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].alt}
                className="pg-hero-image"
                draggable="false"
              />
            </div>

            {/* Incoming image */}
            {incomingIndex !== null && (
              <div
                className={`pg-hero-layer ${
                  direction === 1
                    ? "pg-enter-right"
                    : "pg-enter-left"
                }`}
                key={incomingIndex}
              >
                <img
                  src={slides[incomingIndex].image}
                  alt={slides[incomingIndex].alt}
                  className="pg-hero-image"
                  draggable="false"
                />
              </div>
            )}

            {/* Image overlay */}
            <div className="pg-hero-overlay" />

            {/* Hero content */}
            <div className="pg-hero-content" key={currentIndex}>
              <span className="pg-hero-label">
                <span className="pg-label-line" />
                {slides[currentIndex].label}
              </span>

              <h1>{slides[currentIndex].title}</h1>

              <p>{slides[currentIndex].description}</p>

              <span className="pg-hero-accent" />
            </div>

            {/* Previous button */}
            <button
              type="button"
              className="pg-hero-arrow pg-hero-prev"
              onClick={() => changeSlide(-1)}
              aria-label="Previous slide"
              disabled={isAnimating}
            >
              <span aria-hidden="true">←</span>
            </button>

            {/* Next button */}
            <button
              type="button"
              className="pg-hero-arrow pg-hero-next"
              onClick={() => changeSlide(1)}
              aria-label="Next slide"
              disabled={isAnimating}
            >
              <span aria-hidden="true">→</span>
            </button>

            {/* Bottom navigation */}
            <div className="pg-hero-bottom">
              <div className="pg-hero-counter" aria-live="polite">
                <span className="pg-counter-current">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="pg-counter-divider" />
                <span className="pg-counter-total">
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              <div className="pg-hero-dots">
                {slides.map((slide, index) => (
                  <button
                    key={slide.alt}
                    type="button"
                    className={`pg-hero-dot ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={
                      index === currentIndex ? "true" : undefined
                    }
                    disabled={isAnimating}
                  />
                ))}
              </div>
            </div>

          </div>

        </section>
      </main>
    );
  }
