import {Sitem} from './component';
import {ClickMeComponent} from './textview';

// import {SitemService} from '../services/sitemDataService';
import {bootstrap} from 'angular2/platform/browser';
import "rxjs/Rx";

import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(ClickMeComponent);

// bootstrap(Sitem, [ROUTER_PROVIDERS,
// 	provide(APP_BASE_HREF, {useValue: '/haha'})
// ]);