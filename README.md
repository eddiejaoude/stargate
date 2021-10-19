<h1 align="center">
  :robot: Discord bot using <a href="http://links.eddiejaoude.io/t/CiEQRydj4GdT">Stargate</a> :robot:
</h1>

<div align="center">

[![Total alerts](https://img.shields.io/lgtm/alerts/g/eddiejaoude/stargate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/eddiejaoude/stargate/alerts/)

</div>

<table border="0">
  <tr>
    <td align="center">
      Stargate is a data gateway deployed between client applications and a database. It's built with extensibility as a first-class citizen and makes it easy to use a database for any application workload by adding plugin support for new APIs, data types, and access methods.
    </td>
    <td align="center">
      YouTube video of Stargate
      <a href="http://www.youtube.com/watch?v=2ltVf2EscmM">
        <img src="http://img.youtube.com/vi/2ltVf2EscmM/0.jpg" alt="YouTube thumbmnail for Stargate" />
      </a>
    </td>
  </tr>
</table>

## Technologies Used

- [DiscordJS](https://discordjs.guide) with [Typescript](https://www.typescriptlang.org)
- Stargate - sign up with GitHub login for [FREE on DataStax Stargate](http://links.eddiejaoude.io/t/CiEQRydj4GdT) and get a NoSQL DB up in minutes with approximately `30 million reads, 5 million writes, and 40GB of storage per month for free` (Docker container also available) - [watch a 1min video by me on how to create and retrieve data](https://www.youtube.com/watch?v=JCAmqn1BxhY)

## GitHub actions
| Tag | Name | Triggers | Results |
| :--- |  :---  |  :--- | :--- |
| [![Changelog status](https://github.com/eddiejaoude/stargate/workflows/Changelog/badge.svg)](https://github.com/eddiejaoude/stargate/actions/workflows/changelog.yml) | Change Log | Pushes to main branch | Updates release tag |
| [![CodeQL status](https://github.com/eddiejaoude/stargate/workflows/CodeQL/badge.svg)](https://github.com/eddiejaoude/stargate/actions/workflows/codeql.yml) | CodeQL Status | Pushes & Pull Request | Checkout repository, installs dependencies, build files, perform analysis |
| [![Docker Publish status](https://github.com/eddiejaoude/stargate/workflows/Publish%20Docker%20image/badge.svg)](https://github.com/eddiejaoude/stargate/actions/workflows/docker.yml) | Docker Publish Status | Published releases | build, test, push to registory, deploy |
| [![Docs status](https://github.com/eddiejaoude/stargate/workflows/Docs/badge.svg)](https://github.com/eddiejaoude/stargate/actions/workflows/docs.yml) | Docs status | Pushes to doc/ repository | Checkout source files, build doc files, deploy |
| [![Labels status](https://github.com/eddiejaoude/stargate/workflows/Import%20labels/badge.svg)](https://github.com/eddiejaoude/stargate/actions/workflows/labels.yml) | Labels status | Pushes to doc/labels.json | checkout source files, install deps, import labels |
| [![Node CI status](https://github.com/eddiejaoude/stargate/workflows/Node.js%20CI/badge.svg)](https://github.com/eddiejaoude/stargate/actions/workflows/node-ci.yml) | Node CI status | Pushes & Pull Request | Checkout source files, install dependencies, lint source files, verify build, run tests |
| [![Stale issues and PRs status](https://github.com/eddiejaoude/stargate/workflows/Mark%20stale%20issues%20and%20pull%20requests/badge.svg)](https://github.com/eddiejaoude/stargate/actions/workflows/stale.yml) | Stale issues and PRs status | Iterval of every 30 minutes | Updates issue / PR messages & labels |

## Screenshot

![screenshot](https://user-images.githubusercontent.com/624760/113471843-0d3b7c80-9457-11eb-9c0c-29abb907c40d.png)

## Quickstart

1. Fork the project
2. Clone project using `git clone git@github.com:<YOUR-USERNAME>/stargate.git`
3. Navigate into the project using `cd stargate`
4. Run `cp .env.example .env`
5. Add the respective env-vars to the .env file
    - [generating Discord bot token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#keeping-your-token-safe)
    - [making AUTH token for Stargate](https://stargate.io/docs/stargate/1.0/developers-guide/authnz.html#_generate_an_auth_token)
6. Install dependencies `npm install`
7. Run the docker container for stargate (not this repo) with `docker-compose up`

## Docs

- [Project board v0.1](https://github.com/eddiejaoude/stargate/projects/1) of `to do`, `in progress`, `done`

Full docs deployed to https://eddiejaoude.github.io/stargate/ and available in the repo at [docs/README.adoc](docs/README.adoc)

### Building the docs

Install [AsciiDoctor](https://docs.asciidoctor.org/asciidoctor/latest/install/) and [CodeRay](https://docs.asciidoctor.org/asciidoctor/latest/syntax-highlighting/coderay/).

```
npm run docs
```

## Phase 1

### Goals

A video tutorial on how to use Stargate serverless

Features:

- CRUD usage of Stargate
- Discord Bot (bio, social links, timezone)
- 5-10mins edited video

### Challenges

- Cassandra is associated with being "scary"
- People using what they are used to even if the wrong tool for the job
- People use what they hear most for example Mongo or an equivalent in the frontend space React

### Storytelling

- That it is not any more difficult than similar alternatives
- Simple and quick to use at hackathons and build prototypes
- Scalable so that enterprise projects can use it too
- Serverless is an affordable option for everyone (also has a free tier)
- Stargate is open source and can grow and scale with the project

### Problem

- Awareness of Stargate
- Cassandra scares people, usually perceived as being "difficult" or "hard"
- Educating people on the benefits of using Stargate

### Solution

- Short / concise video (5-10mins)
- 1min social teaser video
- Include what is Stargate serverless
- Build a simple Discord bot, to get/set user details and read/write to DB using Stargate serverless (bio, socials)

### Vision

- Easily digestible content
- More projects on Github using Stargate
- Clear and engaging message
- Lowering the barrier to entry
- Low cost of usage
- Community excited about it

### Impact

- Evergreen content
- Searchable content
- Concise / digestible content for everyone to get started
- Community building their own projects with Stargate serverless

![DataStax Discord Bot v0.1](https://user-images.githubusercontent.com/624760/110018509-416c3200-7d1f-11eb-8f1b-444557401906.png)

### Made with :heart: by an awesome open source community!
