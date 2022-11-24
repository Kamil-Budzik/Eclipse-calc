import { Icon, Text, ListItem } from './styles';

export interface Props {
  src: string;
  alt: string;
  text: string;
}

function LegendItem({ src, alt, text }: Props) {
  return (
    <ListItem>
      <Icon src={src} alt={alt} />
      <Text>{text}</Text>
    </ListItem>
  );
}

export default LegendItem;
