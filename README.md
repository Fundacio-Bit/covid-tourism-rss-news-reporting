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

- **KPIs and news by term ZIP creation**
  **_ Development _**
  Execute

```console
node main.js --date <date> --mode dev
```

Valid <date> argument is 'lastWeek' to start the analysis with data from one week go. Or a date formatted as "YYYY-MM-DD" as statring date.

**_ Production _**

Execute:

```console
node main.js --date <date> --mode prod
```

Valid <date> argument is 'lastWeek' to start the analysis with data from one week go. Or a date formatted as "YYYY-MM-DD" as statring date.

You can also program a CRONTAB to schedule weekly executions. I.e:

```bash
00 5 * * 1  node /home/ubuntu/fbit_projects/escolta_activa/covid-tourism-rss-news-reporting/main.js --date lastWeek --mode prod
```

## License

[MIT License](./LICENSE)
