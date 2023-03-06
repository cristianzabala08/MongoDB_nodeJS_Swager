import * as dotenv from "dotenv";

 if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export default {
  port: process.env.PORT || 4000,
  dbUri: process.env.DB,
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
