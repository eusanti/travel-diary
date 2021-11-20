module.exports = app => {

  // Base routes
  const baseRoutes = require("./base.routes");
  app.use("/", baseRoutes);

  const authRoutes = require("./auth.routes");
  app.use("/auth", authRoutes);
}

//TO DO
