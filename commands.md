## Gerar o código de uma migration com base nas alterações feitas nas entidades:
-- npx typeorm migration:generate -d ./dist/database/data-source.js ./src/database/migrations/NOME-DA-MIGRATION

## Criar um arquivo de Migration vazio:
-- npx typeorm migration:create ./src/database/migrations/NOME-DA-MIGRATION
