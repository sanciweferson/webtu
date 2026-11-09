

export const Hero = () => /* html */ `
  <section class="hero" id="inicio" aria-labelledby="hero-titulo">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title" id="hero-titulo">
          Crie seus próprios cursos em vídeo
        </h1>

        <p class="hero__description">
          Mergulhe no mundo da criatividade e aprenda a produzir
          vídeos incríveis que prendem a atenção do seu público.
        </p>

        <a class="hero__button" href="#capitulos">
          Conheça o curso — US$ 29
        </a>
      </div>

      <img
        class="hero__image"
        src="/images/header-course.png"
        alt="Apresentação visual do curso de criação de vídeos"
        fetchpriority="high"
      >
    </div>

    <svg
      class="hero__wave"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 60C180 120 300 0 480 60S780 120 960 60S1260 0 1440 60V120H0Z"
      />
    </svg>
  </section>
`
