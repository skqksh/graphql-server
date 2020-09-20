## Setting

### add file

```
config/.dev.env
config/.prod.env
config/.test.env
prisma/.env
```

### config/.\*.env

```
PW_SECRET=login_password_secret_key
JWT_SECRET=json_web_token_secret_key
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

### prisma/.env

```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

- It's for script prisma:update

## Install

- install postgresql
- create database with `sql/schema.sql`
- make another database for integration test
- with VSCode, Jest Runner will be useful for the tests
