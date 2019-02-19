#!/usr/bin/env node

const { readPackageJson, writePackageJson, serialCommands, changeDirectory } = require('./auxFunctions');
const path = require('path');
const pkgPath = path.join(process.cwd(), 'package.json');
const pkgLibPath = path.join(process.cwd(), 'projects/ngx-modal/package.json');

const readmePath = path.join(process.cwd(), 'README.md');
const readmePathDest = path.join(process.cwd(), 'dist/ngx-modal/README.md');
const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
const changelogPathDest = path.join(process.cwd(), 'dist/ngx-modal/CHANGELOG.md');

const fs = require('fs');

function log(...args) {
    args[0] = '[sport-dl-theme] ' + args[0]
    console.log(...args)
}

function newBuild(){
    log('   Build New version ...');
    return serialCommands([
            ['npm', ['run','build-lib']]
        ]).then(async val => {
            await fs.copyFile(readmePath, readmePathDest,() => {});
            await fs.copyFile(changelogPath, changelogPathDest, () => {});
        })
}

function updateVersion(type,paramsStandardVersion){
    if(type === 'alpha' || type === 'prerelease' || type === 'release' || type === 'latest'){
        log('   updating version ...');
        return serialCommands([
                ['standard-version', [paramsStandardVersion]]
            ]).then(async val => {
                var objPkg = await readPackageJson(pkgPath);
                var objLibPkg = await readPackageJson(pkgLibPath);
                objLibPkg.version = objPkg.version;
                var objPkg = await writePackageJson(objLibPkg, pkgLibPath);
                log('   Done new version ... '+objLibPkg.version);
                return newBuild();
            })
    }
    else{
        throw new Error('[sport-dl-theme] -> no es un tipo de version(alpha, prerelease, release)' )
    }
}

function publish(){
    const paramsStandardVersion = process.argv[3] || 'prerelease';
    const type = process.argv[3] || 'prerelease';
    console.log(type,paramsStandardVersion);
    log('updating version ...');
    return updateVersion(type,paramsStandardVersion).then( async val =>{
        log('Push version to bitbucket...');
        await serialCommands([
            ['git', ['push','--follow-tags', 'origin', 'master']],
        ])
        changeDirectory('./dist/ngx-modal')
        log('Publishing...');
        return await serialCommands ([
            ['npm ', [ 'publish', '--tag', type]]
        ])
    })
}

publish();
