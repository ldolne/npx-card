#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

// Content of the card + styles
const cardData = {
    labelWork: chalk.white.italic("       Work:"),
    labelLinkedIn: chalk.white.italic("   LinkedIn:"),
    labelGitHub: chalk.white.italic("     GitHub:"),
    labelInstagram: chalk.white.italic("    Instagram:"),
    labelTwitter: chalk.white.italic("    Twitter:"),
    labelWeb: chalk.white.italic("        Web:"),
    labelNpm: chalk.white.italic("        npm:"),
    labelCard: chalk.white.italic("       Card:"),

    name: chalk.red("             Laëtitia Dolne"),
    pseudo: chalk.red("lunahaya"),
    work: chalk.green("Junior Web Developer in training @ BeCode Liège"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.yellow("la%C3%ABtitia-dolne-7a92071a3/"),
    github: chalk.gray("https://github.com/") + chalk.blue("ldolne"),
    instagram: chalk.gray("https://instagram.com/") + chalk.magenta("ldolne_lunahaya"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("ldolne_lunahaya"),
    web: chalk.green("http://lunahaya.com/"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~ldolne"),
    npx: chalk.gray("npx") + " " + chalk.green("@ldolne/npx-card"),
};

// Lines
const newLine = "\n";
const emptyLine = "";

// Print
console.log(
    chalk.green(
        boxen(
            [
                `${cardData.name} ~ ${cardData.pseudo}`,
                emptyLine,
                `${cardData.labelWork} ${cardData.work}`,
                emptyLine,
                `${cardData.labelLinkedIn} ${cardData.linkedin}`,
                `${cardData.labelGitHub} ${cardData.github}`,
                `${cardData.labelInstagram} ${cardData.instagram}`,
                `${cardData.labelTwitter} ${cardData.twitter}`,
                `${cardData.labelWeb} ${cardData.web}`,
                `${cardData.labelNpm} ${cardData.npm}`,
                emptyLine,
                `${cardData.labelCard} ${cardData.npx}`,
            ].join(newLine),
            {
                padding: 1,
                margin: 1,
                borderStyle: "classic",
            },
        ),
    ),
);
