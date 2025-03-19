import dotenv from "dotenv";

dotenv.config();

type globals = {
  infuriaProjectId: string;
  privateKey: string;
};

export const globals: globals = {
  infuriaProjectId: `${process.env.INFURIA_PROJECT_ID}`,
  privateKey: `${process.env.PRIVATE_KEY}`,
};
