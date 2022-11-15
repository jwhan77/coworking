/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NCP_ClientId: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}