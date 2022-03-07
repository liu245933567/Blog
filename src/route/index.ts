import { loadable } from '@/utils';

export const Home = loadable(() => import('@/pages/home'));

export const QRcode = loadable(() => import('@/pages/qrcode'));
