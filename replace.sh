#!/bin/bash

sed -i "s/Vite/VITE/g" dist/index.html

#svg=$(ls dist/ | grep svg)
#sed -i "s/\/$svg/\/practice_pwa\/$svg/g" dist/index.html

js=$(ls dist/assets | grep js)
sed -i "s/\/assets\/$js/\/practice_pwa\/assets\/$js/g" dist/index.html

css=$(ls dist/assets | grep css)
sed -i "s/\/assets\/$css/\/practice_pwa\/assets\/$css/g" dist/index.html

manifest=$(ls dist/ | grep webmanifest)
sed -i "s/\/$manifest/\/practice_pwa\/$manifest/g" dist/index.html

registerSW=$(ls dist/ | grep registerSW)
sed -i "s/\/$registerSW/\/practice_pwa\/$registerSW/g" dist/index.html
