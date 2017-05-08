1.npm install react-router@2.0.0 --save
2.how to check a variable is a number.
 if(typeof variable==='number')
3.Implement a promise to add two numbers
4.npm install axios --save
5.devtool:'cheap-module-eval-source-map' 
this lets you to step into the actual source code instead of the massive bundle.js
6. Important difference between anonymous and arrow functions.
   Anonymous functions have the this binding whereas arrow functions take their
   parent's this binding.
   
   this in an arrow function refers to object in which the arrow function resides.
7. What is stateless functional components.They are just preentational dumb components.

8.git init
  git add . (adds all the files and folders to git)
  git config --global user.email cvasit@gmail.com

  ssh-keygen -t rsa -b 4096 -C 'cvasit@gmail.com'
  eval "$(ssh-agent -s)"
  git commit -a -m 'updates'
  while entering file paths be sure to use forward slash instead of back slash.
  ssh -T git@github.com
  git remote add origin git@github.com:cvasit/ReactWeather.git
git push -u origin master

git remote add origin git@github.com:<cvasit>/ReactWeather.git


rm -rf .git
git init .
git remote add origin git@github.com:<username>/demo_app.git
git commit --allow-empty -m 'First commit'
git push origin master



