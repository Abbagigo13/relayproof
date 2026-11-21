
# RelayProof — Development Setup

## 1. Requirements

- Windows 10/11 or Linux.
- Node.js LTS.
- npm.
- Git.
- Visual Studio Code.
- PostgreSQL.
- Docker Desktop or a Linux Docker host for later runner development.

## 2. Clone Repository

```powershell
git clone https://github.com/Abbagigo13/relayproof.git
cd relayproof
```

## 3. Frontend Setup

```powershell
npm install
npm run dev
```

Frontend:

<http://localhost:5173>

## 4. Backend Setup

```powershell
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```

Backend health check:

<http://localhost:4000/api/health>

## 5. PostgreSQL Setup

Install PostgreSQL using the official Windows installer.

Recommended initial configuration:

- Database username: postgres
- Port: 5432
- Database name: relayproof

Create the database:

```sql
CREATE DATABASE relayproof;
```

## 6. Environment Variables

Backend `.env`:

```env
NODE_ENV=development
PORT=4000
HOST=0.0.0.0
FRONTEND_URL=http://localhost:5173
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/relayproof
```

Replace YOUR_PASSWORD with your actual local PostgreSQL password.

Never commit `.env`.

## 7. Prisma Setup

Prisma is planned for database integration.

After installing and configuring the version-compatible Prisma packages:

```powershell
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

Use the actual Prisma configuration generated for the selected version.

## 8. Development Ports

| Service | Port |
| --- | --- |
| Frontend | 5173 |
| Backend | 4000 |
| PostgreSQL | 5432 |
| Redis | 6379 |

Redis is planned for background verification jobs.

## 9. Running the Project

Use separate terminals.

Terminal 1:

```powershell
npm run dev
```

Terminal 2:

```powershell
cd backend
npm run dev
```

## 10. Troubleshooting

If the frontend fails:

- Check npm install.
- Check the current directory.
- Inspect Vite errors.

If the backend fails:

- Check backend dependencies.
- Check port 4000.
- Inspect environment variables.

If PostgreSQL fails:

- Check Windows Services.
- Check port 5432.
- Verify the database password.

## 11. Security

Do not commit:

- `.env`
- Database passwords.
- API keys.
- Private keys.
- Signing keys.
- Production credentials.
