/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_ACCOUNT_ID: string;

  readonly VITE_AUTHORIZATION_TOKEN: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
