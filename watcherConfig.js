var config = {
  directory: '\.', // The directory which will be watched for changes. If falsy, the parent directory of this module will be watched.
  ignore: [ // ignore can be a string, regex, function or an array containing any of them. Has to be anymatch compatible, see https://github.com/es128/anymatch
    /node_modules/,
    /\.git/
  ],
  delay: 100, // Delay the execution of the commands on change in ms
  sync: false, // Default value for all commands that don't specify a sync property themselves. An exception are the commands on end, which will always run synchronously to ensure a proper clean up.
  verbosity: 'normal', // Possible values are: minimal, normal, verbose
  commandsOnStart: [
    'npm start'
  ],
  commandsOnChange: [
    'npm start'
  ],
  commandsOnEnd: [

  ]
};