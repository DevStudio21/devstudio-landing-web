/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'Reunión de identificación de necesidades',
    text:
      'Lo primero de todo es conocer tu empresa al detalle, el punto en el que estás y hacia dónde quieres ir y tratar de identificar la mejor solución a nivel tecnológico, UX y UI para tu empresa. Esta es la reunión donde no queremos que se te quede nada en el tintero.',
  },
  {
    id: 2,
    title: 'Presentación de necesidades y objetivos',
    text:
      'Este paso es el que más nos gusta y para nosotros el más importante. Te presentaremos las necesidades que hemos detectado en la runión previa y cómo hemos pensado en resolverlas y los retos a los que nos enfrentamos dado tus objetivos marcados, presentándote la User Experience mediante Mockups y de las tecnologías propuestas para resolver el problema.',
  },
  {
    id: 3,
    title: 'Desarrollo de la solución de forma iterativa',
    text:
      'Lo que más nos gusta en GRRROW es mostrar como va CRECIENDO tu proyecto. Te haremos demos semanales o bisemanales dependiendo de la embergadura del proyecto e iremos iterando sobre él semana tras semana, lo que nos permite ir adaptando el desarrollo y poder tener un producto visible desde la segunda semana.',
  },
  {
    id: 4,
    title: 'Entrega, Formación y Mantenimiento',
    text:
      'Una vez acabado el proyecto, en GRRROW nos gusta realizar una pequeña formación para que el propio cliente pueda realizar modificaciones rápidas en el desarrollo. Por otro lado también ofrecemos la posibilidad de contratar un mantenimiento, pero siempre dando las herramientas para que lo hagáis vosotros si lo preferís.',
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="¿CUÁL ES EL PROCESO?"
          title="Esta es nuestra forma de trabajar"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
