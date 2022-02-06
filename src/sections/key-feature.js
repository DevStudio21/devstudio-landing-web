/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Construye tu site',
    title: 'Construye tu site',
    text:
      'Una web fácil en la que tu puedas gestionar el contenido con facilidad si lo deseas.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Posiciona tu web',
    title: 'Posiciona tu web',
    text:
      'Se visible y así llegarás a clientes más potenciales.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Una User Experience accesible',
    title: 'Una User Experience accesible',
    text:
      'Pensada para tus clientes a través del research que haremos para conocerlos.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'UI innovadora y moderna',
    title: 'UI innovadora y moderna',
    text:
      'Trabajamos con las técnicas más modernas e innovadoras para conseguir una interfaz atractiva y adaptada para tus clientes.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="work">
      <Container>
        <SectionHeader
          slogan="Qué ofrecemos"
          title="Conoce como podemos hacer crecer tu negocio"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
