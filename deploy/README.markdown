# Release and Deploy

For the release flow, simply run `grunt build:release`. This will compile everything under the `release` distribution, and bump the build version.

For deployments, I wrote [grunt-ec2](https://github.com/bevacqua/grunt-ec2). This is a package built to interact with **AWS EC2** easily and solely using Grunt tasks.

The first time around, you'll want to execute the `deploy_setup` task, installing necessary dependencies. Note that you _will need the decryption key for deployment configuration_.

To perform deployments, simply use `grunt deploy` to deploy to `edge` (staging), and `grunt deploy_production` to deploy to `production`.
