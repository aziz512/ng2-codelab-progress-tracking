import {Route} from '@angular/router';
import {ProgressComponent} from './progress/progress.component';
import {FeedbackComponent} from './feedback/feedback.component';

export const AppRoutes: Route[] = [
    {path: '', component: ProgressComponent},
    {path: 'feedback', component:FeedbackComponent},
]