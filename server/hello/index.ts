import { IHello } from './hello.model';

const test_data: IHello = {
  name: 'interna',
  desc: 'I am the server of the interna product',
  server: 'In a perfect condition',
  id: 0,
};

export default function getData() {
  return test_data;
}
