#!/bin/sh
':' //; exec "$(command -v node)" "--harmony" "$0" "$@"

// about the shebang: we can't pass '--harmony' to node via /usr/bin/env
require('../errordog.js');
