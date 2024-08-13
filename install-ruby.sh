#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Print Ruby version for debugging
ruby --version

# Install bundler
gem install bundler

# Print bundler version for debugging
bundle --version