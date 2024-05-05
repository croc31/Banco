CREATE DATABASE bank;

CREATE TABLE IF NOT EXISTS accounts (
  id VARCHAR NOT NULL UNIQUE,
  balance DECIMAL NOT NULL DEFAULT 0
);