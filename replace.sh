#!/bin/bash

svg=$(ls | grep svg)
sed -i "s/\/$svg/.\/$svg/g" index.html

js=$(ls assets | grep js)
sed -i "s/\/assets\/$js/.\/assets\/$js/g" index.html

css=$(ls assets | grep css)
sed -i "s/\/assets\/$css/.\/assets\/$css/g" index.html

manifest=$(ls | grep webmanifest)
sed -i "s/\/$manifest/.\/$manifest/g" index.html

registerSW=$(ls | grep registerSW)
sed -i "s/\/$registerSW/.\/$registerSW/g" index.html
