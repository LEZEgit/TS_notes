eventually we are linking the compiled JavaScript file to an HTML file, so we can run it in the browser.

to be able to run the TypeScript code, we need to compile it to JavaScript using the command: tsc main.ts

this will create a main.js file in the same directory, which we can then link to our HTML file.

if changes are made to the TypeScript file, we need to recompile it to see the changes in the browser.

to automate this process, we can use the command:

```
tsc main.ts --watch
```

this will watch for changes in the TypeScript file and automatically recompile it to JavaScript whenever a change is detected.

but this is not the best way to do it when working on larger projects.

we instead use a configuration file called tsconfig.json, which allows us to specify the compiler options and the files to be included in the compilation process.

to create a tsconfig.json file, we can use the command: tsc --init

this will create a tsconfig.json file with default settings, which we can then modify to suit our needs.

in the tsconfig.json file, we can specify the compiler options such as the target JavaScript version, the module system, and the
root directory for the TypeScript files (./src for example), and the
output directory for the compiled JavaScript files (./build/js for example).

// Other Outputs
"sourceMap": false,
"declaration": false,
"declarationMap": false,

changed the above settings to false because we don't need those files for this project, and it will speed up the compilation process.

we want to ignore any ts files other than in the src

## moduleDetection Issue

when using `tsc -w`, if the compiled JS file includes `export {};` at the end, it causes issues in the browser's live preview inspect option.

this happens when `"moduleDetection": "force"` is set in tsconfig.json, which forces every file to be treated as a module.

**Solution:** Change `"moduleDetection"` from `"force"` to `"auto"` in tsconfig.json.

This way, only files that actually import or export something will be treated as modules, and simple scripts won't have the unnecessary `export {};` line added.


valid js is valid ts
but invalid ts can be valid js too
the tsc -w would still compile the invalid ts to create a valid js file

we can stop this 
(not create a js file out of invalid ts file) 
by adding a key-value in tsconfig.json
"noEmitOnError": true,