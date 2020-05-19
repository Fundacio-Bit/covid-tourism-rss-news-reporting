# COVID TOURISM RSS NEWS REPORTING

Project developed and managed by:

    Agència d'Estratègia Turística de les Illes Balears (AETIB)

    Fundació Balears d'Innovació i Tecnologia (Fundació BIT)

Used to provide media news processed data to the AETIB. They will be included in reports that evaluate how the COVID global sanitary crisis affects the tourism sector in balearic islands.

Data are retrieved from a database populated by an [RSS news extraction](https://github.com/Fundacio-Bit/escolta-activa-rss-news-etl) procedure.

## Architecture

- Version: 1.0.0
- Development Status: Under development
- Runtime Environment: NodeJS
- Database Environment: Mongo
- Programming Language: Javascript
- User Interface: Command line

## Requirements

- **NodeJS**

Current version: v8.11.3 (also working with v10.19.0).

It is advised to use [prettier](https://www.codereadability.com/automated-code-formatting-with-prettier/) to ensure good formatting practices.

- **MongoDB**

Current version: v4.0.9

## Usage

- **Clone the repository**

```console
git clone https://github.com/Fundacio-Bit/covid-tourism-rss-news-reporting.git
```

- **Install Node dependencies**

```console
npm install
```

- **News retreieval**

Execute the retrieval of news from the database.

```console
node get-news.js
```

## License

[MIT License](./LICENSE)
