const DEBUG = true;

class Config {
  constructor() {
    if (DEBUG) console.log("DEBUG (sqlConfig): Initializing sqlConfig");
    this._config = {};
  }

  get() {
    return this._config;
  }

  set(config) {
    this._config = config;
  }
}

const sqlConfig = new Config();
Object.seal(sqlConfig);

export default sqlConfig;
