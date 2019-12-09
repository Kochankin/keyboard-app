require('../public/images/favicon.ico')

import '../style/app.scss';

import './Model/model.ts';
import './View/view.ts';
import './Controller/controller.ts';

import { BUTTONS } from './buttons-proto';
import { AppModel } from './Model/app-model';
import { AppView } from './View/app-view';
import { AppController } from './Controller/app-controller';


const model = new AppModel('en', false, false);
const view = new AppView(document.querySelector('.app-container'));
const controller = new AppController(model, view, BUTTONS);