import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src="/assets/images/logo-literasi.svg"
              width={50}
              height={50}
            />
          }
          name="Pr-Literasi Blog"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
