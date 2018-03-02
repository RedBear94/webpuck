//import name from './name';
//import { qv } from './funcs';

//console.log(`Hi, ${name}!`);
//console.log(qv(5));

//console.log(require('./name'));

//import sum from 'lodash/sum';
//console.log(sum([1, 2, 3]));

import moment from 'moment';
import {internet} from 'faker';

const el=document.body.appendChild(document.createElement('pre'));
el.textContent += '\n';
el.textContent += moment.format('DD.MM.YYYY hh:mm:ss');
el.textContent += internet.email();

const el2=document.body.appendChild(document.createElement('h4'));
el2.setAttribute('id','author'); 
el2.setAttribute('title','GossJS'); 
el2.textContent='Babaritskiy Pavel';
