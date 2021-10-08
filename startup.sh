#!/bin/bash

function pause(){
   read -p "$*"
}

node index.js

pause 'Press [Enter] key to continue...'

