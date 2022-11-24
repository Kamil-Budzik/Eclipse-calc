import LegendItem, { Props as LegendItemProps } from './LegendItem';
import { SemiTitle, List } from './styles';

// You can modify Legend content here
const legendItems: LegendItemProps[] = [
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Dobra przekmina będzie co tutaj w alcie wpisać hehe',
    text: 'Opis co robi ta ikonka cnie',
  },
];

function Legend() {
  return (
    <section>
      <header>
        <SemiTitle>Legend</SemiTitle>
      </header>
      <List>
        {legendItems.map((item) => (
          <LegendItem {...item} />
        ))}
      </List>
    </section>
  );
}

export default Legend;
