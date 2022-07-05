import { loadPage } from '@/utils';

export const Home = loadPage(() => import('@/pages/home'));

export const Holiday = loadPage(() => import('@/pages/holiday'));

export const QRcode = loadPage(() => import('@/pages/qrcode'));

export const Room = loadPage(() => import('@/pages/room'));

export const Face = loadPage(() => import('@/pages/face'));

export const Comic = loadPage(() => import('@/pages/comic'));
