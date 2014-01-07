# unbox [![Build Status](https://travis-ci.org/bevacqua/unbox.png?branch=master)](https://travis-ci.org/bevacqua/unbox) [![Dependency Status](https://gemnasium.com/bevacqua/unbox.png)](https://gemnasium.com/bevacqua/unbox)

#### Unbox a node application with a well-designed build-oriented approach in minutes

![unbox-512.png][1]

# Cloning

You could clone it yourself, and then do:

```shell
git clone https://github.com/bevacqua/unbox.git
rm -rf .git/
npm install
bower install
```

Alternatively, you could `unbox` it. This will run the commands listed above.

```shell
git clone https://github.com/bevacqua/unbox.git
cat unbox.sh | sh
```

Now you're all set to start working in the development environment. Just issue this command to start your continuous development cycle:

```shell
grunt dev
```

# Development Flow

In local development you can use `grunt` to configure and build everything. As you make changes, the `watch` task will re-compile any assets as needed, and its `livereload` target will load changes in the browser, making for continuous development.

In order to enable `livereload`, you'll need to install the [browser extension](http://feedback.livereload.com/knowledgebase/articles/86242).

# Deployment

See the [README](https://github.com/bevacqua/io/tree/master/deploy/README.markdown) about deploys.

# Unboxed Projects

Send a Pull Request to add yours!

- [bevacqua.io](https://github.com/bevacqua/io)

  [1]: http://i.imgur.com/gBuopo8.png "Unbox it!"

![ga](https://ga-beacon.appspot.com/UA-35043128-6/unbox/readme?pixel)
