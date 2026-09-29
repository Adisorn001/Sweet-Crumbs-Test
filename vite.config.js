import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ใส่ชื่อ Repository บน GitHub ของคุณตรงนี้ (ต้องมี / ปิดหน้าและหลัง)
const REPO_NAME = '/Sweet-Crumbs-Test/';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? REPO_NAME : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
