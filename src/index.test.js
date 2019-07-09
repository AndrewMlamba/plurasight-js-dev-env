import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('shoud pass', () => {
        expect(true).to.equal(true)
    });
});

describe('index.html', () => {
    it('should say My First Heading', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function (err, window) {
            const h1 = window.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('My First Heading');
            done();
            window.close();
        });

    });
});
