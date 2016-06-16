import module from './module';

class HomepageController {

    playlist = [
        'Another day',
        'Blibs',
        'canada',
        'Chilled',
        'csb',
        'Cthulhu',
        'Gaza',
        'Glitchy',
        'Jaa-a',
        'Jukola',
        'Lines',
        'Minding',
        'Nineteen',
        'One Note',
        'over',
        'Perfect Day',
        'Rounds',
        'sjh',
        'Something Unknown',
        'Song 1',
        'Such luck',
        'Tuesday',
        'Zenny'
    ];
}

module.component('homepage', {
    template: require('./homepage.html'),
    controller: HomepageController,
    controllerAs: 'homepage'
});
