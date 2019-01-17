# Documentation
## Installation

    git clone https://git.serko.xyz/serko/textile
    cd textile
    
Copy and edit configuration file `.env`
    
    cp .env.example .env
    
After that, you need to open the .env file and change the params


## Webpack

Webpack is a module bundler. 
We use webpack to manage JavaScript and SCSS conversion

First, you need to install the npm libraries:

    npm install
    
Then run webpack (for developing):

    npm run watch
    
    
Build bundle for production:

    npm run build


Read more [npm](https://www.npmjs.com/), [webpack](https://webpack.github.io/)
    
