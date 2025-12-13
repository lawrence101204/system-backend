# 21 Days Backend Plan (2 Issues per Day) — Backend Only

## How to present (teacher demo)
1. Show code structure: `src/` folder separation (routes/controllers/services/middlewares/validators)
2. Run backend: `npm run dev`
3. Verify output in browser + Inspect:
   - `/api/health`, `/api/ready`, `/api/tours`, `/api/inquiries`
4. Show Swagger: `/api/docs`
5. Optional: show unit tests (`npm test`) and Docker files

---

## WEEK 1 — Backend Structure, Error Handling, Auth Hardening, Tours, Inquiries

### Day 1
- Issue 1: Review backend codebase & map routes (documentation)
  - Output: `docs/ROUTES.md`
- Issue 2: Normalize backend folder structure (refactor)
  - `src/app.js` (middlewares + routes), `src/server.js` (boot)

### Day 2
- Issue 1: Add standardized response helper
  - `src/utils/response.js` returns `{ success, message, data }`
- Issue 2: Implement global error handler middleware
  - `src/middlewares/errorHandler.js`, `src/utils/AppError.js`

### Day 3
- Issue 1: Secure auth using bcrypt password hashing
  - `src/controllers/authController.js`
- Issue 2: Add validation for login payload
  - `src/validators/authValidators.js`, `src/routes/auth.js`

### Day 4
- Issue 1: Add rate limiting to login route
  - `src/middlewares/rateLimiters.js`
- Issue 2: Sanitize and validate all incoming API inputs
  - `src/validators/tourValidators.js`, `src/validators/inquiryValidators.js`

### Day 5
- Issue 1: Refactor tours controller for cleaner code (service layer)
  - `src/services/toursService.js`
- Issue 2: Add pagination to tours list endpoint
  - Query: `/api/tours?page=1&limit=10`

### Day 6
- Issue 1: Add price filters to tours list
  - Query: `/api/tours?minPrice=500&maxPrice=2000`
- Issue 2: Add validation for tour create/update
  - `src/validators/tourValidators.js`

### Day 7
- Issue 1: Refactor inquiry controller into service layer
  - `src/services/inquiryService.js`
- Issue 2: Add pagination to inquiries list endpoint
  - Query: `/api/inquiries?page=1&limit=10`

---

## WEEK 2 — Inquiries, Notifications, Logging, Config, Security

### Day 8
- Issue 1: Add validation for inquiry create payload
- Issue 2: Add inquiry sorting & status filter
  - Query: `/api/inquiries?status=new&sort=created_at&order=desc`

### Day 9
- Issue 1: Add email notification on new inquiry (optional config)
  - `src/services/emailService.js` (skips if env not configured)
- Issue 2: Move email config to env variables
  - `.env.example` and docs

### Day 10
- Issue 1: Add request logging middleware
  - `src/middlewares/logger.js`
- Issue 2: Add request ID tracking to logs
  - `src/middlewares/requestId.js` and `X-Request-Id` header

### Day 11
- Issue 1: Implement restrictive CORS configuration
  - `CORS_ORIGIN` in `.env`
- Issue 2: Add helmet security middleware
  - `helmet()` in `src/app.js`

### Day 12
- Issue 1: Add 404 handler for unknown APIs
  - `src/middlewares/notFound.js`
- Issue 2: Centralize error codes configuration
  - `src/config/errorCodes.js`

### Day 13
- Issue 1: Fix MySQL connection pooling usage
  - `src/config/db.js` uses `mysql2` pool + promises
- Issue 2: Move raw SQL into dedicated service layer
  - `src/services/*`

### Day 14
- Issue 1: Add environment-based config loader
  - `src/config/index.js`
- Issue 2: Add startup validation for environment variables
  - `src/config/validateEnv.js` (DB vars optional for XAMPP; JWT_SECRET required)

---

## WEEK 3 — Health Checks, Docs, Tests, Docker, Cleanup

### Day 15
- Issue 1: Add /api/health endpoint
  - Output: `/api/health`
- Issue 2: Add /api/ready database readiness check
  - Output: `/api/ready`

### Day 16
- Issue 1: Add Swagger/OpenAPI base setup
  - Output: `/api/docs`
- Issue 2: Document tours & inquiries schemas in Swagger
  - Routes contain `@openapi` comments

### Day 17
- Issue 1: Create unit tests for tours service (starter example)
- Issue 2: Add integration tests for tours routes (starter example)

### Day 18
- Issue 1: Add tests for auth error scenarios (recommended)
- Issue 2: Add tests for inquiry create/list endpoints (recommended)

### Day 19
- Issue 1: Create Dockerfile for backend service
- Issue 2: Add docker-compose for backend + MySQL

### Day 20
- Issue 1: Cleanup unused code & logs
- Issue 2: Add code comments & JSDoc annotations

### Day 21
- Issue 1: Final backend structure review & polish
- Issue 2: Create deployment checklist documentation
  - `docs/DEPLOYMENT_CHECKLIST.md`
