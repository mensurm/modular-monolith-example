This is an example of a modular monolith setup in Typescript.
The code is split into 3 parts
- core
- modules 
- shared

And via linter rules are created so that core modules are not dependant on modules outside the code folder.
If you install ESLint into VSCode, the editor will highlight where defined rules are broken. 
You can also run the following command to check for linter errors.

`npx eslint .`