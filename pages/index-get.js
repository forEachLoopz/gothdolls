const { Encoding } = require('discord.js');
const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

const READ_OPTIONS = {encoding: 'utf-8'}
const indexURL = 'C:/Users/Val le bg/Documents/gothdolls-main/gothdolls/index.html'
module.exports = async() => {
    const contenu = await readFileAsync(indexURL, READ_OPTIONS)
    return contenu
}