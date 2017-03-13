import platform from 'nej-commonjs/base/platform';
import element from 'nej-commonjs/base/element';

element._$getByClassName(document.body, 'j-info')[0].innerHTML = JSON.stringify(platform, null, 4);