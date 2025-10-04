const pdf2md = require('@opendocsg/pdf2md');
const fs = require('fs');

(async () => {
    try {
        const markdown = await pdf2md('apresentacao_ia.pdf');
        fs.writeFileSync('apresentacao_ia.md', markdown);
        console.log('Conversion successful!');
    } catch (error) {
        console.error('An error occurred during conversion:', error);
    }
})();
