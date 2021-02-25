##Clone the Repo

```bash
$ git clone https://github.com/aaronrine/vanilla-progress-bar.git
$ cd vanilla-progress-bar
```

##Develop Locally

If you are using Visual Studio Code, I highly recommend the live server addon. Otherwise, here is a way to setup http-server:
Install NPM (Node Package Manager) for your system.

```bash
$ npm install --global http-server
$ http-server
```

visit http://localhost:8080 to see the site.

##Deploy With Docker

```bash
$ docker build -t vanilla-progress-bar
$ docker run -d --name vanilla-progress-bar -p 8080:80 vanilla-progress-bar
```
