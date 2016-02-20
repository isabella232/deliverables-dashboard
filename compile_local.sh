#!/bin/sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
jade --path $DIR $DIR/index.jade --pretty -O $DIR/data/engagement.json