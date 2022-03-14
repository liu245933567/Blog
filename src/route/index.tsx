import { loadPage } from '@/utils';

export const Home = loadPage(() => import('@/pages/home'));

export const QRcode = loadPage(() => import('@/pages/qrcode'));

export const Face = loadPage(() => import('@/pages/face'));
