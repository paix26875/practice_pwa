#!/bin/bash

sed -i "s/Vite/VITE/g" index.html

svg=$(ls dist/ | grep svg)
sed -i "s/\/$svg/.\/$svg/g" index.html

js=$(ls dist/assets | grep js)
sed -i "s/\/assets\/$js/.\/assets\/$js/g" index.html

css=$(ls dist/assets | grep css)
sed -i "s/\/assets\/$css/.\/assets\/$css/g" index.html

manifest=$(ls dist/ | grep webmanifest)
sed -i "s/\/$manifest/.\/$manifest/g" index.html

registerSW=$(ls dist/ | grep registerSW)
sed -i "s/\/$registerSW/.\/$registerSW/g" index.html
