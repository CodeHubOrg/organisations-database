import fs from 'fs';

const testPath = 'testdb.js';

const setup = () => {
    if (fs.existsSync(testPath)) {
        fs.truncateSync(testPath, 0);
    }
    return testPath;
}

export default setup;
