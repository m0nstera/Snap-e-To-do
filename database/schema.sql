CREATE SCHEMA myschema;

DROP DATABASE [ IF EXISTS ] Todos;

CREATE DATABASE Todos;

CREATE TABLE [IF NOT EXISTS] "Todos"(
  "id" int NOT NULL GENERATED ALWAYS AS IDENTITY,
  item varchar(100) NOT NULL,
  "completed" BOOL DEFAULT 'f'
);

-- Indexes:
--     "items_pkey" PRIMARY KEY, btree (id)

-- INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
-- VALUES (value1, value2, value3,...valueN);

-- SELECT column1, column2, columnN FROM table_name;
-- SELECT * FROM table_name;

-- UPDATE table_name
-- SET column1 = value1, column2 = value2...., columnN = valueN
-- WHERE [condition];

-- DELETE FROM table_name
-- WHERE [condition];