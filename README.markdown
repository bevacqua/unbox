# [**unbox**](http://bevacqua.io)

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
grunt dev # aliased `grunt`
```

# Development Flow

In local development you can use `grunt` to configure and build everything. As you make changes, the `watch` task will re-compile any assets as needed, and its `livereload` target will load changes in the browser, making for continuous development.

In order to enable `livereload`, you'll need to install the [browser extension](http://feedback.livereload.com/knowledgebase/articles/86242).

# Deployment

See the [README](https://github.com/bevacqua/io/tree/master/deploy/README.markdown) about deploys.

  [1]: http://i.imgur.com/gBuopo8.png "Unbox it!"
