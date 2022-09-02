## User Authentication With NodeJS and ExpressJS

### Install

```
npm install
```

### Database & Table

```sql
create database db_parkir;

Create table admin (
    id serial PRIMARY KEY,
    nama varchar(50) ,
    username varchar(50),
    password VARCHAR(100) 
);

```

### Make .env File with This Template

```
APP_HOST=localhost
APP_PORT=5000
DB_DRIVER=postgresql //your database driver
DB_HOST=localhost //your database host
DB_PORT=5432 //your database port
DB_USER=username //your database user
DB_PASS=password //your database password
DB_NAME=db_parkir //your database name

```

### API Spec

- Host: `localhost`
- Port: `5000`

#### Transaksi

- Request: `POST`
- Endpoint: `/transaksi`
- Body

```json
{
    "id_admin":6,
    "nomor_plat":"B 8765 MMM"
}
```

- Request: `GET`
- Endpoint: `/transaksi`
- Response:

```json
{
    "code": 200,
    "msg": "SUCCESS",
    "data": [
        {
            "id": 2,
            "id_admin": 1,
            "tanggal_jam_masuk": "2022-09-01T14:55:50.000Z",
            "tanggal_jam_keluar": null,
            "nomor_plat": "B 51152 KO"
        },
        {
            "id": 1,
            "id_admin": 1,
            "tanggal_jam_masuk": "2022-09-01T12:25:35.000Z",
            "tanggal_jam_keluar": "2022-09-01T15:33:33.000Z",
            "nomor_plat": "B 51152 KLO"
        },
        {
            "id": 4,
            "id_admin": 6,
            "tanggal_jam_masuk": "2022-09-02T03:18:20.000Z",
            "tanggal_jam_keluar": null,
            "nomor_plat": "B 6515 JJJ    "
        },
        {
            "id": 5,
            "id_admin": 6,
            "tanggal_jam_masuk": "2022-09-02T11:56:28.000Z",
            "tanggal_jam_keluar": null,
            "nomor_plat": "B 8765 MMM"
        },
        {
            "id": 3,
            "id_admin": 6,
            "tanggal_jam_masuk": "2022-09-01T15:43:44.000Z",
            "tanggal_jam_keluar": "2022-09-02T11:58:31.000Z",
            "nomor_plat": "B 877 PLK"
        }
    ]
}
```

- Request: `PUT`
- Endpoint: `/transaksi/keluar`
- Body

```json
{
    "id":5,
    "nomor_plat":"B 8765 MMM"
}
```

- Response:

```json
{
    "code": 200,
    "msg": "SUCCESS",
    "data": {
        "id": 5,
        "id_admin": 6,
        "tanggal_jam_masuk": "2022-09-02T11:56:28.000Z",
        "tanggal_jam_keluar": "2022-09-02T12:02:03.000Z",
        "nomor_plat": "B 8765 MMM",
        "harga_parkir": 3000
    }
}
```
