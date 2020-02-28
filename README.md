lerna run <cmd>
this will run a command that is in any of the packages
if all apps have a "start" script, `lerna run start` will run all at the same time
to all for changes to transpile in different apps run `lerna run --parallel start` this will
show the stack trace for each individual app running