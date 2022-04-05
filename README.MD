# The apsis-backend-orm.
This project exports the `sequelize` apsis-backend-orm:

- models

## Quickstart
Create new migrations and check if they are correctly working:

- `$ npm install`
- `$ docker-compose up`
- `$ npm db:migrate`

```
"migrations": [
    "orm/migrations/*.js"
  ],
```