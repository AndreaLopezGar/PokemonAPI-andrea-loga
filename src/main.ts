import { Header } from './components/header';
import { Main } from './components/main';
import { Card } from './components/card';
import { Footer } from './components/footer';
import './scss/main.scss';

new Header('#app');
new Main('#app');
new Card('main');

new Footer('#app');
