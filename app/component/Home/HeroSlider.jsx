
"use client";

import { useState, useEffect, useRef } from "react";
import "./HeroSlider.css";

import Image1 from "@/app/Images/About.jpg";
import Image2 from "@/app/Images/Contact.jpg";

export default function HeroSlider() {
  const slides = [
    {
      image: Image1.src,
      alt: "Pakistan Gum Industries Factory 1",
      title: "Quality That Builds Trust",
      description:
        "Delivering reliable gum solutions through quality, innovation and experience.",
    },
    {
      image: Image2.src,
      alt: "Pakistan Gum Industries Factory 2",
      title: "Innovation in Every Detail",
      description:
        "Committed to excellence, consistent quality and lasting partnerships.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(null);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const animationTimer = useRef(null);
  const autoSlideTimer = useRef(null);
  const isAnimatingRef = useRef(false);

  const changeSlide = (moveDirection) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setDirection(moveDirection);

    const nextIndex =
      (currentIndex + moveDirection + slides.length) % slides.length;

    setIncomingIndex(nextIndex);
    setIsAnimating(true);

    animationTimer.current = setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIncomingIndex(null);
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }, 750);
  };

  // Left arrow: current slide exits left; new slide enters from right.
  const prevSlide = () => changeSlide(-1);

  // Right arrow: current slide exits right; new slide enters from left.
  const nextSlide = () => changeSlide(1);

  // Automatically advance every 4 seconds.
  useEffect(() => {
    autoSlideTimer.current = setInterval(() => {
      if (!isAnimatingRef.current) {
        changeSlide(1);
      }
    }, 4000);

    return () => {
      clearInterval(autoSlideTimer.current);
      clearTimeout(animationTimer.current);
    };
  }, [currentIndex]);

  // Pause autoplay while the visitor hovers over the slider.
  const pauseAutoSlide = () => {
    clearInterval(autoSlideTimer.current);
  };

  const resumeAutoSlide = () => {
    clearInterval(autoSlideTimer.current);

    autoSlideTimer.current = setInterval(() => {
      if (!isAnimatingRef.current) {
        changeSlide(1);
      }
    }, 4000);
  };

  return (
    <main className="pg-section">
      <section
        className="pg-slider-container"
        aria-roledescription="carousel"
        aria-label="Pakistan Gum Industries highlights"
        onMouseEnter={pauseAutoSlide}
        onMouseLeave={resumeAutoSlide}
        onFocusCapture={pauseAutoSlide}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            resumeAutoSlide();
          }
        }}
      >
        <div className="pg-slider-box">
          {/* Current slide */}
          <div
            className={`pg-slide-layer ${
              isAnimating
                ? direction === -1
                  ? "pg-exit-left"
                  : "pg-exit-right"
                : "pg-current"
            }`}
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              className="pg-slide-image"
              draggable="false"
            />
          </div>

          {/* Incoming slide */}
          {incomingIndex !== null && (
            <div
              className={`pg-slide-layer ${
                direction === -1
                  ? "pg-enter-from-right"
                  : "pg-enter-from-left"
              }`}
              key={incomingIndex}
            >
              <img
                src={slides[incomingIndex].image}
                alt={slides[incomingIndex].alt}
                className="pg-slide-image"
                draggable="false"
              />
            </div>
          )}

          {/* Dark overlay for a polished look */}
          <div className="pg-slider-overlay" />

          {/* Text content */}
          <div className="pg-slider-content" key={currentIndex}>
            <span className="pg-slider-eyebrow">
              PAKGUM INDUSTRIES
            </span>

            <h1>{slides[currentIndex].title}</h1>

            <p>{slides[currentIndex].description}</p>

            <span className="pg-slider-accent" />
          </div>

          {/* Navigation */}
          <button
            type="button"
            className="pg-arrow-btn pg-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
            disabled={isAnimating}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <button
            type="button"
            className="pg-arrow-btn pg-next"
            onClick={nextSlide}
            aria-label="Next slide"
            disabled={isAnimating}
          >
            <span aria-hidden="true">›</span>
          </button>

          {/* Slide indicators */}
          <div className="pg-dots-container">
            {slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                className={`pg-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => {
                  if (index !== currentIndex) {
                    changeSlide(index > currentIndex ? 1 : -1);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                disabled={isAnimating}
              />
            ))}
          </div>

          <div className="pg-slider-counter" aria-live="polite">
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="pg-counter-line" />
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
