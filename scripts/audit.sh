#! /bin/bash
yarn audit --level moderate; [[ $? -ge 4 ]] && exit 1 || exit 0
