module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", //n preciso importar react em todas page
      },
    ],
  ],
};
