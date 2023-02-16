#!/bin/bash

sed -i "s/Vite/VITE/g" dist/index.html

svg=$(ls dist/ | grep svg)
sed -i "s/\/$svg/.\/$svg/g" dist/index.html

js=$(ls dist/assets | grep js)
sed -i "s/\/assets\/$js/.\/assets\/$js/g" dist/index.html

css=$(ls dist/assets | grep css)
sed -i "s/\/assets\/$css/.\/assets\/$css/g" dist/index.html

manifest=$(ls dist/ | grep webmanifest)
sed -i "s/\/$manifest/.\/$manifest/g" dist/index.html

registerSW=$(ls dist/ | grep registerSW)
sed -i "s/\/$registerSW/.\/$registerSW/g" dist/index.html
