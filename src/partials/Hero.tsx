import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hallo Kami adalah <GradientText>Pringgasela Literasi</GradientText> 👋
        </>
      }
      description={
        <>
          ini adalah blog tempat menulis anggota{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.facebook.com/pringgaselaliterasi0606"
          >
            Pringgasela Literasi
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/logo-literasi.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.instagram.com/pringgasela_literasi/">
            <HeroSocial
              src="/assets/images/instagram.png"
              alt="Instagram icon"
            />
          </a>
          <a href="https://www.facebook.com/pringgaselaliterasi0606">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.youtube.com/@pringgaselaliterasi6669">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
