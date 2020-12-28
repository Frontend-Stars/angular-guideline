interface EnvironmentType {
  production: boolean;
  apiKey: string;
}

export type Environment = Readonly<EnvironmentType>;
