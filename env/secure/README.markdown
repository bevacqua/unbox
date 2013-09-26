# Secure Environment Configuration

These values are encrypted using a `.pem` key that isn't distributed as part of the repository. The configuration present in these files pertains to API credentials, secure passwords, and the like.

The upside of this approach is that you can distribute changes to the configuration values safely through `git`, and decrypt the updated version using the same `.pem` key you already have, making the process a bit less tedious.

Note that you shouldn't be changing values to `development.json` if you're not going to update the `.pemjson` version. You should use the `env/private/user.json` file, instead.
