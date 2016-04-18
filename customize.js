import fs from 'fs';

let { PROJECT_NAME, GITHUB_USERNAME, AUTHOR_NAME, AUTHOR_EMAIL } = process.env;

if(!PROJECT_NAME || !GITHUB_USERNAME || !AUTHOR_NAME || !AUTHOR_EMAIL){
  console.error('Must provide PROJECT_NAME, GITHUB_USERNAME, AUTHOR_NAME, AUTHOR_EMAIL as environment variables!');
  process.exit();
}

let packageJSON = fs.readFileSync('./.package.json').toString();
let gitConfig = fs.readFileSync('./.gitconfig').toString();
let webpackConfig = fs.readFileSync('./.webpack.config.js').toString();
let projectName = PROJECT_NAME;
let repo = [GITHUB_USERNAME, `${projectName}`].join('/');
let gitConfigNew = gitConfig.replace('calvinfroedge/react-workbench', repo);
let packageJSONNEW = packageJSON.replace('react-workbench', projectName.replace(' ', '-').toLowerCase()).replace('Calvin Froedge', AUTHOR_NAME).replace('calvinfroedge@gmail.com', AUTHOR_EMAIL);
let webpackConfigNEW = webpackConfig.replace('ReactWorkbench', projectName.replace(' ', ''));
fs.writeFileSync('./.git/config', gitConfigNew);
fs.writeFileSync('./package.json', packageJSONNew);
console.info('Wrote updates to package.json, .git/config, and wepback.config.js.\n');
