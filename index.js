module.exports = {
    "parser": "babel-eslint",
    "globals": { "fetch": false, "alert": false, "__DEV__": true },
    "env": {
      "es6": true
    }
    "extends": [
        "standard",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "prettier",
        "react",
        "standard"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-uses-react": "off"
    }
}
