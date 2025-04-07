import { HeaderOnly } from '~/Component/Layout';

import { Following, Home, Profile, Upload } from '~/pages';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile, layout: null },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
