# Lavera Backend Only (Final) — 21 Days / 2 Issues per Day

Backend-only project (NO frontend). Teacher can verify outputs using:
- Browser + Inspect (Network tab)
- Swagger UI
- Postman / curl

## 1) Prerequisites
- Node.js (LTS recommended)
- XAMPP (MySQL running) or any MySQL server

## 2) Database setup (XAMPP)
1. Start **MySQL** in XAMPP.
2. Open phpMyAdmin: http://localhost/phpmyadmin
3. Run SQL: `docs/sql/schema.sql`
4. Optional seed: `docs/sql/seed.sql`

## 3) Run backend (PowerShell)
```powershell
copy .env.example .env
npm install
npm run dev
```

## 4) Check outputs (NO frontend)
- Health: http://localhost:5000/api/health
- Ready (DB check): http://localhost:5000/api/ready
- Tours list: http://localhost:5000/api/tours
- Inquiries list: http://localhost:5000/api/inquiries
- Swagger: http://localhost:5000/api/docs

Right-click page → Inspect → Network → Response

## 21-Day plan
See: `docs/21DAY_PLAN.md`
