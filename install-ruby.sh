#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Install Ruby with the --verify-downloads 2 flag
rbenv install --skip-existing --verify-downloads 2 $RUBY_VERSION
rbenv global $RUBY_VERSION
