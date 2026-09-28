import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// บน GitHub Actions จะดึงชื่อ repo อัตโนมัติ (เช่น /Sweet-Crumb-xxx/)
// ตอนรันในเครื่อง (npm run dev) จะใช้ '/' ตามปกติ
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];

export default defineConfig({
  base: repo ? `/${repo}/` : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
