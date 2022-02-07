/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/team/borjagodoy.jpeg';
import Member2 from 'assets/team/pablocarmona.jpeg';
import Member3 from 'assets/team/angelcorras.jpeg';
import Member4 from 'assets/team/josealbertosolis.jpeg'

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Borja Godoy',
    title: 'Borja Godoy',
    designation: 'CEO & Software Developer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/borja-godoy/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Pablo Carmona',
    title: 'Pablo Carmona',
    designation: 'Software Developer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/pablocarmonagonzalez/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Ángel Corral',
    title: 'Ángel Corral',
    designation: 'Product Designer & UX Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/ancoar/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'José Alberto Solís',
    title: 'José Alberto Solís',
    designation: 'Web Developer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/jose-alberto-solis-godoy-91143b207/',
        icon: <FaLinkedin />,
      }
    ],
  },
];

export default function TeamSection() {
  return (
    <section id="team">
      <Container sx={{mt:5}}>
        <SectionHeader
          slogan="Nuestro equipo"
          title="El mejor equipo a tu disposición"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
