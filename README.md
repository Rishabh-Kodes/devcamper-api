# DevCamper API

> DevCamper API which is a bootcamp directory management API.

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

The API is live at [apidevcamper.herokuapp.com](https://apidevcamper.herokuapp.com/)

- Version: 1.0.0
- License: MIT
- Author: Rishabh Raj

---

**Credit:** _Brad Traversy - [Node.js API Masterclass](https://www.udemy.com/course/nodejs-api-masterclass/)_
